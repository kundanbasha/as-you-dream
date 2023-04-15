import { ReactNode } from "react";
import containerStyles from "./container.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Container({ children, className, id }: Props) {
  return (
    <div id={id} className={`${containerStyles.container} ${className}`}>
      {children}
    </div>
  );
}
