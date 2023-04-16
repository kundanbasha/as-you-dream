import Container from "@/shared/atoms/container";
import ReactOut from "@/shared/molecules/react-out";
import SubBanner from "@/shared/molecules/sub-banner";
import ContactForm from "@/shared/organisms/contact-form";
import contactStyles from "./contact.module.scss";

export default function Contact() {
  return (
    <>
      <SubBanner title="Contact" />
      <Container className={contactStyles["contact-container"]}>
        <ContactForm />
        <div className={contactStyles["contact-address"]}>
          <h3>Address</h3>
          <p>
            As You Dream event management services, ABHB colony, opp to DLF
            cybercity, Gachibowli, Hyderabad, Telangana-500032
          </p>

          <h3>Phone Number</h3>
          <p>9876543210</p>
          <br />
          <ReactOut />
        </div>
      </Container>
    </>
  );
}
