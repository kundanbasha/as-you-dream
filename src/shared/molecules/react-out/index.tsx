import reachOutStyles from "./reach-out.module.scss";

export default function ReactOut() {
  return (
    <ul className={reachOutStyles["reach-out-list"]}>
      <li>
        <a href="https://www.instagram.com/asyouuuudream/" target="_blank">
          <img
            alt="Instagram"
            src="https://static.wixstatic.com/media/81af6121f84c41a5b4391d7d37fce12a.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/81af6121f84c41a5b4391d7d37fce12a.png"
          />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/people/AsyouDream/100091896909048/?mibextid=ZbWKwL"
          target="_blank"
        >
          <img
            alt="Facebook"
            src="https://static.wixstatic.com/media/23fd2a2be53141ed810f4d3dcdcd01fa.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/23fd2a2be53141ed810f4d3dcdcd01fa.png"
          />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/asyoudreamm" target="_blank">
          <img
            alt="Twitter"
            src="https://static.wixstatic.com/media/01ab6619093f45388d66736ec22e5885.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/01ab6619093f45388d66736ec22e5885.png"
          />
        </a>
      </li>
    </ul>
  );
}
