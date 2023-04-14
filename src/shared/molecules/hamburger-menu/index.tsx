import hamburgerStyles from "./hamburger-menu.module.scss";

type Props = {
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

export default function HamburgerMenu({ open, setOpen }: Props) {
  return (
    <button
      className={`${
        open
          ? hamburgerStyles["opened-ham-button"]
          : hamburgerStyles["ham-button"]
      }`}
      onClick={() => setOpen && setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </button>
  );
}
