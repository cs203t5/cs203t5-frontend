import { useRouter } from "next/router";
import { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import RewardTransactionCard from "../../../components/Rewards/rewardTransaction/rewardTransactionCard";
import { useLoginContext } from "../../../context/loginContext";
import instance from "../../../services/AxiosInstance";
import globalStyle from "../../Global.module.css";

function rewardTransaction() {
    // console.log(router.query.rewardId);

    const router = useRouter();
    const campaignId = router.query.campaignId;
    const { sharedState, setSharedState } = useLoginContext();

    useEffect(() => {
        if (sharedState.token === "") {
            router.push("/unauthorised");
        }
    }, []);

    useEffect(() => {
        instance
            .get(`campaign/${campaignId}/reward`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                        The Body Shop
                    </div>
                </div>
                <div className="row mx-5 m-0 mt-5">
                    <div className="col-3 ">
                        <img
                            src="../../rewards/theBodyShop.webp"
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="col ms-4 gap-2">
                        <RewardTransactionCard />
                        <RewardTransactionCard />
                        <RewardTransactionCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default rewardTransaction;
