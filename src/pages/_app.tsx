import NavDrawer from "@/components/NavDrawer";
import NavHeader from "@/components/NavHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavDrawer>
      <NavHeader />
      <Component {...pageProps} />
    </NavDrawer>
  );
}
