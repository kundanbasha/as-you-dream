import { Slide, Fade, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const quoteStyle = {
  padding: "20px",
  color: "#000000",
  width: "50%",
  fontSize: "32px",
  textAlign: "center",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
  margin: "0 56px",
};

const slides = [
  {
    imageUrl:
      "https://static.wixstatic.com/media/84770f_eae14600794d4faba2948d54350add45~mv2_d_4896_3264_s_4_2.jpg/v1/fit/w_4700,h_3400,q_90/84770f_eae14600794d4faba2948d54350add45~mv2_d_4896_3264_s_4_2.webp",
    testimonal:
      "I'm a testimonial 1. Click to edit me and add text that says something nice about you and your services.",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/84770f_38fad08687be4ca5a5c835623056b46e~mv2_d_7258_4844_s_4_2.jpg/v1/fit/w_1880,h_1360,q_90/84770f_38fad08687be4ca5a5c835623056b46e~mv2_d_7258_4844_s_4_2.webp",
    testimonal:
      "I'm a testimonial 2. Click to edit me and add text that says something nice about you and your services.",
  },
  {
    imageUrl:
      "https://static.wixstatic.com/media/84770f_a5ff02e41966402e9ed150424376c20a~mv2_d_4288_2788_s_4_2.jpg/v1/fit/w_1880,h_1360,q_90/84770f_a5ff02e41966402e9ed150424376c20a~mv2_d_4288_2788_s_4_2.webp",
    testimonal:
      "I'm a testimonial 3. Click to edit me and add text that says something nice about you and your services.",
  },
];

export default function ImageCarousel({ type = "slide" }) {
  const CarouselTag: any =
    type === "fade" ? Fade : type === "zoom" ? Zoom : Slide;
  return (
    <div>
      <CarouselTag {...properties}>
        {slides.map((slide, index) => (
          <div
            key={`image-${index}`}
            style={{ ...divStyle, backgroundImage: `url(${slide.imageUrl})` }}
          />
        ))}
      </CarouselTag>
    </div>
  );
}

const RIGHT_SVG: any = (
  <svg
    className="w-[24px]"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 39 11"
  >
    <path d="m33.5 0-.7.7L37.1 5H0v1h37.1l-4.3 4.3.7.7L39 5.5z"></path>
  </svg>
);

const LEFT_SVG = (
  <svg
    className="w-[24px]"
    style={{ rotate: "180deg" }}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 39 11"
  >
    <path d="m33.5 0-.7.7L37.1 5H0v1h37.1l-4.3 4.3.7.7L39 5.5z"></path>
  </svg>
);

const properties = {
  prevArrow: LEFT_SVG,
  nextArrow: RIGHT_SVG,
};
