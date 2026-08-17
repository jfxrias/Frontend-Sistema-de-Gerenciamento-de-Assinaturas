import { useRef } from "react";
import { Carousel, CarouselContainer, Card, ArrowButton } from "./styles";

export function VideoCarousel3() {
  //isso daqui tira o scroll do carrossel
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 300; //aqui defino qnts pixels rola por vez o carrossel
      carouselRef.current.scrollBy({ 
        left: direction === "left" ? -scrollAmount : scrollAmount, 
        behavior: "smooth" 
      });
    }
  };

const mockVideos = [
    { id: 1, title: "POO Teoria #01a - O que é POO?", img: "https://img.youtube.com/vi/KlIL63MeyMY/hqdefault.jpg" },
    { id: 2, title: "POO Java #01b - Instalando o JDK", img: "https://img.youtube.com/vi/Ucyx_QPfDng/hqdefault.jpg" },
    { id: 3, title: "POO Teoria #02a - O que é um Objeto?", img: "https://img.youtube.com/vi/aR7CKNFECx0/hqdefault.jpg" },
    { id: 4, title: "POO Java #02b - Criando Classes e Objetos", img: "https://img.youtube.com/vi/wNaoX6VOj54/hqdefault.jpg" },
    { id: 5, title: "POO Teoria #03a - Visibilidade em um Objeto", img: "https://img.youtube.com/vi/jFI-qqitzwk/hqdefault.jpg" },
    { id: 6, title: "POO Java #03b - Configurando Visibilidade", img: "https://img.youtube.com/vi/LV2243j4RTQ/hqdefault.jpg" },
    { id: 7, title: "POO Teoria #04a - Métodos Especiais", img: "https://img.youtube.com/vi/g2x9oyBFSco/hqdefault.jpg" },
    { id: 8, title: "POO Java #04b - Getter, Setter e Construtor", img: "https://img.youtube.com/vi/6i-_R5cAcEc/hqdefault.jpg" },
    { id: 9, title: "POO Teoria #05a - Exemplo Prático com Objetos", img: "https://img.youtube.com/vi/ull_DVFFOq0/hqdefault.jpg" },
    { id: 10, title: "POO Java #05b - Exemplo Prático em Java", img: "https://img.youtube.com/vi/hOC461osYgk/hqdefault.jpg" },
    { id: 11, title: "POO Teoria #06a - Pilares: Encapsulamento", img: "https://img.youtube.com/vi/1wYRGFXpVlg/hqdefault.jpg" },
    { id: 12, title: "POO Java #06b - Encapsulamento em Java", img: "https://img.youtube.com/vi/KlIL63MeyMY/hqdefault.jpg" },
    { id: 13, title: "POO Teoria #07a - Relação entre Classes", img: "https://img.youtube.com/vi/GLHbxDU9iBA/hqdefault.jpg" },
    { id: 14, title: "POO Java #07b - Objetos Compostos", img: "https://img.youtube.com/vi/BfrbCQ3XcrA/hqdefault.jpg" },
    { id: 15, title: "POO Teoria #08a - Relação de Agregação", img: "https://img.youtube.com/vi/aR7CKNFECx0/hqdefault.jpg" },
    { id: 16, title: "POO Java #08b - Agregação em Java", img: "https://img.youtube.com/vi/8R9RpqpXI_c/hqdefault.jpg" },
    { id: 17, title: "POO Teoria #09a - Exercícios de POO", img: "https://img.youtube.com/vi/ull_DVFFOq0/hqdefault.jpg" },
    { id: 18, title: "POO Java #09b - Exercício prático em Java", img: "https://img.youtube.com/vi/xgqrkCcH6Ko/hqdefault.jpg" },
    { id: 19, title: "POO Teoria #10a - Herança (Parte 1)", img: "https://img.youtube.com/vi/1wYRGFXpVlg/hqdefault.jpg" },
    { id: 20, title: "POO Java #10b - Herança em Java (Parte 1)", img: "https://img.youtube.com/vi/19IGAeoFKlU/hqdefault.jpg" },
    { id: 21, title: "POO Teoria #11a - Herança (Parte 2)", img: "https://img.youtube.com/vi/g2x9oyBFSco/hqdefault.jpg" },
    { id: 22, title: "POO Java #11b - Herança em Java (Parte 2)", img: "https://img.youtube.com/vi/5pwV2WdD-_Y/hqdefault.jpg" },
    { id: 23, title: "POO Teoria #12a - Polimorfismo", img: "https://img.youtube.com/vi/GLHbxDU9iBA/hqdefault.jpg" },
    { id: 24, title: "POO Java #12b - Polimorfismo em Java", img: "https://img.youtube.com/vi/NctjqlfKC0U/hqdefault.jpg" },
    { id: 25, title: "POO Teoria #13a - Polimorfismo Sobrecarga", img: "https://img.youtube.com/vi/aR7CKNFECx0/hqdefault.jpg" },
    { id: 26, title: "POO Java #13b - Polimorfismo Sobrecarga", img: "https://img.youtube.com/vi/6i-_R5cAcEc/hqdefault.jpg" },
    { id: 27, title: "POO Teoria #14a - Exercício Prático Final 1", img: "https://img.youtube.com/vi/ull_DVFFOq0/hqdefault.jpg" },
    { id: 28, title: "POO Java #14b - Projeto Final (Parte 1)", img: "https://img.youtube.com/vi/_5ZUatkzRsM/hqdefault.jpg" },
    { id: 29, title: "POO Teoria #15a - Exercício Prático Final 2", img: "https://img.youtube.com/vi/jFI-qqitzwk/hqdefault.jpg" },
    { id: 30, title: "POO Java #15b - Projeto Final (Parte 2)", img: "https://img.youtube.com/vi/LSEz2GQtP0E/hqdefault.jpg" }
  ];

  return (
    <div style={{ padding: "0 16px" }}>
      <h4 style={{ fontWeight: "bold", marginBottom: "8px", color: "var(--cor-fonte, #333)" }}>
        Curso de POO
      </h4>
      
      <Carousel>
        {/* botao de voltar */}
        <ArrowButton className="left" onClick={() => handleScroll("left")}>
          ❮
        </ArrowButton>

        <CarouselContainer ref={carouselRef}>
          {mockVideos.map((video) => (
            <Card key={video.id} title={video.title}>
              <img src={video.img} alt={video.title} />
              {/* Overlay de texto sobre a imagem */}
              <div className="card-title-overlay">
                <h2>{video.title}</h2>
              </div>
            </Card>
          ))}
        </CarouselContainer>

        {/* botão de avançar */}
        <ArrowButton className="right" onClick={() => handleScroll("right")}>
          ❯
        </ArrowButton>
      </Carousel>
    </div>
  );
}