import Container from "@/shared/atoms/container";
import { useRouter } from "next/router";
import servicesStyles from "./services.module.scss";
import { services } from "./helpers";

export default function Services() {
  const { query }: any = useRouter();
  const service = services[query.slug];

  return (
    <>
      <div className={servicesStyles.banner}>
        <Container>
          <h1>{service?.title}</h1>
        </Container>
      </div>
      <Container>
        <div className={servicesStyles.description}>
          <div className={servicesStyles["description-text"]}>
            {service?.description}
          </div>
          <div className={servicesStyles["description-img"]}>
            <div
              className={servicesStyles.categoryImg}
              style={{ backgroundImage: `url(${service?.imageUrl})` }}
            />
          </div>
        </div>

        <div className={servicesStyles.services}>
          <div
            className={servicesStyles.serviceImg}
            style={{ backgroundImage: `url(${service?.servicesImgUrl})` }}
          />
          <ul>
            <h3>Services</h3>
            {service?.services?.map((srvc: string) => (
              <li>{srvc}</li>
            ))}
          </ul>
        </div>
        {/* <div className={servicesStyles.samples}>samples</div> */}
      </Container>
    </>
  );
}
