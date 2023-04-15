import Container from "@/shared/atoms/container";
import servicesStyles from "./services.module.scss";
import Link from "next/link";
import { cards } from "./helpers";

export default function Services() {
  return (
    <Container className={servicesStyles["services-container"]}>
      {cards.map((card) => (
        <div className={servicesStyles["category-card"]} key={card.title}>
          <Link href={`/services?slug=${card.slug}&service=${card.title}`}>
            <h3>{card.title}</h3>
          </Link>
          <div
            className={servicesStyles["img-bg"]}
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          />
          <p>{card.description}</p>
        </div>
      ))}
    </Container>
  );
}
