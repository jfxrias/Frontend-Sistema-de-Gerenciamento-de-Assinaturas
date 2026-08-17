import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoT2m from "../../assets/img/t2m-logo-tema-claro.png";

import { AiOutlineTable, AiOutlineIdcard } from "react-icons/ai";
import { TbIcons } from "react-icons/tb";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FaWpforms } from "react-icons/fa";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { CgHome } from "react-icons/cg";
import { MdOutlineExitToApp } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { IoContrastOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import { RxPeople } from "react-icons/rx";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SidebarStyle } from "./styles";

function Sidebar({ logOut, windowSize }) {
  const [sideBarCollapse, setSideBarCollapse] = useState(true);
  const navigate = useNavigate();

  function navigateTo(route) {
    setSideBarCollapse(true);
    window.scrollTo(0, 0);
    navigate(route);
  }

  const handleAumentarFonte = () => {
    const currentSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${currentSize + 1}px`;
  };

  const handleDiminuirFonte = () => {
    const currentSize = parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    document.documentElement.style.fontSize = `${currentSize - 1}px`;
  };

  const handleContraste = () => {
    document.body.classList.toggle("dark-contrast");
  };

  return (
    <Col className={windowSize >= 992 ? "px-0 col-1" : "px-0 col-0"}>
      <SidebarStyle collapse={sideBarCollapse}>
        <Row className="h-100 m-0">
          <Col className="column-container">
            
            <div className="logo-area">
              <img src={LogoT2m} alt="Logo T2M" />
              <span>{sideBarCollapse ? "SGA" : "Sistema de Gerenciamento de Assinaturas"}</span>             
            </div>

            <div className="collapse-sidebar-action">
              {sideBarCollapse ? (
                <BsArrowBarRight
                  title="Expandir"
                  onClick={() => setSideBarCollapse(!sideBarCollapse)}
                />
              ) : (
                <BsArrowBarLeft
                  title="Retrair"
                  onClick={() => setSideBarCollapse(!sideBarCollapse)}
                />
              )}
            </div>

            <div className="sidebar-nav">
              <div className="sidebar-nav-item" onClick={handleContraste}>
                <div className="area-icons-label">
                  <IoContrastOutline title="Contraste" />
                  <span className="label-sidebar">Contraste</span>
                </div>
              </div>

              <div className="sidebar-nav-item" onClick={handleAumentarFonte}>
                <div className="area-icons-label">
                  <span className="accessibility-text" title="Aumentar">A+</span>
                  <span className="label-sidebar">Aumentar</span>
                </div>
              </div>

              <div className="sidebar-nav-item" onClick={handleDiminuirFonte}>
                <div className="area-icons-label">
                  <span className="accessibility-text" title="Diminuir">A-</span>
                  <span className="label-sidebar">Diminuir</span>
                </div>
              </div>
            </div>

            <hr className="sidebar-divider" />

            <div className="sidebar-nav">
              <div className="sidebar-nav-item">
                <div onClick={() => navigateTo("/dashboard")}>
                  <div className="area-icons-label">
                    <CgHome title="Início" />
                    <span className="label-sidebar">Início</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-nav-item">
                <div onClick={() => navigateTo("/configuracoes")}>
                  <div className="area-icons-label">
                    <GoGear title="Configurações" />
                    <span className="label-sidebar">Configurações</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-nav">
              <div className="sidebar-nav-item">
                <div onClick={() => logOut()}>
                  <div className="area-icons-label">
                    <MdOutlineExitToApp title="Sair"/>
                    <span className="label-sidebar">Sair</span>
                  </div>
                </div>
              </div>
            </div>

          </Col>
        </Row>
      </SidebarStyle>
    </Col>
  );
}

export default Sidebar;