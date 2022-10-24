import Navbar from "../../components/Navbar";
import RewardsSwiper from "../../components/Rewards/RewardsSwiper";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLoginContext } from "../../context/loginContext";

function index() {
    const router = useRouter();
    const { sharedState, setSharedState } = useLoginContext();
    useEffect(() => {
        if (sharedState.token === "") {
            router.push("/unauthorised");
        }
    }, []);
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
