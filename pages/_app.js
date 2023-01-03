import { useRouter } from "next/router";
import Layout from "../components/layout";
import "../styles/menu.css";
import "../styles/animation.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (router.pathname === "/signin" || router.pathname === "/logout")
    return <Component {...pageProps} />;
  else
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
}

export default MyApp;
