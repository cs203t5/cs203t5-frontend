import Navbar from "../../components/Navbar";
import styles from "./Homepage.module.css";
function Homepage() {
    return (
        <div className={styles.pageBg}>
            <Navbar />
            <div>
                <img
                    className={styles.BigImg}
                    src="../../home/homepageBig.png"
                    FFFFFF
                ></img>
            </div>
            <div className={styles.introContainer}>
                <div className={styles.marineContainer}>
                    <img
                        className={styles.marineImg}
                        src="../../home/marine.png"
                        FFFFFF
                    ></img>
                    <div style={{ fontSize: "1.5em", margin: "5px" }}>
                        Marine Pollution
                    </div>
                    <div className={styles.marineWriteup}>
                        52% of sea turtles have eaten commerical plastic,
                        affecting their mortality rate. Get involved with Vox
                        Viridis to save our precious marine animals!{" "}
                    </div>
                </div>
                <div className={styles.landfillContainer}>
                    <img
                        className={styles.landfillImg}
                        src="../../home/landfill.png"
                        FFFFFF
                    ></img>
                    <div style={{ fontSize: "1.5em", margin: "5px" }}>
                        Landfill
                    </div>
                    <div className={styles.marineWriteup}>
                        With our limited land capacity, even Pulau Semakau is
                        running out of space for our waste. Get started on
                        recycling before it is too late.{" "}
                    </div>
                </div>
                <div className={styles.climatechangeContainer}>
                    <img
                        className={styles.climatechangeImg}
                        src="../../home/climatechange.png"
                        FFFFFF
                    ></img>
                    <div style={{ fontSize: "1.5em", margin: "5px" }}>
                        Climate Change
                    </div>
                    <div className={styles.marineWriteup}>
                        Rising sea level, melting ice caps and homeless polar
                        bears. These are caused by our irresponsiblties and we
                        have to start taking action now.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;
