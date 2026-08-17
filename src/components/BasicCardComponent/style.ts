import styled from "styled-components";

export const BasicCardStyle = styled.div`
   

  > div {
    border-radius: 0.3rem !important;
    background-color: var(--verde-secundario);
    box-shadow: 1px 1px 5px var(--preto-primario);
    color: var(--branco);
    transition: 0.3s;

    .card-body {
      button {
        background-color: transparent !important;
        border: none !important;
        padding: 1rem;

        svg {
          color: var(--branco);
          font-size: 1.3rem;

          :hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }
`;
