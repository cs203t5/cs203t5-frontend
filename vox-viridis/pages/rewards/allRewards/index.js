import Navbar from "../../../components/Navbar";
import globalStyle from "../../Global.module.css";
import Footer from "../../../components/Footer.js";
import RewardCard from "../../../components/AllRewards/RewardCard";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLoginContext } from "../../../context/loginContext";
import instance from "../../../services/AxiosInstance";

function index() {
    const router = useRouter();
    const { sharedState, setSharedState } = useLoginContext();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (sharedState.token === "") {
            router.push("/unauthorised");
        }
        instance
            .get("/reward")
            .then((response) => {
                setData(response.data);
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
                        {data.map((element) => {
                            return <RewardCard data={element} />;
                        })}

                        <RewardCard
                            data={{
                                campaignTitle: "Cold Storage",
                                tnc: "Loreum ipsum blah blah blah kjlnsdakjndalskjd kjsdnakd;jn jsnd;ajkn",
                                id: "2",
                                campaignImage:
                                    "https://voxviridis.s3.ap-southeast-1.amazonaws.com/campaigns/3.jpeg",
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
