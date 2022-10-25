import { Button } from "react-bootstrap";

function HistoryCard(props) {
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
                            test
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
                            Free Face Mask
                        </div>
                    </div>
                    <div className="row w-100 mt-2">
                        <div className="col-2 ms-4 p-0">
                            <img
                                src="../../campaign/location 1.svg"
                                className="img-fluid w-25 "
                            />
                        </div>
                        <div className="col-8" style={{ alignSelf: "center" }}>
                            test
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
                            test
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

export default HistoryCard;
