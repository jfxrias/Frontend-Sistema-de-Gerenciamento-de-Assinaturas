import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { CgHome } from "react-icons/cg";
import { MdOutlineExitToApp } from "react-icons/md";
import { IoContrastOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SidebarStyle } from "./styles";

interface SidebarProps {
  logOut: () => void;
  windowSize: number;
}

function Sidebar({ logOut, windowSize }: SidebarProps) {
  const [sideBarCollapse, setSideBarCollapse] = useState(true);
  const navigate = useNavigate();

  function navigateTo(route: string) {
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
              <div className="logo-mark" aria-label="Logo do sistema">
                <span>AM</span>
              </div>
              <span>{sideBarCollapse ? "AM" : "Painel Admin"}</span>
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