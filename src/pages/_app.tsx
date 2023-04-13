import AppLayout from "@/shared/layouts/app-layout";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}
