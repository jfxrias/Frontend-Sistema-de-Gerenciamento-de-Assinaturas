import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      
      // salva os dados no navegador
      localStorage.setItem("token", response.data.token); 
      localStorage.setItem("userRole", response.data.role); 
      
      if (response.data.assinaturaId) {
        localStorage.setItem("assinaturaId", response.data.assinaturaId);
      }
      const idPlano = response.data.assinaturaId || response.data.AssinaturaId;
      
      if (idPlano) {
        localStorage.setItem("assinaturaId", idPlano);
      }

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
          <div
            className="d-flex align-items-center justify-content-center rounded-4 shadow-sm"
            style={{
              width: "72%",
              minHeight: "28rem",
              background: "linear-gradient(135deg, #E2E8F0 0%, #C7D2FE 100%)",
              border: "1px solid rgba(148, 163, 184, 0.35)"
            }}
          >
            <div style={{ textAlign: "center", color: "#1E293B" }}>
              <div
                style={{
                  width: "5.5rem",
                  height: "5.5rem",
                  borderRadius: "1.25rem",
                  background: "#1E293B",
                  color: "#FFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  fontSize: "1.6rem",
                  fontWeight: 700
                }}
              >
                AM
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Painel Admin
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
          
          <div className="w-100 px-4 px-md-5 text-center" style={{ maxWidth: "40rem" }}>
            
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3 shadow-sm"
              style={{
                width: "8rem",
                height: "3rem",
                background: "linear-gradient(135deg, #1E293B 0%, #4F46E5 100%)",
                color: "#FFF",
                fontWeight: 700,
                letterSpacing: "0.04em"
              }}
            >
              AppManager
            </div>
            
            <h2 className="mb-1" style={{ color: "var(--verde-terciario)", fontWeight: "600" }}>Painel Admin</h2>
            <p className="text-dark mb-4">Sistema de Assinaturas</p>
            
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

              {/* troquei pq tava dando erro um button dentro de um button */}
              <div className="d-flex justify-content-center mt-3" onClick={handleLogin} style={{ cursor: "pointer", display: "inline-block" }}>
                <input type="submit" style={{ display: 'none' }} />
                <BotaoLifeDesign
                  texto="Entrar"
                  cor="verdeEscuro"
                  tamanho="grande"
                />
              </div>
              <p>Ou <span onClick={() => navigate("/planos")} style={{ cursor: "pointer", color: "blue" }} className="text-decoration-underline">cadastrar-se</span></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;