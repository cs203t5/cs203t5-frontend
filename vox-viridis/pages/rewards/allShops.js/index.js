import Navbar from "../../../components/Navbar";

import globalStyle from "../../Global.module.css";
import Footer from "../../../components/Footer.js";

function index() {
    return (
        <div>
            <div
                className={globalStyle.pageBg}
                style={{ paddingBottom: "5vh" }}
            >
                <Navbar />
            </div>
            <Footer />
        </div>
    );
}

export default index;
