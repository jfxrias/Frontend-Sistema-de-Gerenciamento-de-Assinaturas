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
        behavior: "smooth",
      });
    }
  };

const mockVideos = [
    {
      id: 1,
      title: "Felipe Menegueli | T5EP1",
      img: "https://img.youtube.com/vi/LYQa2wc7Jpw/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Johnny Mendes | T5EP2",
      img: "https://img.youtube.com/vi/aePDwwNccQM/hqdefault.jpg",
    },
    {
      id: 3,
      title: "Julia Werneck | T5EP3",
      img: "https://img.youtube.com/vi/LC6b6Pe04-8/hqdefault.jpg",
    },
    {
      id: 4,
      title: "Mateus de Paula | T5EP4",
      img: "https://img.youtube.com/vi/muCu6Q4WzPU/hqdefault.jpg",
    },
    {
      id: 5,
      title: "Danielle Jeanine | Ep. 1",
      img: "https://img.youtube.com/vi/F06uVUcxr5M/hqdefault.jpg",
    },
    {
      id: 6,
      title: "Ana Clara Bull | T2EP2",
      img: "https://img.youtube.com/vi/Vj0eBzInArI/hqdefault.jpg",
    },
    {
      id: 7,
      title: "Danilo Oliveira | Ep. 4",
      img: "https://img.youtube.com/vi/6CB9S5qTsug/hqdefault.jpg",
    }
  ];

  return (
    <div style={{ padding: "0 16px" }}>
      <h4
        style={{
          fontWeight: "bold",
          marginBottom: "8px",
          color: "var(--cor-fonte, #333)",
        }}
      >
        Serratec.DOC
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
