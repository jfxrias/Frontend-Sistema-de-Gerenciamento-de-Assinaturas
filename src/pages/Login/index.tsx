import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    if (e) e.preventDefault(); 

    const emailFormatado = email.includes("@") ? email : `${email}@email.com`; 

    try {
      const response = await fetch("https://localhost:7019/api/Auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailFormatado, senha }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.erro || "E-mail ou senha inválidos!");
        return;
      }

      toast.success("Login realizado com sucesso!");
      localStorage.setItem("token", data.token); 
      navigate("/dashboard");
      
    } catch (error) {
      toast.error("Erro de conexão com o servidor. A API está ligada?");
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
            
            <h2 className="mb-1" style={{ color: "var(--verde-terciario)", fontWeight: "400" }}>SRA</h2>
            <p className="text-dark mb-4">Sistema de Gerenciamento de Assinaturas</p>
            
            <form className="d-flex flex-column gap-4" onSubmit={handleLogin}>
              
              <div className="input-group">
                <span className="input-group-text bg-light text-muted"><CiAt /></span>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Usuário" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="input-group-text bg-light text-muted">@t2mlab.com</span>
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

              <div className="d-flex justify-content-center mt-3" onClick={handleLogin}>
                  <BotaoLifeDesign
                    texto="Entrar"
                    cor="verdeEscuro"
                    tamanho="grande"
                  />
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}