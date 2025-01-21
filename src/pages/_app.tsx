import NavDrawer from "@/components/NavDrawer";
import NavHeader from "@/components/NavHeader";
import { createTheme, ThemeProvider } from "@mui/material";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex h-screen overflow-hidden">
        <NavDrawer />
        <div className="flex flex-col flex-grow">
          <NavHeader />
          <div className="md:ml-72 flex flex-grow p-4 bg-gray-100 items-center justify-center">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
