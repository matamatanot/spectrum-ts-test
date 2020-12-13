import { SSRProvider } from "@react-aria/ssr";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
};

export default MyApp;
