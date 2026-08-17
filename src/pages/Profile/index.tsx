import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../T2MContainers/PageContainer";
import HeaderPageComponent from "../../T2MContainers/PageHeaderContainer";
import ContentPageContainer from "../../T2MContainers/PageContentContainer";
import { MdPerson, MdEdit, MdSave, MdCancel, MdFamilyRestroom } from "react-icons/md";
import { BotaoLifeDesign } from "../../components/Button/BotaoLifeDesign";
import axios from "axios";
import { toast } from "react-toastify";

export function Profile() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const userRole = localStorage.getItem("userRole") || "Titular"; 
  const token = localStorage.getItem("token");

  //autocomplete dos dados
  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        const response = await axios.get("https://localhost:7019/api/Auth/perfil", {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setNome(response.data.nome);
        setEmail(response.data.email);
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("Erro ao carregar dados do perfil.");
        setLoading(false);
      }
    };

    if (token) {
      fetchPerfil();
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  // função para salvar a edição do perfil
  const handleSalvar = async (e) => {
    e.preventDefault();
    try {
      await axios.put("https://localhost:7019/api/Auth/perfil", 
        { nome, email }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      toast.success("Perfil atualizado com sucesso!");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar o perfil.");
    }
  };

  if (loading) {
    return (
      <PageContainer>
        <HeaderPageComponent title="Meu Perfil" icon={<MdPerson />} />
        <ContentPageContainer>
          <div className="text-center mt-5">Carregando dados...</div>
        </ContentPageContainer>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeaderPageComponent title="Meu Perfil" icon={<MdPerson />} />
      <ContentPageContainer>
        <div className="row mt-4 px-3 d-flex justify-content-center">
          
          <div className="col-12 col-md-8 col-lg-6 mb-4">
            <div className="card shadow-sm border-0 bg-light p-4">
              
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 style={{ color: "#005f56", fontWeight: "bold", margin: 0 }}>Dados da Conta</h4>
                <span className="badge bg-secondary fs-6">{userRole}</span>
              </div>
              
              <form onSubmit={handleSalvar} className="d-flex flex-column gap-3">
                
                <div>
                  <label className="form-label fw-bold">Nome Completo</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    disabled={!isEditing}
                    required
                  />
                </div>

                <div>
                  <label className="form-label fw-bold">E-mail</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={!isEditing}
                    required
                  />
                </div>

                <div className="d-flex justify-content-end gap-2 mt-3">
                  {!isEditing ? (
                    <div onClick={() => setIsEditing(true)} style={{ cursor: "pointer" }}>
                      <BotaoLifeDesign texto="Editar Dados" cor="cinza" icone={<MdEdit />} />
                    </div>
                  ) : (
                    <>
                      <div onClick={() => setIsEditing(false)} style={{ cursor: "pointer" }}>
                        <BotaoLifeDesign texto="Cancelar" cor="cinza" icone={<MdCancel />} />
                      </div>
                      <div onClick={handleSalvar} style={{ cursor: "pointer" }}>
                        <input type="submit" style={{ display: 'none' }} />
                        <BotaoLifeDesign texto="Salvar" cor="verdeEscuro" icone={<MdSave />} />
                      </div>
                    </>
                  )}
                </div>

              </form>
            </div>

            {/* só aparece se for o titular*/}
            {userRole === "Titular" && (
              <div className="card shadow-sm border-0 mt-4 p-4" style={{ backgroundColor: "#005f56", color: "white" }}>
                <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
                  <MdFamilyRestroom size={24} /> Meus Dependentes
                </h5>
                <p>Gerencie quem tem acesso à sua assinatura.</p>
                <div className="mt-2" onClick={() => navigate("/dependentes")} style={{ cursor: "pointer" }}>
                  <BotaoLifeDesign texto="Gerenciar Dependentes" cor="verdeClaro" />
                </div>
              </div>
            )}

          </div>

        </div>
      </ContentPageContainer>
    </PageContainer>
  );
}

export default Profile;