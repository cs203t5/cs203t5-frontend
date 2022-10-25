import Navbar from "../../../components/Navbar";
import globalStyle from "../../Global.module.css";
import Footer from "../../../components/Footer.js";
import RewardCard from "../../../components/AllRewards/RewardCard";
import { Row } from "react-bootstrap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useLoginContext } from "../../../context/loginContext";

function index() {
    const router = useRouter();
    const { sharedState, setSharedState } = useLoginContext();
    useEffect(() => {
        console.log(sharedState);
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
                <div className="container-fluid mt-5 g-5 ">
                    <div
                        className="my-4"
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "3em",
                        }}
                    >
                        Rewards
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        <RewardCard
                            data={{
                                shop: "Cold Storage",
                                text: "Loreum ipsum blah blah blah kjlnsdakjndalskjd kjsdnakd;jn jsnd;ajkn",
                                rewardId: "2",
                            }}
                        />
                        <RewardCard
                            data={{
                                shop: "Cold Storage",
                                text: "Loreum ipsum blah blah blah kjlnsdakjndalskjd kjsdnakd;jn jsnd;ajkn",
                                rewardId: "2",
                            }}
                        />
                        <RewardCard
                            data={{
                                shop: "Cold Storage",
                                text: "Loreum ipsum blah blah blah kjlnsdakjndalskjd kjsdnakd;jn jsnd;ajkn",
                                rewardId: "2",
                            }}
                        />
                        <RewardCard
                            data={{
                                shop: "Cold Storage",
                                text: "Loreum ipsum blah blah blah kjlnsdakjndalskjd kjsdnakd;jn jsnd;ajkn",
                                rewardId: "2",
                            }}
                        />
                        <RewardCard
                            data={{
                                shop: "Cold Storage",
                                text: "Loreum ipsum blah blah blah kjlnsdakjndalskjd kjsdnakd;jn jsnd;ajkn",
                                rewardId: "2",
                            }}
                        />
                        <RewardCard
                            data={{
                                shop: "Cold Storage",
                                text: "Loreum ipsum blah blah blah kjlnsdakjndalskjd kjsdnakd;jn jsnd;ajkn",
                                rewardId: "2",
                            }}
                        />
                        <RewardCard
                            data={{
                                shop: "Cold Storage",
                                text: "Loreum ipsum blah blah blah kjlnsdakjndalskjd kjsdnakd;jn jsnd;ajkn",
                                rewardId: "2",
                            }}
                        />
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;
