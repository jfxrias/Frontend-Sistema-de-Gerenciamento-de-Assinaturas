import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Offcanvas from "react-bootstrap/Offcanvas";

import { CgHome } from "react-icons/cg";
import { BsArrowBarLeft } from "react-icons/bs";
import { CgMenuRound } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineExitToApp } from "react-icons/md";
import { IoContrastOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";

import {
  SidebarMobileStyle,
  SidebarMobileNavStyle,
  LogoArea,
  CloseIconArea,
} from "./styles";

interface SidebarMobileProps {
  logOut: () => void;
}

function SidebarMobile({ logOut }: SidebarMobileProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  function navigateTo(route: string) {
    setShow(false);
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
    <SidebarMobileStyle>
      <Row>
        <Col className="px-0 col">
          
          <div className="button-show-area">
            <div className="button-show">
              <CgMenuRound onClick={handleShow} size={28} />
            </div>
            <div className="central-area">
              <div className="logo-mark" aria-label="Logo do sistema">
                <span>AM</span>
              </div>
              <span style={{ fontWeight: "bold", color: "var(--verde-secundario)" }}>AppManager</span>
            </div>
            <div className="right-area" onClick={() => navigateTo("/perfil")}>
              <BiUserCircle size={28} />
            </div>
          </div>

          <Offcanvas show={show} onHide={handleClose}>
            
            <Offcanvas.Header>
              <Offcanvas.Title>
                <LogoArea>
                  <div className="logo-mark" aria-label="Logo do sistema">
                    <span>AM</span>
                  </div>
                  <span style={{ fontSize: "14px", marginTop: "4px" }}>Painel Admin</span>
                </LogoArea>
              </Offcanvas.Title>
              <CloseIconArea>
                <BsArrowBarLeft size={28} onClick={handleClose} />
              </CloseIconArea>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <SidebarMobileNavStyle>
                <div className="flex-column sidebar-mobile-nav">
                  
                  <div className="sidebar-nav-item" onClick={handleContraste}>
                    <div>
                      <div className="area-icons-label">
                        <IoContrastOutline size={24} />
                        <span>Contraste</span>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-nav-item" onClick={handleAumentarFonte}>
                    <div>
                      <div className="area-icons-label">
                        <span style={{ fontWeight: "bold", fontSize: "20px", width: "24px", textAlign: "center" }}>A+</span>
                        <span>Aumentar Letra</span>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-nav-item" onClick={handleDiminuirFonte}>
                    <div>
                      <div className="area-icons-label">
                        <span style={{ fontWeight: "bold", fontSize: "20px", width: "24px", textAlign: "center" }}>A-</span>
                        <span>Diminuir Letra</span>
                      </div>
                    </div>
                  </div>

                  <hr style={{ borderColor: "var(--preto-primario)", opacity: 0.2, margin: "15px 0" }} />

                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/dashboard")}>
                      <div className="area-icons-label">
                        <CgHome size={24} />
                        <span>Início</span>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-nav-item">
                    <div onClick={() => navigateTo("/dependentes")}>
                      <div className="area-icons-label">
                        <GoGear size={24} />
                        <span>Configurações</span>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="sidebar-mobile-nav">
                  <div className="sidebar-nav-item mt-3">
                    <div onClick={() => logOut()}>
                      <div className="area-icons-label">
                        <MdOutlineExitToApp size={24} />
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