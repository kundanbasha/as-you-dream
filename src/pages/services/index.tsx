import Container from "@/shared/atoms/container";
import { useRouter } from "next/router";
import { servicesData } from "@/utils/data";
import servicesStyles from "./services.module.scss";
import SubBanner from "@/shared/molecules/sub-banner";
import ImageWithContent from "@/shared/molecules/imgage-with-content";

export default function Services() {
  const { query }: any = useRouter();
  const service: any = servicesData[query.slug];

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
            style={{
              backgroundImage: `url(${service?.servicesImgUrl})`,
              backgroundPosition: service?.backgroundPosition || "inherit",
            }}
          />
          <ul>
            <h3>Services</h3>
            {service?.services?.map((srvc: string) => (
              <li key={srvc}>{srvc}</li>
            ))}
          </ul>
        </div>
        {/* <div className={servicesStyles.samples}>samples</div> */}
      </Container>
    </>
  );
}
