import { ReactNode } from "react";
import containerStyles from "./container.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={`${containerStyles.container} ${className}`}>
      {children}
    </div>
  );
}
