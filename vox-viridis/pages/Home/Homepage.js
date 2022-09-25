import Navbar from "../../components/Navbar";
import styles from "./Homepage.module.css";
import HomepageIntro from "./HomepageIntro";

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
            <HomepageIntro />
        </div>
    );
}

export default Homepage;
