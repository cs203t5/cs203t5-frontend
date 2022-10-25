import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HistoryCard from "../../components/History/HistoryCard";
import { useLoginContext } from "../../context/loginContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
            <div className={globalStyle.pageBg}>
                <Navbar />
                <div className="row m-0 p-0 mx-5 my-5">
                    <HistoryCard state={"ongoing"} />
                    <HistoryCard state={"completed"} />
                    <HistoryCard state={"upcoming"} />
                    <HistoryCard state={"ongoing"} />
                </div>
            </div>
        </div>
    );
}

export default index;
