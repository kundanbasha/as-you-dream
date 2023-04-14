import Container from "@/shared/atoms/container";
import headerStyles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className={headerStyles.headerWrap}>
      <Container className={headerStyles.headerContainer}>
        <div>
          <Image
            alt="ayd logo"
            src={"/ayd-logo-4.jpeg"}
            width={160}
            height={100}
          />
        </div>
        {/* <ul className={headerStyles.linksList}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
        </ul> */}

        <ul
          className={`${headerStyles.linksList} ${headerStyles["right-links"]}`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
