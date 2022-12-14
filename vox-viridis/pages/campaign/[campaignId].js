import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";
import Link from "next/link";
import instance from "../../services/axiosInstance";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLoginContext } from "../../context/loginContext";
import { Toast } from "react-bootstrap";

const CampaignContent = () => {
    const [campaign, setCampaign] = useState({
        campaignImage: "",
        companyImage: "",
        description: "",
        companyName: "",
        campaignName: "",
        rewardSystem: "",
        location: "",
        duration: "",
        terms: "",
        rewardId: "",
    });
    const router = useRouter();
    const { campaignId } = router.query;
    const [showSuccessfulAppointment, setShowSuccessfulAppointment] =
        useState(false);
    const [showUnsuccessfulAppointment, setShowUnsuccessfulAppointment] =
        useState(false);
    const { sharedState, setSharedState } = useLoginContext();
    console.log(sharedState.role === "CONSUMER");
    useEffect(() => {
        if (!router.isReady) return;
        instance
            .get(`/campaign/${campaignId}`)
            .then((response) => {
                console.log(response.data);
                setCampaign({
                    campaignImage: response.data.imageUrl,
                    companyImage: response.data.companyImage,
                    campaignName: response.data.title,
                    companyName: response.data.companyName,
                    description: response.data.rewards.campaignDescription,
                    location: response.data.location,
                    terms: response.data.rewards.tnc,
                    rewardId: response.data.rewards.id,
                    address: response.data.address,
                    duration: `${response.data.startDate.split("T")[0]}- ${
                        response.data.endDate.split("T")[0]
                    } `,
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, [router.isReady]);

    const makeAppointment = () => {
        console.log(campaign.rewardId);
        instance
            .post(
                `/participation/${campaign.rewardId}`,
                {},
                {
                    headers: { Authorization: `Bearer ${sharedState.token}` },
                }
            )
            .then((response) => {
                setShowSuccessfulAppointment(true);
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 400) {
                    setShowUnsuccessfulAppointment(true);
                }
            });
    };

    return (
        <div className="container-fluid p-0" style={{}}>
            <div className="row w-100 h-100 m-0 my-5">
                <div className="col-12" style={{ textAlign: "center" }}>
                    <img
                        src={campaign.campaignImage}
                        className="img-fluid w-50 ms-auto me-auto"
                        style={{ minHeight: "250px" }}
                    />
                </div>
            </div>
            <div className="row w-100 h-100 mx-5" style={{}}>
                <div className="col-4 ">
                    <div class="card" style={{ width: "15rem", border: "0" }}>
                        {campaign.companyImage !== null ? (
                            <img
                                src={campaign.companyImage}
                                class="card-img-top"
                                alt="..."
                            />
                        ) : (
                            <img
                                src="https://www.smu.edu.sg/sites/default/files/smu-logo.jpg"
                                class="card-img-top"
                                alt="..."
                            />
                        )}
                    </div>
                </div>
                <div className="col-8 px-0" style={{ textAlign: "center" }}>
                    <p
                        style={{
                            fontSize: "40px",
                            position: "relative",
                            right: "40px",
                            top: "30px",
                        }}
                    >
                        {campaign.campaignName}
                    </p>
                    <p
                        style={{
                            fontSize: "25px",
                            position: "relative;right:40px;",
                            color: "rgb(168, 168, 168)",
                        }}
                    >
                        {campaign.companyName}
                    </p>
                </div>
            </div>
            {sharedState.role === "CONSUMER" && (
                <div className="row mx-4 my-5">
                    <button
                        type="button"
                        class="btn btn-primary btn-sm"
                        onClick={makeAppointment}
                    >
                        Make an Appointment
                    </button>
                </div>
            )}
            <div
                className="row mx-4 mt-5"
                style={{ backgroundColor: "rgb(243,243,243)" }}
            >
                <p
                    style={{
                        fontSize: "40px",
                    }}
                >
                    Exchange Details:
                </p>

                <p
                    style={{
                        fontSize: "30px",
                        textDecoration: "underline",
                    }}
                >
                    Description:
                </p>

                <p
                    style={{
                        fontSize: "30px",
                    }}
                >
                    {campaign.description}
                </p>

                <p
                    style={{
                        fontSize: "30px",
                        textDecoration: "underline",
                    }}
                >
                    Region
                </p>

                <p
                    style={{
                        fontSize: "30px",
                    }}
                >
                    {campaign.location}
                </p>

                <p
                    style={{
                        fontSize: "30px",
                        textDecoration: "underline",
                    }}
                >
                    Address
                </p>

                <p
                    style={{
                        fontSize: "30px",
                    }}
                >
                    {campaign.address}
                </p>

                <p
                    style={{
                        fontSize: "30px",
                        textDecoration: "underline",
                    }}
                >
                    Campaign duration
                </p>

                <p
                    style={{
                        fontSize: "30px",
                    }}
                >
                    {campaign.duration}
                </p>

                <p
                    style={{
                        fontSize: "30px",
                        textDecoration: "underline",
                    }}
                >
                    Terms and Conditions
                </p>

                <p
                    style={{
                        fontSize: "30px",
                    }}
                >
                    {campaign.terms}
                </p>
            </div>
            <Toast
                onClose={() => setShowUnsuccessfulAppointment(false)}
                show={showUnsuccessfulAppointment}
                delay={3000}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                }}
            >
                <Toast.Header>
                    <strong className="me-auto">Vox Viridis</strong>
                </Toast.Header>
                <Toast.Body>Campaign Joined Already!</Toast.Body>
            </Toast>
            <Toast
                onClose={() => setShowSuccessfulAppointment(false)}
                show={showSuccessfulAppointment}
                delay={3000}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                }}
            >
                <Toast.Header>
                    <strong className="me-auto">Vox Viridis</strong>
                </Toast.Header>
                <Toast.Body>Campaign Joined Successfully!</Toast.Body>
            </Toast>
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
