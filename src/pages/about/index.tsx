import Container from "@/shared/atoms/container";
import ImageWithContent from "@/shared/molecules/imgage-with-content";
import SubBanner from "@/shared/molecules/sub-banner";
import aboutStyles from "./about.module.scss";

export default function About() {
  return (
    <>
      <SubBanner title="About us" />
      <Container>
        <ImageWithContent
          description={[
            "At 'As You Dream', we believe in the power of dreams and the magic of turning them into reality. Our journey began when our founders, all passionate unofficial event planners with years of experience, realized their shared vision of creating a company that caters to every client's unique event needs. They understood the importance of personalizing every occasion and giving it a memorable touch, one that lasts a lifetime.",

            "With dedication, hard work, and an unwavering commitment to excellence, 'As You Dream' has grown into a full-fledged event management company that offers a wide range of services. Our diverse team of experts, including event planners, decorators, caterers, photographers, and makeup artists, collaborate to ensure that every event is a seamless and unforgettable experience for our clients and their guests.",

            "At 'As You Dream', we're more than just an event management company – we're your partners in creating unforgettable memories. Our mission is to transform your dreams into reality, making every event a celebration of love, laughter, and life. We're excited to join you on this journey and look forward to helping you create the perfect event that you've always dreamt of.",
          ]}
          imageUrl="/team.jpeg"
        />
      </Container>
    </>
  );
}
