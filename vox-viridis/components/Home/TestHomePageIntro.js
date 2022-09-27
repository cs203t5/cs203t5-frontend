import styles from "./TestHomePageIntro.module.css";
const TestHomePageIntro = () => {
    return (
        <div className="row" align="center">
            {" "}
            <div className="col-sm-12 col-md col-lg-4 ">
                <img
                    className={styles.marineImg}
                    src="../../home/marine.png"
                ></img>
                <div style={{ fontSize: "1.5em", marginTop: "3vh" }}>
                    Marine Pollution
                </div>
                <div className={styles.marineWriteup}>
                    52% of sea turtles have eaten commerical plastic, affecting
                    their mortality rate. Get involved with Vox Viridis to save
                    our precious marine animals!{" "}
                </div>
            </div>
            <div className="col-sm-12 col-md col-lg-4">
                <img
                    className={styles.landfillImg}
                    src="../../home/landfill.png"
                ></img>
                <div style={{ fontSize: "1.5em", marginTop: "3vh" }}>
                    Landfill
                </div>
                <div className={styles.landfillWriteup}>
                    With our limited land capacity, even Pulau Semakau is
                    running out of space for our waste. Get started on recycling
                    before it is too late.{" "}
                </div>
            </div>
            <div className="col-sm-12 col-md col-lg-4">
                <img
                    className={styles.climatechangeImg}
                    src="../../home/climatechange.png"
                ></img>
                <div style={{ fontSize: "1.5em", marginTop: "3vh" }}>
                    Climate Change
                </div>
                <div className={styles.climateWriteup}>
                    Rising sea level, melting ice caps and homeless polar bears.
                    These are caused by our irresponsiblties and we have to
                    start taking action now.
                </div>
            </div>
        </div>
    );
};

export default TestHomePageIntro;
