const HomePageIntro = () => {
    return (
        <div className="container-fluid">
            <div
                className="row mx-0 pb-5 pt-5 gap-4 justify-content-around"
                align="center"
                style={{
                    backgroundColor: "white",
                    maxWidth: "100%",
                }}
            >
                <div className="col-sm-12 col-lg-3 ">
                    <div className="col ">
                        <img
                            className="img-fluid "
                            src="../../home/marine.png"
                            style={{ height: "30vh" }}
                        ></img>
                    </div>
                    <div
                        className="col"
                        style={{
                            fontSize: "1.5em",
                            marginTop: "3vh",
                            fontWeight: "600",
                        }}
                    >
                        Marine Pollution
                    </div>
                    <div
                        className="col"
                        style={{ marginTop: "2.5vh", width: "30vh" }}
                    >
                        52% of sea turtles have eaten commerical plastic,
                        affecting their mortality rate. Get involved with Vox
                        Viridis to save our precious marine animals!
                    </div>
                </div>
                <div className="col-sm-12 col-md col-lg-3">
                    <div className="col">
                        <img
                            className="img-fluid"
                            src="../../home/landfill.png"
                            style={{ height: "30vh" }}
                        ></img>
                    </div>
                    <div
                        className="col"
                        style={{
                            fontSize: "1.5em",
                            marginTop: "3vh",
                            fontWeight: "600",
                        }}
                    >
                        Landfill
                    </div>
                    <div
                        className="col"
                        style={{ marginTop: "2.5vh", width: "30vh" }}
                    >
                        With our limited land capacity, even Pulau Semakau is
                        running out of space for our waste. Get started on
                        recycling before it is too late.
                    </div>
                </div>
                <div className="col-sm-12 col-md col-lg-3">
                    <div className="col">
                        <img
                            className="img-fluid"
                            src="../../home/climatechange.png"
                            style={{ height: "30vh" }}
                        ></img>
                    </div>
                    <div
                        className="col"
                        style={{
                            fontSize: "1.5em",
                            marginTop: "3vh",
                            fontWeight: "600",
                        }}
                    >
                        Climate Change
                    </div>
                    <div
                        className="col"
                        style={{ marginTop: "2.5vh", width: "30vh" }}
                    >
                        Rising sea level, melting ice caps and homeless polar
                        bears. These are caused by our irresponsiblties and we
                        have to start taking action now.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageIntro;
