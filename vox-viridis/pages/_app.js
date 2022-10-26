import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { AppWrapper } from "../context/loginContext";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);

    return (
        <AppWrapper>
            <Component {...pageProps} />;
        </AppWrapper>
    );
}

export default MyApp;
