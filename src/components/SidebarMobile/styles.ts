import styled from "styled-components";

export const SidebarMobileNavStyle = styled.div`
   

  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .collapse-sidebar-action {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .collapse-sidebar-action:hover {
    cursor: pointer;
  }

  .sidebar-mobile-nav {
    display: flex;
    gap: 1.2rem;

    .sidebar-nav-item {
      .area-icons-label {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          font-size: 24px;
        }
      }
    }
  }

  .user-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--verde-primario);
    color: var(--branco);
    padding: 0.4rem;
    width: 100%;
    border-radius: 5px;

    svg {
      font-size: 24px;
      color: var(--branco);
    }

    .user-info {
      display: flex;
      flex-direction: column;
      font-size: 100%;

      #user-department {
        font-size: 100%;
        font-weight: 200;
      }
    }
  }
`;

export const LogoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 0.2rem;
  background-color: var(--branco) !important;

  .logo-mark {
    width: 2.7rem;
    height: 2.7rem;
    border-radius: 0.75rem;
    background: linear-gradient(135deg, var(--indigo-primario) 0%, var(--slate-secundario) 100%);
    color: var(--branco);
    font-size: 0.8rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.35rem;
  }

  span {
    color: var(--verde-secundario);
    font-weight: bold;
    text-align: center;    
  }
`;

export const SidebarMobileStyle = styled.div`
   

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: var(--branco) !important;
  z-index: 999;

  .button-show-area {
    padding: 1rem;
    box-shadow: 1px 1px 5px var(--preto-primario);
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    background-color: var(--branco) !important;

    .central-area {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.7rem;

      .logo-mark {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.75rem;
        background: linear-gradient(135deg, var(--indigo-primario) 0%, var(--slate-secundario) 100%);
        color: var(--branco);
        font-size: 0.75rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        color: var(--verde-secundario);
        font-weight: bold;
        text-align: center;
        font-size: 1.1rem;
      }
    }

    .right-area {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0.5rem;

      svg {
        font-size: 36px;
      }
    }

    .button-show {
      background-color: var(--branco) !important;
      width: 42px !important;
      svg {
        color: #444 !important;
        font-size: 36px;
        transition: 0.3s;

        &:hover {
          cursor: pointer;
          color: var(--verde-primario) !important;
        }
      }
    }
  }
`;

export const CloseIconArea = styled.div`
   

  svg {
    font-size: 24px !important;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      color: var(--verde-primario) !important;
    }
  }
`;