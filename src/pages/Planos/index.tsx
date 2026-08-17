import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../T2MContainers/PageContainer";
import HeaderPageComponent from "../../T2MContainers/PageHeaderContainer";
import ContentPageContainer from "../../T2MContainers/PageContentContainer";
import { MdAttachMoney, MdCheck } from "react-icons/md";
import { BotaoLifeDesign } from "../../components/Button/BotaoLifeDesign";

export function Planos() {
  const navigate = useNavigate();

  //envia o usuário para o cadastro levando os dados do plano
  const handleAssinar = (planoEscolhido) => {
    navigate("/cadastro", { state: { plano: planoEscolhido } });
  };

  return (
    <PageContainer>
      <HeaderPageComponent
        title="Assinaturas e Preços"
        icon={<MdAttachMoney />}
      />
      <ContentPageContainer>
        <div className="row text-center mt-4 px-3">
          <h1 style={{margin:"1rem 1rem 3rem 1rem"}} >Escolha uma assinatura:</h1>
          
          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 bg-light">
              <div className="card-body d-flex flex-column py-5">
                <h4 className="card-title fw-bold text-center">Assinatura 1</h4>
                <p className="card-text text-muted mb-4 text-center">
                  O plano básico para começar.
                </p>
                
                <ul className="list-unstyled text-start mb-4 flex-grow-1 mx-auto">
                  <li className="mb-2"><MdCheck className="text-success me-2" />Até 2 dependentes</li>
                  <li className="mb-2"><MdCheck className="text-success me-2" />Acesso ao Serratec.DOC</li>
                </ul>

                <h3 className="fw-bold mb-4 text-center">
                  R$ 29,90<small className="text-muted fs-6">/mês</small>
                </h3>
                
                <div 
                  className="mt-auto d-flex justify-content-center" 
                  onClick={() => handleAssinar({ 
                    id: "550e8400-e29b-41d4-a716-446655440000",
                    titulo: "Assinatura 1", 
                    texto: "R$ 29,90 / mês - Até 2 dependentes" 
                  })} 
                  style={{ cursor: "pointer" }}
                >
                  <BotaoLifeDesign texto="Assinar Agora" cor="cinza" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div
              className="card h-100 shadow border-0 text-white"
              style={{
                backgroundColor: "#005f56",
                transform: "scale(1.05)",
                zIndex: 1,
              }}
            >
              <div className="card-body d-flex flex-column py-5">
                <h4 className="card-title fw-bold text-center">Assinatura 2</h4>
                <p className="card-text mb-4 text-center" style={{ color: "#d1e7e5" }}>
                  O mais escolhido pelos assinantes.
                </p>
                
                <ul className="list-unstyled text-start mb-4 flex-grow-1 mx-auto">
                  <li className="mb-2"><MdCheck style={{ color: "#d1e7e5" }} className="me-2" />Até 3 dependentes</li>
                  <li className="mb-2"><MdCheck style={{ color: "#d1e7e5" }} className="me-2" />Acesso ao Serratec.DOC</li>
                  <li className="mb-2"><MdCheck style={{ color: "#d1e7e5" }} className="me-2" />Residência em TIC/Infra & Cyber</li>
                </ul>

                <h3 className="fw-bold mb-4 text-center">
                  R$ 59,90
                  <small className="fs-6" style={{ color: "#d1e7e5" }}>
                    /mês
                  </small>
                </h3>
                
                <div 
                  className="mt-auto d-flex justify-content-center"
                  onClick={() => handleAssinar({ 
                    id: "660e8400-e29b-41d4-a716-446655440001",
                    titulo: "Assinatura 2", 
                    texto: "R$ 59,90 / mês - Até 3 dependentes" 
                  })} 
                  style={{ cursor: "pointer" }}
                >
                  <BotaoLifeDesign texto="Assinar Agora" cor="verde" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0 bg-light">
              <div className="card-body d-flex flex-column py-5">
                <h4 className="card-title fw-bold text-center">Assinatura 3</h4>
                <p className="card-text text-muted mb-4 text-center">
                  Acesso completo e ilimitado.
                </p>
                
                <ul className="list-unstyled text-start mb-4 flex-grow-1 mx-auto">
                  <li className="mb-2"><MdCheck className="text-success me-2" />Até 5 dependentes</li>
                  <li className="mb-2"><MdCheck className="text-success me-2" />Acesso ao Serratec.DOC</li>
                  <li className="mb-2"><MdCheck className="text-success me-2" />Residência em TIC/Infra & Cyber</li>
                  <li className="mb-2"><MdCheck className="text-success me-2" />Acesso a cursos de POO</li>
                </ul>

                <h3 className="fw-bold mb-4 text-center">
                  R$ 99,90<small className="text-muted fs-6">/mês</small>
                </h3>
                
                <div 
                  className="mt-auto d-flex justify-content-center"
                  onClick={() => handleAssinar({ 
                    id: "770e8400-e29b-41d4-a716-446655440002",
                    titulo: "Assinatura 3", 
                    texto: "R$ 99,90 / mês - Até 5 dependentes" 
                  })} 
                  style={{ cursor: "pointer" }}
                >
                  <BotaoLifeDesign texto="Assinar Agora" cor="verdeEscuro" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mt-5 d-flex justify-content-center">
            <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              <BotaoLifeDesign 
                tamanho="grande" 
                texto="Voltar para Tela Inicial" 
                cor="cinza" 
              />
            </div>
          </div>
          
        </div>
      </ContentPageContainer>
    </PageContainer>
  );
}

export default Planos;