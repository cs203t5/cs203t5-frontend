import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoginContext } from "../../context/loginContext";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Instance from "../../services/axiosInstance";
import { useState } from "react";

function Index() {
    const router = useRouter();

    const { sharedState, setSharedState } = useLoginContext();
    const [data, setData] = useState([]);
    useEffect(() => {
        if (sharedState.token === "") {
            router.push("/unauthorised");
        }
        Instance.get("/participation", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [router.isReady]);

    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
                <div className="row m-0 p-0 mx-5 my-5">
                    {/* <HistoryCard state={"ongoing"} />
                    <HistoryCard state={"completed"} />
                    <HistoryCard state={"upcoming"} />
                    <HistoryCard state={"ongoing"} /> */}
                    {!data && data.length !== 0 ? (
                        data.map((history, i) => {
                            return (
                                <HistoryCard
                                    state={"ongoing"}
                                    data={history}
                                    key={i}
                                />
                            );
                        })
                    ) : (
                        <div> No Past Transaction Records Found</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Index;

function HistoryCard(props) {
    console.log(props);
    const randomDate = ["12/45/56", "01/12/2022", "02/12/2022", "30/10/2022"];
    const random = Math.floor(Math.random() * randomDate.length);
    return (
        <div
            className="row d-flex mb-3"
            style={{
                border: "solid",
                borderRadius: "20px",
                backgroundColor: "white",
            }}
        >
            {" "}
            <div className="col-10 p-3" style={{ wordWrap: "break-word" }}>
                <div className="container h-100">
                    <div
                        className="row w-100 "
                        style={{ alignItems: "center" }}
                    >
                        <div
                            className="col-8 p-0 ms-4 my-2 text-align-center"
                            style={{ fontWeight: "600" }}
                        >
                            {" "}
                            {props.data.reward.rewardName}
                        </div>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/gift 1.svg"
                                className="img-fluid w-25 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            {`${props.data.reward.goal} ${props.data.reward.rewardType}`}
                        </div>
                    </div>
                    <div className="row w-100 mt-2 mb-3">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/clock 1.svg"
                                className="img-fluid w-25 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            {randomDate[random]}
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2 col-sm-12 pb-sm-3 d-flex">
                {props.state === "ongoing" ? (
                    <Button
                        style={{
                            cursor: "default",
                            alignSelf: "center",
                            width: "150px",
                        }}
                    >
                        Ongoing
                    </Button>
                ) : props.state === "upcoming" ? (
                    <Button
                        variant="success"
                        style={{
                            cursor: "default",
                            alignSelf: "center",
                            width: "150px",
                        }}
                    >
                        Upcoming
                    </Button>
                ) : (
                    <Button
                        variant="danger"
                        style={{
                            cursor: "default",
                            alignSelf: "center",
                            width: "150px",
                        }}
                    >
                        Expired
                    </Button>
                )}
            </div>
        </div>
    );
}
