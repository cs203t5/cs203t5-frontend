import { maxHeight } from "@mui/system";

function CampaignBoxSticky(props) {
    console.log(props);
    return (
        <div className="row p-0 mb-5 gap-5 mx-3">
            <div
                className="col-lg-5 md-5 col-xs-6 offset-lg-1 border border-dark "
                style={{
                    display: "flex",
                    borderRadius: "10px",
                    fontWeight: "500",
                    fontSize: "0.9em",
                    cursor: "pointer",
                }}
            >
                <div className="container h-100">
                    <div
                        className="row w-100 "
                        style={{ alignItems: "center" }}
                    >
                        <div className="col-3 p-0 h-25" style={{}}>
                            <img
                                src={props.campaignData[0].image}
                                className="img-fluid w-75 mt-2 ms-2"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    aspectRatio: "1",
                                    alignSelf: "center",
                                    objectFit: "contain" /*magic*/,
                                }}
                            />
                        </div>
                        <div
                            className="col-8 p-0 ms-2 h-25 mt-sm-3 mt-2 text-align-center"
                            style={{ fontWeight: "600" }}
                        >
                            {" "}
                            {props.campaignData[0].title}
                            <div style={{ color: "#596D55" }}>
                                {props.campaignData[0].companyName}
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/gift 1.svg"
                                className="img-fluid w-50 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            Free Face Mask
                        </div>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/location 1.svg"
                                className="img-fluid w-50 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            {props.campaignData[0].address}
                        </div>
                    </div>
                    <div className="row w-100 mt-2 mb-3">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/clock 1.svg"
                                className="img-fluid w-50 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            {`${
                                props.campaignData[0].startDate.split("T")[0]
                            } - ${props.campaignData[0].endDate.split("T")[0]}`}
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="col-lg-5 md-5 col-xs-6  border border-dark "
                style={{
                    display: "flex",

                    borderRadius: "10px",
                    fontWeight: "500",
                    fontSize: "0.9em",
                    cursor: "pointer",
                }}
            >
                <div className="container h-100">
                    <div
                        className="row w-100 "
                        style={{ alignItems: "center" }}
                    >
                        <div className="col-3 p-0 h-25" style={{}}>
                            <img
                                src={props.campaignData[1].image}
                                className="img-fluid w-75 mt-2 ms-2"
                                style={{
                                    width: "60px",
                                    height: "100px",
                                    aspectRatio: "1",
                                    alignSelf: "center",
                                    objectFit: "contain" /*magic*/,
                                }}
                            />
                        </div>
                        <div
                            className="col-8 p-0 ms-2 h-25 mt-sm-3 mt-2 text-align-center"
                            style={{ fontWeight: "600" }}
                        >
                            {" "}
                            {props.campaignData[1].title}
                            <div style={{ color: "#596D55" }}>
                                {props.campaignData[1].companyName}
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/gift 1.svg"
                                className="img-fluid w-50 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            Free Face Mask
                        </div>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/location 1.svg"
                                className="img-fluid w-50 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            {props.campaignData[1].address}
                        </div>
                    </div>
                    <div className="row w-100 mt-2 mb-3">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/clock 1.svg"
                                className="img-fluid w-50 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            {`${
                                props.campaignData[1].startDate.split("T")[0]
                            } - ${props.campaignData[1].endDate.split("T")[0]}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CampaignBoxSticky;
