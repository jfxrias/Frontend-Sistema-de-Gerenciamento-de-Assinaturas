import styled from "styled-components";

export const Carousel = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding: 20px 0;
  width: 100%;
  
  /* isso aqui mexe na animação do carrousel, fica estilo a do react native */
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  
  /* esconde a barra vertical do carrousel, mas ainda mantem as funcionalidades */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Card = styled.div`
  min-width: 260px;
  height: 145px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  scroll-snap-align: start;
  
  /* tive que mudar pra relative pra colocar o titulo dentro*/
  position: relative; 
  
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  /* fiz inspirado na amazon prime*/
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 15px rgba(0,0,0,0.4);
    z-index: 10;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /*aqui funciona o titulo dentro da capa */
  .card-title-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px 12px 10px; 
    /* degrade, copiando a disney*/
    background: linear-gradient(to top, rgba(0,0,0, 0.9), transparent);
    
    h2 {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      margin: 0;
      text-shadow: 1px 1px 3px rgba(0,0,0,0.8);
      
      /*coloca ... no final se o titulo for mt grande */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const ArrowButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 20;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  transition: background 0.2s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }

  /*coloca os botoes um pouco pra fora do carroussel */
  &.left {
    left: -15px;
  }
  &.right {
    right: -15px;
  }
`;