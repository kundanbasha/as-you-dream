import Head from "next/head";
import Banner from "@/shared/organisms/banner";
import Services from "@/shared/organisms/services";
import Events from "@/shared/organisms/events";
import Testimonials from "@/shared/organisms/testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>As You Dream</title>
        <meta name="description" content="Transforming Dreams into Reality" />
        <meta
          name="description"
          content="At 'As You Dream', we believe in the power of dreams and the magic of turning them into reality. Our journey began when our founders, all passionate unofficial event planners with years of experience, realized their shared vision of creating a company that caters to every client's unique event needs. They understood the importance of personalizing every occasion and giving it a memorable touch, one that lasts a lifetime.

With dedication, hard work, and an unwavering commitment to excellence, 'As You Dream' has grown into a full-fledged event management company that offers a wide range of services. Our diverse team of experts, including event planners, decorators, caterers, photographers, and makeup artists, collaborate to ensure that every event is a seamless and unforgettable experience for our clients and their guests.

Over the past few months, we have successfully planned and executed numerous events, each with its distinct charm and character. From intimate engagement ceremonies to grand weddings, from cozy birthday parties to sophisticated corporate events, we've made dreams come true for all our clients. Our proudest moments are when we see the joy and satisfaction in our clients' eyes as they celebrate their special day, knowing that we played a part in making it happen.

As a client-centric company, we prioritize building strong relationships and maintaining open communication channels with our clients. We invest time in understanding their vision, preferences, and expectations, and then tailor our services to bring their dream event to life. Our team stays updated on the latest trends and innovations in the event industry to provide creative and unique solutions for every occasion.

At 'As You Dream', we're more than just an event management company – we're your partners in creating unforgettable memories. Our mission is to transform your dreams into reality, making every event a celebration of love, laughter, and life. We're excited to join you on this journey and look forward to helping you create the perfect event that you've always dreamt of."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Favi.svg" />
      </Head>
      <>
        <Banner />
        <Services />
        <Events />
        <Testimonials />
      </>
    </>
  );
}
