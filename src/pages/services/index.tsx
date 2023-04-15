import Container from "@/shared/atoms/container";
import { useRouter } from "next/router";
import servicesStyles from "./services.module.scss";
import { services } from "./helpers";
import SubBanner from "@/shared/molecules/sub-banner";
import ImageWithContent from "@/shared/molecules/imgage-with-content";

export default function Services() {
  const { query }: any = useRouter();
  const service = services[query.slug];

  return (
    <>
      <SubBanner title={service?.title} />
      <Container>
        <ImageWithContent
          description={service?.description}
          imageUrl={service?.imageUrl}
        />

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
