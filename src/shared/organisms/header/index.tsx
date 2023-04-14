import { useState } from "react";
import Container from "@/shared/atoms/container";
import headerStyles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "@/shared/molecules/hamburger-menu";
import Menu from "./menu";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className={headerStyles.headerWrap}>
      <Container className={headerStyles.headerContainer}>
        <HamburgerMenu open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
        <Link href="/" className={headerStyles["ayd-logo-link"]}>
          <Image
            alt="ayd logo"
            src={"/ayd-logo-4.jpeg"}
            width={160}
            height={100}
          />
        </Link>
        <ul
          className={`${headerStyles.linksList} ${headerStyles["right-links"]}`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
