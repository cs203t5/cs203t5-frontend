import Navbar from "../../components/Navbar";
import styles from "./Homepage.module.css";
import HomepageImgLeft from "./HomepageImgLeft";
import HomepageIntro from "./HomepageIntro";
import HomepageRewards from "./HomepageRight";

const contents = [
    {
        header: "Campaign",
        text: "Our site collates all green campaigns all for you. With fast access and greater convenience, recycling has never been easier! Join us and be our green voice.",
        src: "../../home/campaign.svg",
    },
    {
        header: "Chat",
        text: "Unsure about existing campaigns? Vox Viridis helps you to communicate with readily available representatives. Ask and we will guide you in our mission to save our planet.",
        src: "../../home/chat.svg",
    },
];

function Homepage() {
    return (
        <div className={styles.pageBg}>
            <Navbar />
            <div>
                <img
                    className={styles.BigImg}
                    src="../../home/homepageBig.png"
                ></img>
            </div>
            <HomepageIntro />
            <HomepageImgLeft content={contents[0]}></HomepageImgLeft>
            <HomepageRewards />
            <HomepageImgLeft content={contents[1]}></HomepageImgLeft>
        </div>
    );
}

export default Homepage;
