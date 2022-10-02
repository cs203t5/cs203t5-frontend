import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
