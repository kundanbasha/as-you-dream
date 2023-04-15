import Header from "@/shared/organisms/header";
import Footer from "@/shared/organisms/footer";
import { ReactNode } from "react";
import appLayoutStyles from "./app-layout.module.scss";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div className={appLayoutStyles["app-body"]}>{children}</div>
      <Footer />
    </>
  );
}
