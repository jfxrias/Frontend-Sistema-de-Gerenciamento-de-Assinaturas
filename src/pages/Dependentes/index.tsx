import React, { useState, useEffect } from "react";
import axios from "axios";
import { DiReact } from "react-icons/di";
import { RxPeople } from "react-icons/rx";

import { toast } from "react-toastify";
import { Modal as ModalBootstrap } from "react-bootstrap"; 

import PageContainer from "../../T2MContainers/PageContainer";
import HeaderPageComponent from "../../T2MContainers/PageHeaderContainer";
import ContentPageContainer from "../../T2MContainers/PageContentContainer";
import Modal from "../../components/Modal"; 
import { BotaoLifeDesign } from "../../components/Button/BotaoLifeDesign";
import TableComponent from "../../components/TableComponent";

export function Dependentes() {
  //states
  const [dependentes, setDependentes] = useState([]);
  
  const [showModal, setShowModal] = useState(false);
  const [dependenteEditando, setDependenteEditando] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [dependenteParaDeletar, setDependenteParaDeletar] = useState(null);

  //limites, tenho q puxar isso da api, e editar o bd para linkar usuario com a assinatura, e a assinatura com o limite de dependentes, tb tenho q criar a página de
  //assinar
  const MAX_DEPENDENTES = 3;
  const podeAdicionar = dependentes.length < MAX_DEPENDENTES;

  //call na api
  const carregarDependentes = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://localhost:7019/api/Dependente", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setDependentes(response.data);
    } catch (error) {
      toast.error("Erro ao carregar os dependentes.");
    }
  };

  useEffect(() => {
    carregarDependentes();
  }, []);

  // handles de criar/editar
  const handleOpen = () => {
    setDependenteEditando(null);
    setShowModal(true);
  };

  const handleEdit = (dependente) => {
    setDependenteEditando(dependente);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // handles de deletar
  const handleDeleteClick = (dependente) => {
    setDependenteParaDeletar(dependente);
    setShowDeleteModal(true); 
  };

  const confirmarDelecao = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`https://localhost:7019/api/Dependente/${dependenteParaDeletar.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      toast.success("Dependente removido com sucesso!");
      setShowDeleteModal(false); 
      carregarDependentes(); 
    } catch (error) {
      toast.error("Erro ao remover o dependente. Tente novamente.");
    }
  };

  return (
    <PageContainer>
      <HeaderPageComponent title="Dependentes" icon={<RxPeople />} />
      <ContentPageContainer>
        
        {/* mumero de dependentes e btn de adicionar */}
        <div className="d-flex justify-content-between align-items-center mb-4 mt-3" style={{ padding: "0 1rem" }}>
          
          <div>
            <h5 className="mb-0" style={{ color: "#005f56", fontWeight: "bold" }}>
              Dependentes Cadastrados: {dependentes.length} / {MAX_DEPENDENTES}
            </h5>
            {podeAdicionar ? (
              <small className="text-muted">Você ainda pode adicionar {MAX_DEPENDENTES - dependentes.length} dependente(s).</small>
            ) : (
              <small className="text-danger fw-bold">Você atingiu o limite máximo de dependentes.</small>
            )}
          </div>

          <div 
            style={{ 
              width: "250px", 
              cursor: podeAdicionar ? "pointer" : "not-allowed",
              opacity: podeAdicionar ? 1 : 0.6            }} 
            onClick={podeAdicionar ? handleOpen : undefined}
          >
            <BotaoLifeDesign
              texto="Adicionar Dependente"
              cor={podeAdicionar ? "verdeEscuro" : "cinza"}
            />
          </div>

        </div>

        <TableComponent 
          dados={dependentes} 
          onEdit={handleEdit} 
          onDeleteClick={handleDeleteClick}
        />

      </ContentPageContainer>
      
      {/* modal de criar/editar */}
      <Modal 
        show={showModal} 
        handleClose={handleClose} 
        dependenteEditando={dependenteEditando}
        recarregarLista={carregarDependentes}
      />

      {/*modal p confirmar deletar */}
      <ModalBootstrap show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <ModalBootstrap.Header closeButton>
          <ModalBootstrap.Title>Confirmar Exclusão</ModalBootstrap.Title>
        </ModalBootstrap.Header>
        <ModalBootstrap.Body>
          Tem certeza que deseja excluir o dependente <strong>{dependenteParaDeletar?.nome}</strong>? Essa ação não pode ser desfeita.
        </ModalBootstrap.Body>
        <ModalBootstrap.Footer>
          <div onClick={() => setShowDeleteModal(false)} style={{ cursor: "pointer" }}>
            <BotaoLifeDesign texto="Cancelar" cor="cinza" />
          </div>
          <div onClick={confirmarDelecao} style={{ cursor: "pointer" }}>
            <BotaoLifeDesign texto="Excluir" cor="verdeEscuro" />
          </div>
        </ModalBootstrap.Footer>
      </ModalBootstrap>

    </PageContainer>
  );
}

export default Dependentes;