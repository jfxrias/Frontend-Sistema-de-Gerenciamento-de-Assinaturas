import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoT2m from "../../assets/img/t2m-logo-tema-claro.png";

import { AiOutlineTable, AiOutlineIdcard } from "react-icons/ai";
import { TbIcons } from "react-icons/tb";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { FaWpforms } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { CgHome } from "react-icons/cg";
import { MdOutlineExitToApp } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
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

  return (
    <Col className={windowSize >= 992 ? "px-0 col-1" : "px-0 col-0"}>
      <SidebarStyle collapse={sideBarCollapse}>
        <Row>
          <Col className="column-container">
            <div className="logo-area">
              <img src={LogoT2m} alt="Logo T2M" />
              {sideBarCollapse ? <span>SGA</span> : <span>Sistema de Gerenciamento de Assinaturas</span>}              
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
              <div className="mt-2 sidebar-nav-item">
                <div onClick={() => navigateTo("/dashboard")}>
                  <div className="area-icons-label">
                    <CgHome title="Início" />
                    {sideBarCollapse ? (
                      ""
                    ) : (
                      <span className="label-sidebar">Início</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-2 sidebar-nav-item">
                <div onClick={() => navigateTo("/dependentes")}>
                  <div className="area-icons-label">
                    <RxPeople title="Dependentes" />
                    {sideBarCollapse ? (
                      ""
                    ) : (
                      <span className="label-sidebar">Dependentes</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="user-container" onClick={() => navigateTo("/perfil")} style={{ cursor: "pointer" }}>
              <BiUserCircle title="Larissa S."/>
              <div className="user-info">
                {sideBarCollapse ? (
                  ""
                ) : (
                  <span title="Larissa Santos" className="label-sidebar">
                    Larissa S.
                  </span>
                )}
                {sideBarCollapse ? (
                  ""
                ) : (
                  <span
                    id="user-department"
                    className="label-sidebar"
                    title="Departamento Pessoal"
                  >
                    Departamento pessoal
                  </span>
                )}
              </div>
            </div>
            <div className="sidebar-nav">
              <div className="sidebar-nav-item">
                <div onClick={() => logOut()}>
                  <div className="area-icons-label">
                    <MdOutlineExitToApp title="Sair"/>
                    {sideBarCollapse ? (
                      ""
                    ) : (
                      <span className="label-sidebar">Sair</span>
                    )}{" "}
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