import { useRef } from "react";
import { Carousel, CarouselContainer, Card, ArrowButton } from "./styles";

export function VideoCarousel2() {
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
    { 
      id: 1, 
      title: "Hélio e Marcelo | Orange Cyberdefense", 
      img: "https://img.youtube.com/vi/vZmrGxcoRJs/hqdefault.jpg" 
    },
    { 
      id: 2, 
      title: "Luís Henrique (Bulinha) | Residência TIC", 
      img: "https://img.youtube.com/vi/svZ0UWb5NMs/hqdefault.jpg" 
    },
    { 
      id: 3, 
      title: "Introdução | TIC/Infra & Cyber", 
      img: "https://img.youtube.com/vi/62So9BzuZ8g/hqdefault.jpg" 
    },
    { 
      id: 4, 
      title: "Juliana Sart | Cultura de Aprendizagem", 
      img: "https://img.youtube.com/vi/2CZ5brTlJl4/hqdefault.jpg" 
    },
    { 
      id: 5, 
      title: "Palestra | Residência em TIC", 
      img: "https://img.youtube.com/vi/JXuFyv0qChs/hqdefault.jpg" 
    },
    { 
      id: 6, 
      title: "Palestra | Residência em TIC", 
      img: "https://img.youtube.com/vi/v9WheQGV_Ak/hqdefault.jpg" 
    }
  ];

  return (
    <div style={{ padding: "0 16px" }}>
      <h4 style={{ fontWeight: "bold", marginBottom: "8px", color: "var(--cor-fonte, #333)" }}>
        Residência em TIC/Infra & Cyber
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