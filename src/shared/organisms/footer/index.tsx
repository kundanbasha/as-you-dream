import Container from "@/shared/atoms/container";
import footerStyles from "./footer.module.scss";
import Link from "next/link";
import ReactOut from "@/shared/molecules/react-out";

export default function Footer() {
  return (
    <footer className={footerStyles["footer-wrap"]}>
      <Container>
        <div className={footerStyles.grid}>
          <div className={footerStyles["grid-item"]}>
            <h1 className={footerStyles.title}>AS YOU DREAM</h1>
            <p className={footerStyles.summary}>
              We expertly craft memorable experiences for all your dream events
              with a focus on meticulous planning, captivating design, and
              flawless execution.
            </p>
          </div>
          <div className={footerStyles["grid-item"]}>
            <h4 className={footerStyles["item-title"]}>More About us</h4>
            <ul className="list">
              <li>
                <Link href="/services?slug=weddings">Wedding events</Link>
              </li>
              <li>
                <Link href="/services?slug=gatherings">Birthday events</Link>
              </li>
              <li>
                <Link href="/services?slug=corporate_events">
                  Coorporate events
                </Link>
              </li>
              <li>
                <Link href="/services?slug=gatherings">Family events</Link>
              </li>
            </ul>
          </div>
          <div className={footerStyles["grid-item"]}>
            <h4 className={footerStyles["item-title"]}>Address</h4>
            <p>
              As You Dream event management services, ABHB colony, opp to DLF
              cybercity, Gachibowli, Hyderabad, Telangana-500032
            </p>
          </div>
          <div className={footerStyles["grid-item"]}>
            <h4 className={footerStyles["item-title"]}>Reach out</h4>
            <ReactOut />
            <h4 className={footerStyles["item-sub-title"]}>PHONE NUMBER</h4>
            <p>9985315316</p>
          </div>
        </div>
        <div />
        <p className={footerStyles["copy-right"]}>
          © 2023 As You Dream Private Limited
        </p>
      </Container>
    </footer>
  );
}
