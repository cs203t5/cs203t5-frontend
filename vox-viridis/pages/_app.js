import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle.min");
    }, []);
    return (
        <div className="">
            <Head>
                {" "}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />;
        </div>
    );
}

export default MyApp;
