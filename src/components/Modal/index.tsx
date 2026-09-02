import { useState, useEffect, FormEvent } from "react";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import axios from "axios"; 
import "react-toastify/dist/ReactToastify.css";

import { CiLock, CiAt, CiUser } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { BotaoLifeDesign } from "../../components/Button/BotaoLifeDesign";

interface Dependente {
  id?: number;
  nome: string;
  email: string;
  senha?: string;
}

interface CustomModalProps {
  show: boolean;
  handleClose: () => void;
  dependenteEditando?: Dependente | null;
  recarregarLista: () => void;
}

function CustomModal({ show, handleClose, dependenteEditando, recarregarLista }: CustomModalProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);

  //se clicou na engrenagem, preenche os dados
  useEffect(() => {
    if (dependenteEditando) {
      setNome(dependenteEditando.nome);
      setEmail(dependenteEditando.email);
      setSenha(dependenteEditando.senha || "");
      setConfirmarSenha(dependenteEditando.senha || "");
    } else {
      setNome("");
      setEmail("");
      setSenha("");
      setConfirmarSenha("");
    }
  }, [dependenteEditando, show]);

  const handleSalvar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    if (senha !== confirmarSenha) {
      toast.error("As senhas não coincidem!");
      return; 
    }

    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const payload = { nome, email, senha };

      //mesma logica do auto complete la em cima
      if (dependenteEditando) {
        await axios.put(`https://localhost:7019/api/Dependente/${dependenteEditando.id}`, payload, config);
        toast.success("Dependente atualizado com sucesso!");
      } 
      else {
        await axios.post("https://localhost:7019/api/Dependente", payload, config);
        toast.success("Cadastro realizado com sucesso!");
      }

      recarregarLista();
      handleClose();

    } catch (error: any) {
      toast.error(error?.response?.data?.erro || "Erro ao salvar dependente.");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{dependenteEditando ? "Editar Dependente" : "Adicionar Dependente"}</Modal.Title>
      </Modal.Header>

      <form onSubmit={handleSalvar} autoComplete="off">
        <Modal.Body>
          <div className="d-flex flex-column gap-3">
            
            <div className="input-group">
              <span className="input-group-text bg-light text-muted"><CiUser /></span>
              <input type="text" className="form-control" placeholder="Nome Completo" value={nome} onChange={(e) => setNome(e.target.value)} required />
            </div>

            <div className="input-group">
              <span className="input-group-text bg-light text-muted"><CiAt /></span>
              <input type="email" className="form-control" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="off" />
            </div>

            <div className="input-group">
              <span className="input-group-text bg-light text-muted"><CiLock /></span>
              <input type={mostrarSenha ? "text" : "password"} className="form-control" placeholder="Senha" value={senha} autoComplete="new-password" onChange={(e) => setSenha(e.target.value)} required />
              <span className="input-group-text bg-light text-muted" style={{ cursor: "pointer" }} onClick={() => setMostrarSenha(!mostrarSenha)}>
                {mostrarSenha ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

            <div className="input-group">
              <span className="input-group-text bg-light text-muted"><CiLock /></span>
              <input type={mostrarConfirmarSenha ? "text" : "password"} className="form-control" placeholder="Confirmar Senha" value={confirmarSenha} autoComplete="new-password" onChange={(e) => setConfirmarSenha(e.target.value)} required />
              <span className="input-group-text bg-light text-muted" style={{ cursor: "pointer" }} onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}>
                {mostrarConfirmarSenha ? <FaRegEye /> : <FaRegEyeSlash />}
              </span>
            </div>

          </div>
        </Modal.Body>

        <Modal.Footer>
          <div onClick={handleClose}>
            <BotaoLifeDesign texto="Cancelar" cor="cinza" />
          </div>
          
          <button type="submit" style={{ border: 'none', background: 'transparent', padding: 0 }}>
             <BotaoLifeDesign texto={dependenteEditando ? "Atualizar" : "Salvar"} cor="verdeEscuro" />
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default CustomModal;