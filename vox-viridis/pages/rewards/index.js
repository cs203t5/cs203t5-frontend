import Navbar from "../../components/Navbar";
import RewardsSwiper from "../../components/Rewards/RewardsSwiper";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLoginContext } from "../../context/loginContext";
import instance from "../../services/AxiosInstance";

function index() {
    const router = useRouter();
    const { sharedState, setSharedState } = useLoginContext();
    useEffect(() => {
        if (sharedState.token === "") {
            router.push("/unauthorised");
        }
        instance
            .post("/rewards",{}, {
                headers: { Authorization: `Bearer ${sharedState.token}` },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((e) => {
                console.log(e);
            });
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
