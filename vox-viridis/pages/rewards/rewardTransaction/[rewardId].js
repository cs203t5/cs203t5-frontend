import Navbar from "../../../components/Navbar";
import RewardTransactionCard from "../../../components/Rewards/rewardTransaction/rewardTransactionCard";
import globalStyle from "../../Global.module.css";

function rewardTransaction() {
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
