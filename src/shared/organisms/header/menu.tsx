import Link from "next/link";
import headerStyles from "./header.module.scss";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function Menu({ open, setOpen }: Props) {
  const handleNavigation = () => setOpen(false);

  return (
    <ul
      className={`${
        open ? headerStyles["opened-mobile-menu"] : headerStyles["mobile-menu"]
      }`}
    >
      <li onClick={handleNavigation}>
        <Link href="/">Home</Link>
      </li>
      <li onClick={handleNavigation}>
        <Link href="/events">Events</Link>
      </li>
      <li onClick={handleNavigation}>
        <Link href="/about">About</Link>
      </li>
      <li onClick={handleNavigation}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
}
