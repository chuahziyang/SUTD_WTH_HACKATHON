import { type AppType } from "next/app";
import { api } from "@components/utils/api";
import "@components/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
