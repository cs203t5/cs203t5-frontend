import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import HistoryCard from "../../components/History/HistoryCard";

function index() {
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
