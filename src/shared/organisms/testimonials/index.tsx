import Container from "@/shared/atoms/container";
import { Carousel } from "../carousel";
import testimonialStyles from "./testimonials.module.scss";

export default function Testimonials() {
  return (
    <div className={testimonialStyles["testimonials-wrap"]}>
      <Container>
        <div className={testimonialStyles["testimonials-title-wrap"]}>
          <p>Testimonials from our</p>
          <h1>Happy Clients</h1>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}
