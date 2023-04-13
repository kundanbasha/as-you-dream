import { ReactNode } from "react";
import buttonStyles from "./button.module.scss";

type Props = {
  children: ReactNode;
};

export default function Button({ children }: Props) {
  return <button className={buttonStyles["button-styles"]}>{children}</button>;
}
