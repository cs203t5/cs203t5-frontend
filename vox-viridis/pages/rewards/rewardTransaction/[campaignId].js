import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import { useLoginContext } from "../../../context/loginContext";
import instance from "../../../services/AxiosInstance";
import globalStyle from "../../Global.module.css";

function rewardTransaction() {
    const randomDate = ["12/45/56", "01/12/2022", "02/12/2022", "30/10/2022"];
    const random = Math.floor(Math.random() * randomDate.length);
    const router = useRouter();
    const campaignId = router.query.campaignId;
    const { sharedState, setSharedState } = useLoginContext();
    const [data, setData] = useState({});
    useEffect(() => {
        if (sharedState.token === "") {
            // router.push("/unauthorised");
        }
        if (sharedState.role === "BUSINESS") {
            router.push("/unauthorised");
        }
        if (!router.isReady) {
            return;
        }
        instance
            .get("/reward/myReward", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                if (response.data.length === 0) return;
            })
            .catch((error) => {
                console.log(error);
            });
        instance
            .get(`/reward/${router.query.campaignId}`)
            .then((response) => {
                setData({
                    ...data,
                    campaignTitle: response.data.campaignTitle,
                    campaignImage: response.data.campaignImage,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [router.isReady]);

    return (
        <div>
            <div
                className={globalStyle.pageBg}
                style={{ paddingBottom: "5vh" }}
            >
                <Navbar />
                <div className="row mx-5 m-0 mt-5">
                    <div
                        className="col"
                        style={{ fontSize: "2rem", fontStyle: "italic" }}
                    >
                        {data.campaignTitle}
                    </div>
                </div>
                <div className="row mx-5 m-0 mt-5">
                    <div className="col-3 ">
                        <img
                            src={data.campaignImage}
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="col ms-4 gap-2">
                        <RewardTransactionCard date={randomDate[random]} />
                        {/* <RewardTransactionCard date={randomDate[random]} />
                        <RewardTransactionCard date={randomDate[random]} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
function RewardTransactionCard(props) {
    const { sharedState, setSharedState } = useLoginContext();
    const router = useRouter();
    instance
        .get("/participation", {
            headers: { Authorization: `Bearer ${sharedState.token}` },
        })
        .then((response) => {
            if (response.data.length === 0) router.push("/unauthorized");
            console.log(response);
        })
        .catch((error) => {
            console.log("error");
        });
    return (
        <div
            className="row p-3 mb-5"
            style={{ border: "solid", borderRadius: "20px" }}
        >
            <div style={{ textDecoration: "underline", fontSize: "1.5rem" }}>
                Transaction completed on {props.date}
            </div>
            <div className="my-2 ">
                Description: Exchanged 5 stamps for 20ml of body wash
            </div>
        </div>
    );
}
export default rewardTransaction;
