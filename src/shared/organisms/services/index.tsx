import Container from "@/shared/atoms/container";
import servicesStyles from "./services.module.scss";
import Link from "next/link";
import { cards } from "./helpers";

export default function Services() {
  return (
    <Container id="events" className={servicesStyles["services-container"]}>
      {cards.map((card) => (
        <div className={servicesStyles["category-card"]} key={card.title}>
          <h3>{card.title}</h3>
          <Link href={`/services?slug=${card.slug}&service=${card.title}`}>
            <div
              className={servicesStyles["img-bg"]}
              style={{ backgroundImage: `url(${card.imageUrl})` }}
            />
          </Link>
          <p>{card.description}</p>
        </div>
      ))}
    </Container>
  );
}
