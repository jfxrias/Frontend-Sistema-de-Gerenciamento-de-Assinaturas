import { useRef } from "react";
import { Carousel, CarouselContainer, Card, ArrowButton } from "./styles";

export function VideoCarousel() {
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
    { id: 1, title: "AWS Cloud Practitioner", img: "https://picsum.photos/seed/cloud/300/170" },
    { id: 2, title: "Google Cyber Security", img: "https://picsum.photos/seed/cyber/300/170" },
    { id: 3, title: "Cisco CCST", img: "https://picsum.photos/seed/cisco/300/170" },
    { id: 4, title: "Hackers do Bem", img: "https://picsum.photos/seed/hacker/300/170" },
    { id: 5, title: "Dev Ops", img: "https://picsum.photos/seed/ops/300/170" },
    { id: 6, title: "Natureza", img: "https://picsum.photos/seed/fut/300/170" },
    { id: 7, title: "", img: "https://picsum.photos/seed/leipzig/300/170" },
  ];

  return (
    <div style={{ padding: "0 16px" }}>
      <h4 style={{ fontWeight: "bold", marginBottom: "8px", color: "var(--cor-fonte, #333)" }}>
        Continuar Assistindo
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