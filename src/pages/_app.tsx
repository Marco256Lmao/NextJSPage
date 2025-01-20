import NavDrawer from "@/components/NavDrawer";
import NavHeader from "@/components/NavHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen">
      <NavDrawer />
      <div className="flex flex-col flex-grow">
        <NavHeader />
        <div className="ml-72 flex flex-grow p-4 bg-gray-100 items-center justify-center">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
