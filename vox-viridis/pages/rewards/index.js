import Navbar from "../../components/Navbar";
import RewardsSwiper from "../../components/Rewards/RewardsSwiper";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";

function index() {
    return (
        <div>
            <div
                className={globalStyle.pageBg}
                style={{ paddingBottom: "5vh" }}
            >
                <Navbar />
                <RewardsSwiper data={{ title: "Rewards" }} />
                <RewardsSwiper data={{ title: "Shops" }} />
            </div>
            <Footer />
        </div>
    );
}

export default index;
//
