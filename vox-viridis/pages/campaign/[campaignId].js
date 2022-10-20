import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";

function campaignId() {
    return (
        <div>
            <div
                className={globalStyle.pageBg}
                style={{ paddingBottom: "5vh" }}
            >
                <Navbar />
            </div>
        </div>
    );
}

export default campaignId;
