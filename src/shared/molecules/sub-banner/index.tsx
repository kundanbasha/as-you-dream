import Container from "@/shared/atoms/container";
import subBannerStyles from "./sub-banner.module.scss";

type Props = {
  title: string;
};

export default function SubBanner({ title }: Props) {
  return (
    <div className={subBannerStyles.banner}>
      <Container>
        <h1>{title}</h1>
      </Container>
    </div>
  );
}
