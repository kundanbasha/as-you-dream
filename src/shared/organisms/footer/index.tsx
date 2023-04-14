import Container from "@/shared/atoms/container";
import footerStyles from "./footer.module.scss";
import Link from "next/link";

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
              <li className="text-sm">
                <Link href="/events">Wedding events</Link>
              </li>
              <li className="text-sm  mt-1">
                <Link href="/events">Birthday events</Link>
              </li>
              <li className="text-sm mt-1">
                <Link href="/events">Coorporate events</Link>
              </li>
              <li className="text-sm mt-1">
                <Link href="/events">Family events</Link>
              </li>
            </ul>
          </div>
          <div className={footerStyles["grid-item"]}>
            <h4 className={footerStyles["item-title"]}>Address</h4>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing has been the
              industry's standard
            </p>
          </div>
          <div className={footerStyles["grid-item"]}>
            <h4 className={footerStyles["item-title"]}>Reach out</h4>
            <ul className={footerStyles["reach-out-list"]}>
              <li>
                <img
                  alt="Instagram"
                  src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png"
                />
              </li>
              <li>
                <img
                  alt="Facebook"
                  src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
                />
              </li>
              {/* <li>
                <img
                  alt="Gmail"
                  src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
                />
              </li>
              <li>
                <img
                  alt="Twitter"
                  src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png"
                />
              </li> */}
            </ul>
          </div>
        </div>
        <div className="w-full border border-gray-900 mt-5" />
        <p className="text-sm mt-4">© 2023 As You Dream Private Limited</p>
      </Container>
    </footer>
  );
}
