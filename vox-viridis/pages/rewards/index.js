import Navbar from "../../components/Navbar";
import RewardsSwiper from "../../components/Rewards/RewardsSwiper";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../context/loginContext";
import Instance from "../../services/axiosInstance";

function Index() {
    const router = useRouter();
    const { sharedState, setSharedState } = useLoginContext();

    const [data, setData] = useState([]);

    useEffect(() => {
        Instance.get("/reward")
            .then((response) => {
                setData(response.data.elements);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

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
                <RewardsSwiper header={{ title: "Rewards" }} data={data} />
            </div>
            <Footer />
        </div>
    );
}

export default Index;
//
