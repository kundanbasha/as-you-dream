import Container from "@/shared/atoms/container";
import servicesStyles from "./services.module.scss";
import { cards } from "./helpers";

export default function Services() {
  return (
    <Container className={servicesStyles["services-container"]}>
      {cards.map((card) => (
        <div className={servicesStyles["category-card"]} key={card.title}>
          <h3>{card.title}</h3>
          <div
            className={servicesStyles["img-bg"]}
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          />
          {/* <img alt={card.title} src={card.imageUrl} /> */}
          <p>{card.description}</p>
        </div>
      ))}
    </Container>
  );
}
