import { useState, type FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageContainer from "../../AppContainers/PageContainer";
import HeaderPageComponent from "../../AppContainers/PageHeaderContainer";
import ContentPageContainer from "../../AppContainers/PageContentContainer";
import { MdPersonAdd } from "react-icons/md";
import { BotaoLifeDesign } from "../../components/Button/BotaoLifeDesign";
import BasicCardComponent from "../../components/BasicCardComponent"; 
import axios from "axios";
import { toast } from "react-toastify";

interface PlanoEscolhido {
  id: string | null;
  titulo: string;
  texto: string;
}

export function Cadastro() {
  const location = useLocation();
  const navigate = useNavigate();

  const planoEscolhido: PlanoEscolhido = (location.state as { plano?: PlanoEscolhido } | null)?.plano ?? {
    titulo: "Nenhum plano selecionado",
    texto: "Por favor, volte e escolha um plano.",
    id: null
  };

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const handleRemoverPlano = () => {
    navigate("/planos");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!planoEscolhido.id) {
      toast.error("Por favor, selecione um plano antes de se cadastrar!");
      return;
    }

    if (!nome || !email || !senha || !confirmarSenha) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

    if (senha !== confirmarSenha) {
      toast.error("As senhas não coincidem!");
      return;
    }

    try {
      await axios.post("https://localhost:7019/api/Auth/cadastro", {
        nome: nome,
        email: email,
        senha: senha,
        assinaturaId: planoEscolhido.id 
      });

      toast.success("Cadastro realizado com sucesso!");
      navigate("/login");

    } catch (error: unknown) {
      const axiosError = error as { response?: { data?: { message?: string } } };
      console.error(error);
      toast.error(axiosError.response?.data?.message || "Erro ao realizar o cadastro. Tente novamente.");
    }
  };

  return (
    <PageContainer>
      <HeaderPageComponent title="Cadastro de Assinante" icon={<MdPersonAdd />} />
      <ContentPageContainer>
        <div className="row mt-4 px-3">
          
          <div className="col-12 col-md-8 mb-4">
            <h4 className="mb-3" style={{ color: "#005f56", fontWeight: "bold" }}>Dados Pessoais</h4>
            
            <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
              
              <div>
                <label className="form-label">Nome Completo</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Digite seu nome" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">E-mail</label>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Digite seu e-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Senha</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Crie uma senha" 
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <div>
                <label className="form-label">Confirmar Senha</label>
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Repita a senha" 
                  value={confirmarSenha}
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                />
              </div>

              <button
                type="submit"
                style={{
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  display: "inline-block"
                }}
              >
                <BotaoLifeDesign texto="Finalizar Cadastro" cor="verdeEscuro" />
              </button>

            </form>
          </div>

          <div className="col-12 col-md-4">
            <h4 className="mb-3" style={{ color: "#005f56", fontWeight: "bold" }}>Plano Escolhido</h4>
            
            <BasicCardComponent 
              title={planoEscolhido.titulo}
              text={planoEscolhido.texto}
              buttonAlternativeText="Remover plano e escolher outro"
              action={handleRemoverPlano}
            />

          </div>

        </div>
      </ContentPageContainer>
    </PageContainer>
  );
}

export default Cadastro;