import "../styles/globals.css";
import { AuthContextProvider } from "../context/auth/ApiContext";
import { ThemeContextProvider } from "../context/theme/ThemeContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
