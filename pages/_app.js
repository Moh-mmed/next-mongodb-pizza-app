import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import Layout from "../components/Layout";
import store from "../redux/store";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
