import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import loginImage from "../../assets/t2m/t2m-login-image.svg";
import logo from "../../assets/t2m/logo.png";
import { BotaoLifeDesign } from "../../components/Button/BotaoLifeDesign";
import { CiLock, CiAt } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post("https://localhost:7019/api/Auth/login", {
        email, 
        senha 
      });

      toast.success("Login realizado com sucesso!");
      localStorage.setItem("token", response.data.token); 
      navigate("/dashboard");
      
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.erro || "E-mail ou senha inválidos!");
      } else {
        toast.error("Erro de conexão com o servidor. A API está ligada?");
      }
    }
  };

  return (
    <div className="container-fluid vh-100 bg-white">
      <div className="row h-100">
        
        <div className="col-12 col-md-7 d-none d-md-flex align-items-center justify-content-center">
          <img
            src={loginImage}
            style={{ maxWidth: "72%", height: "auto", margin: "0" }}
            alt="Login"
            className="img-fluid"
          />
        </div>

        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          
          <div className="w-100 px-4 px-md-5 text-center" style={{ maxWidth: "40rem" }}>
            
            <img src={logo} alt="Logo" style={{ maxWidth: "60%", height: "auto" }} className="img-fluid mb-3" />
            
            <h2 className="mb-1" style={{ color: "var(--verde-terciario)", fontWeight: "400" }}>SGA</h2>
            <p className="text-dark mb-4">Sistema de Gerenciamento de Assinaturas</p>
            
            <form className="d-flex flex-column gap-4" onSubmit={handleLogin}>
              
              <div className="input-group">
                <span className="input-group-text bg-light text-muted"><CiAt /></span>
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="E-mail" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group mb-2">
                <span className="input-group-text bg-light text-muted">
                  <CiLock />
                </span>
                <input 
                  type={mostrarSenha ? "text" : "password"} 
                  className="form-control" 
                  placeholder="Senha" 
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <span 
                  className="input-group-text bg-light text-muted" 
                  style={{ cursor: "pointer" }}
                  onClick={() => setMostrarSenha(!mostrarSenha)}
                >
                  {mostrarSenha ? <FaRegEye /> : <FaRegEyeSlash />}
                </span>
              </div>

              <div className="d-flex justify-content-center mt-3">
                <button type="submit" style={{ border: 'none', background: 'transparent', padding: 0 }}>
                  <BotaoLifeDesign
                    texto="Entrar"
                    cor="verdeEscuro"
                    tamanho="grande"
                  />
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}