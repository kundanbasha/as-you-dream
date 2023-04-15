import Button from "@/shared/atoms/button";
import Container from "@/shared/atoms/container";
import eventsStyles from "./events.module.scss";

export default function Events() {
  return (
    <Container className={eventsStyles["events-container"]}>
      <img
        alt="events image"
        src="/events-image.jpg" //"https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588203373134-GOXDZV0RJDYJRI16WMDD/Tent+Wedding+Planner+Newport+and+Cape+Cod?format=2500w"
      />
      <div className={eventsStyles["content-card"]}>
        <h1>EVENTS</h1>
        <p>
          As You Dream specializes in turning your events into magical
          experiences. With their expertise in event decoration and management,
          they create customized designs that fit your vision and bring it to
          life. Their attention to detail ensures that every aspect of the event
          is executed seamlessly, leaving you stress-free and able to enjoy your
          special day. Trust As You Dream to make your dreams a reality.
        </p>
        {/* <Button>Explore</Button> */}
      </div>
    </Container>
  );
}
