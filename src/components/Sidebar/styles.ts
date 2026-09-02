import styled from "styled-components";

export const SidebarStyle = styled.div<{ collapse: boolean }>`
  font-size: 100%;
  margin: 0 !important;
  width: ${(props) => (props.collapse ? "7%" : "22%")};
  margin-top: 1rem !important;
  height: calc(100vh - 2rem);
  padding-top: 1rem;
  box-shadow: 1px 1px 5px var(--preto-primario);
  border-radius: 0rem 1rem 1rem 0rem;
  overflow: hidden;
  background-color: var(--branco);
  position: fixed;
  z-index: 9999;
  transition: 0.3s;

  .column-container {
    height: calc(100vh - 2rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* Libera o scroll vertical caso ultrapasse a tela */
    overflow-y: auto;
    overflow-x: hidden;
    padding-bottom: 1rem;

    /* Esconde barra de rolagem feia mantendo funcional */
    scrollbar-width: thin;
    scrollbar-color: var(--verde-primario) transparent;

    .sidebar-divider {
      width: 80%;
      margin: 8px 0;
      border-color: var(--preto-primario);
      opacity: 0.2;
    }

    .collapse-sidebar-action {
      margin-bottom: 0.5rem;
      svg {
        font-size: 24px;
        &:hover {
          cursor: pointer;
          color: var(--verde-primario) !important;
        }
      }
      &:hover {
        cursor: pointer;
      }
    }

    .logo-area {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 0.5rem;
      background-color: var(--branco) !important;

      .logo-mark {
        width: ${(props) => (props.collapse ? "2.2rem" : "3rem")};
        height: ${(props) => (props.collapse ? "2.2rem" : "3rem")};
        border-radius: 0.8rem;
        background: linear-gradient(135deg, var(--indigo-primario) 0%, var(--slate-secundario) 100%);
        color: var(--branco);
        font-size: ${(props) => (props.collapse ? "0.7rem" : "0.85rem")};
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.45rem;
      }

      span {
        color: var(--verde-secundario);
        font-weight: bold;
        text-align: center;
        font-size: ${(props) => (props.collapse ? "11px" : "13px")};
      }
    }

    .sidebar-nav {
      display: flex;
      flex-direction: column;
      font-size: 1rem;
      align-items: center;
      width: 100%;

      .sidebar-nav-item {
        width: 90%;
        padding: 0.3rem 0.2rem;
        margin: 2px 0;
        border-radius: 6px;
        transition: 0.3s;
        display: flex;
        justify-content: center;

        div {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        &:hover {
          background-color: var(--verde-primario);
          color: var(--branco) !important;
          
          .area-icons-label, svg, span {
            color: var(--branco) !important;
          }
        }
      }

      .area-icons-label {
        display: flex;
        flex-direction: column; /* Deixa o ícone em cima e o texto embaixo */
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 2px;
        width: 100%;

        &:hover {
          cursor: pointer;
        }

        svg {
          font-size: 22px;
        }

        .accessibility-text {
          font-weight: bold;
          font-size: 18px;
          line-height: 22px;
        }

        .label-sidebar {
          font-size: 11px;
          font-weight: 500;
          text-align: center;
          display: ${(props) => (props.collapse ? "block" : "block")};
        }
      }
    }    

    .user-container {
      display: flex;
      align-items: center;
      justify-content: ${(props) =>
        props.collapse ? "center" : "space-around"};
      background-color: ${(props) =>
        props.collapse ? "var(--branco)" : "var(--verde-primario)"};
      color: var(--branco);
      padding: 0.4rem;
      width: 90%;
      border-radius: 5px;
      margin: 8px 0;
      cursor: pointer;

      svg {
        font-size: 24px;
        color: ${(props) =>
          props.collapse ? "var(--preto-primario)" : "var(--branco)"};
      }

      .user-info {
        display: flex;
        flex-direction: column;
        font-size: 90%;
        text-align: center;

        span {
          color: ${(props) => (props.collapse ? "var(--preto-primario)" : "var(--branco)")};
        }
      }

      .user-info #user-department {
        font-size: 80%;
        font-weight: 200;
      }
    }
  }
`;