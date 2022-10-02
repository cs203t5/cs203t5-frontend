import styles from "./HomepageRight.module.css";

const HomepageRewards = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#ffffff" }}>
            <div className="row p-5 ">
                <div className="col-lg-2 "></div>

                <div
                    className="col-12 col-lg-4 md-6"
                    style={{ alignSelf: "center" }}
                >
                    <div
                        className="row"
                        style={{
                            fontSize: "2em",
                            fontStyle: "italic",
                            justifyContent: "center",
                            margin: "auto",
                        }}
                    >
                        Rewards
                    </div>
                    <div
                        className="row mt-2"
                        style={{
                            marginTop: "2vh",
                            width: "30vw",
                            justifyContent: "center",
                            margin: "auto",
                        }}
                    >
                        Be rewarded when you recycle with us today! Accumulate
                        points and claim exciting gifts and rewards with Vox
                        Viridis today!
                    </div>
                </div>

                <div
                    className="col-12 col-lg-6 justify-content-center my-3 ml-5 "
                    align="center"
                >
                    <img
                        src="../../home/rewards.svg"
                        style={{ width: "25vw" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default HomepageRewards;
