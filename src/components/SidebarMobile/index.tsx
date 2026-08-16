import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";
import LogoT2m from "../../assets/img/t2m-logo-tema-claro.png";

import { AiOutlineTable, AiOutlineIdcard } from "react-icons/ai";
import { CgHome } from "react-icons/cg";
import { TbIcons } from "react-icons/tb";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FaWpforms } from "react-icons/fa";
import { BsArrowBarLeft } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineExitToApp } from "react-icons/md";

import {
  SidebarMobileStyle,
  SidebarMobileNavStyle,
  LogoArea,
  CloseIconArea,
} from "./styles";


function SidebarMobile({ any: logOut }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  function navigateTo(any: route) {
    setShow(false);
    window.scrollTo(0, 0);
    navigate(route);
  }

  return (
    <SidebarMobileStyle>
      <Row>
        <Col className="px-0 col">
          <div className="button-show-area">
            <div className="button-show">
              <CgMenuRound onClick={handleShow} />
            </div>
            <div className="central-area">
              <img src={LogoT2m} alt="Logo T2M" />
              <span>SPL</span>   
            </div>
            <div className="right-area">
              <BiUserCircle />
            </div>
          </div>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header>
              <Offcanvas.Title>
                <LogoArea>
                  <img src={LogoT2m} alt="Logo T2M" />
                  <span>Sistema de Padronização de Layouts</span> 
                </LogoArea>
              </Offcanvas.Title>
              <CloseIconArea>
                <BsArrowBarLeft onClick={handleClose} />
              </CloseIconArea>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <SidebarMobileNavStyle>
                <div className="flex-column sidebar-mobile-nav">
                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/")}>
                      <div className="area-icons-label">
                        <CgHome />
                        <span>Início</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/tabela")}>
                      <div className="area-icons-label">
                        <AiOutlineTable />
                        <span>Tabela</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/cards")}>
                      <div className="area-icons-label">
                        <AiOutlineIdcard />
                        <span>Componentes</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/paletacores")}>
                      <div className="area-icons-label">
                        <HiOutlineColorSwatch />
                        <span>Paleta de cores</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/botoes")}>
                      <div className="area-icons-label">
                        <TbIcons />
                        <span>Icones</span>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/formularios")}>
                      <div className="area-icons-label">
                        <FaWpforms />
                        <span>Formulários</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-container mt-3">
                  <BiUserCircle />
                  <div className="user-info">
                    <span title="Larissa Santos" className="label-sidebar">
                      Larissa S.
                    </span>
                    <span
                      id="user-department"
                      className="label-sidebar"
                      title="Departamento Pessoal"
                    >
                      Departamento pessoal
                    </span>
                  </div>
                </div>
                <div className="sidebar-mobile-nav">
                  <div className="sidebar-nav-item mt-3">
                    <div onClick={() => logOut()}>
                      <div className="area-icons-label">
                        <MdOutlineExitToApp />
                        <span>Sair</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SidebarMobileNavStyle>
            </Offcanvas.Body>
          </Offcanvas>
        </Col>
      </Row>
    </SidebarMobileStyle>
  );
}

export default SidebarMobile;