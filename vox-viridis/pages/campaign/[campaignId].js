import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";
import Link from "next/link";

const CampaignContent = () => {
    return (
        <div className="container-fluid p-0" style={{}}>
            <div className="row w-100 h-100 m-0 my-5">
                <div className="col-12" style={{ textAlign: "justify" }}>
                    <img
                        src="../../SampleCampaignPic.svg"
                        className="img-fluid w-100"
                    ></img>
                </div>
            </div>
            <div className="row w-100 h-100 mx-5" style={{}}>
                <div className="col-4 ">
                    <div class="card" style={{ width: "15rem", border: "0" }}>
                        <img
                            src="../../SampleKiehlLogo.svg"
                            class="card-img-top"
                            alt="..."
                        ></img>
                    </div>
                </div>
                <div className="col-8 px-0" style={{ textAlign: "center" }}>
                    <p
                        style={{
                            fontSize: "40px",
                            position: "relative;right:40px;top:30px",
                        }}
                    >
                        Recycle and be Rewarded
                    </p>
                    <p
                        style={{
                            fontSize: "25px",
                            position: "relative;right:40px;",
                            color: "rgb(168, 168, 168)",
                        }}
                    >
                        Kiehl's
                    </p>
                </div>
            </div>
            <div
                className="row mx-4 my-5"
                style={{ backgroundColor: "rgb(243,243,243)" }}
            >
                yoyo
            </div>
        </div>
    );
};

function campaignId() {
    return (
        <div>
            <div
                className={globalStyle.pageBg}
                style={{ paddingBottom: "5vh" }}
            >
                <Navbar />
                <CampaignContent />
            </div>
        </div>
    );
}

export default campaignId;
