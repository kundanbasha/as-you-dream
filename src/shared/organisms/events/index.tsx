import Button from "@/shared/atoms/button";
import Container from "@/shared/atoms/container";
import eventsStyles from "./events.module.scss";

export default function Events() {
  return (
    <Container className={eventsStyles["events-container"]}>
      <img
        alt="events image"
        src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588203373134-GOXDZV0RJDYJRI16WMDD/Tent+Wedding+Planner+Newport+and+Cape+Cod?format=2500w"
      />
      <div className={eventsStyles["content-card"]}>
        <h1>Events</h1>
        <p>
          We create bespoke weddings and events that are inspired by our
          clients. We work collaboratively to ensure your event is cohesive and
          thoughtful. At Brilliant Event Planning, we believe that even the
          smallest details can have a huge impact.
        </p>
        <Button>Explore</Button>
      </div>
    </Container>
  );
}
