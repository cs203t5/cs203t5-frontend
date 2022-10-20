import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";
import { Alert, Button } from "react-bootstrap";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Points from "../../components/Rewards/Points";
import Cards from "../../components/Rewards/Cards";

const data = {
    shopName: "The Body Shop",
    campaignName: "Recycle Paper",
    termsAndCondition:
        "Please sell your tissue, we can only give 5 tissue each. I like psyduck, i like turtles",
    rewardType: "cards",
};
function rewardPage() {
    return (
        <div>
            <div>
                <div
                    className={globalStyle.pageBg}
                    style={{ paddingBottom: "5vh" }}
                >
                    <Navbar />
                    <div
                        className="row mx-4 p-4 mt-5"
                        style={{
                            border: "solid",
                            borderRadius: "20px",
                            backgroundColor: "white",
                        }}
                    >
                        <div className="row mt-2 px-4 d-flex">
                            <div
                                className="col-10 p-0 float-start"
                                style={{ fontSize: "3rem", fontWeight: "100" }}
                            >
                                {data.shopName}
                            </div>
                            <div
                                className="col-2 p-0 "
                                style={{ alignSelf: "center" }}
                            >
                                <Button
                                    className=""
                                    size="lg"
                                    style={{
                                        backgroundColor:
                                            "rgba(232, 166, 64, 0.59)",
                                        color: "black",
                                        float: "right",
                                    }}
                                >
                                    Chat
                                    <ChatBubbleOutlineIcon
                                        className=""
                                        style={{ marginLeft: "8px" }}
                                    />
                                </Button>
                            </div>
                        </div>
                        <div
                            className="row mt-5 px-4"
                            style={{ fontSize: "2em", fontStyle: "italic" }}
                        >
                            {data.campaignName}
                        </div>
                        <Points /> 
                        <Cards />
                        <div className="row mt-5 px-4">
                            <Alert key="dark" variant="dark">
                                <div
                                    className="col-12 "
                                    style={{
                                        fontSize: "1em",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Terms and Conditions:{" "}
                                    {data.termsAndCondition}
                                </div>
                            </Alert>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default rewardPage;
