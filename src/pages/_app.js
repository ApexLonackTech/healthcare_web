import "../styles/globals.css";
import "../styles/core.css";
import "../styles/theme-default.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthContextProvider } from "../context/auth/ApiContext";
import { ThemeContextProvider } from "../context/theme/ThemeContext";
import Script from "next/script";
import useSWR, { SWRConfig } from "swr";
import { MembershipContextProvider } from "../context/membership/membership";
import { toast, ToastContainer } from "react-toastify";
import { SettingContextProvider } from "../context/Setting/Setting";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return (
    <SettingContextProvider>
      <SWRConfig>
        <AuthContextProvider>
          <MembershipContextProvider>
            <Script src="/assets/js/popper.js" />
            <Script src="/assets/js/bootstrap.js" />
            <Script src="/assets/jsperfect-scrollbar.js" />
            <Script src="/assets/js/menu.js" />
            <Script src="/assets/js/menu.js" />
            {/* <Script src="https://vjs.zencdn.net/7.20.3/video.min.js" />*/}
            {/* <Head>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf_viewer.min.css" rel="stylesheet" type="text/css" />
            </Head>  */}
            <ThemeContextProvider>
              <Component {...pageProps} />
            </ThemeContextProvider>
          </MembershipContextProvider>
        </AuthContextProvider>
        <ToastContainer />
      </SWRConfig>
    </SettingContextProvider>
  );
}

export default MyApp;
