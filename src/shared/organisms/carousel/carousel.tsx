import { CSSProperties, ReactNode } from "react";
import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const quoteStyle: CSSProperties = {
  padding: "20px",
  width: "50%",
  fontSize: "28px",
  textAlign: "center",
  color: "black",
};

const divStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};

const slides = [
  {
    testimonal:
      "As You Dream exceeded my expectations! Their attention to detail and creativity made my wedding day absolutely magical.",
  },
  {
    testimonal:
      "Working with As You Dream was a stress-free experience. Their team handled everything from start to finish and made my event truly unforgettable.",
  },
  {
    testimonal:
      "As You Dream's personalized approach to event planning truly sets them apart. They took the time to understand my vision and made it a reality.",
  },
  {
    testimonal:
      "I highly recommend As You Dream for any event. Their professionalism and expertise made my corporate event a huge success.",
  },
  {
    testimonal:
      "As You Dream's team was a pleasure to work with. They were responsive, organized, and truly dedicated to making my event perfect.",
  },
];

export default function Carousel({ type = "slide" }) {
  const CarouselTag: any =
    type === "fade" ? Fade : type === "zoom" ? Zoom : Slide;
  return (
    <div>
      <CarouselTag {...properties}>
        {slides.map((slide, index) => (
          <div style={{ ...divStyle }} key={`item-${index}`}>
            <p style={{ ...quoteStyle, display: "flex" }}>{slide.testimonal}</p>
          </div>
        ))}
      </CarouselTag>
    </div>
  );
}

const RIGHT_SVG = (
  <svg
    style={{ width: "24px" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 39 11"
  >
    <path
      fill="white"
      d="m33.5 0-.7.7L37.1 5H0v1h37.1l-4.3 4.3.7.7L39 5.5z"
    ></path>
  </svg>
);

const LEFT_SVG = (
  <svg
    style={{ rotate: "180deg", width: "24px" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 39 11"
  >
    <path
      fill="white"
      d="m33.5 0-.7.7L37.1 5H0v1h37.1l-4.3 4.3.7.7L39 5.5z"
    ></path>
  </svg>
);

const properties = {
  prevArrow: LEFT_SVG,
  nextArrow: RIGHT_SVG,
};
