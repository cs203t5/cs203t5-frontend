import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar";
import styles from "./Homepage.module.css";
import HomepageImgLeft from "../components/Home/HomepageImgLeft";
import HomepageIntro from "../components/Home/HomepageIntro";
import HomePageRight from "../components/Home/HomepageRight";
import globalStyle from "./Global.module.css";
import { Fade, Slide } from "react-awesome-reveal";

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
export default function Home() {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
                <Fade>
                    <div className="row justify-content-center">
                        <img
                            className="img-responsive center-block"
                            src="../../home/homepageBig.png"
                            style={{
                                maxWidth: "78%",
                            }}
                        ></img>
                    </div>
                </Fade>
                <Slide duration={800}>
                    <HomepageIntro />
                </Slide>
                <Slide duration={800}>
                    <HomepageImgLeft content={contents[0]}></HomepageImgLeft>
                </Slide>
                <Slide duration={800} direction="right">
                    <HomePageRight />
                </Slide>
                <Slide duration={800}>
                    <HomepageImgLeft content={contents[1]}></HomepageImgLeft>
                </Slide>
            </div>
            <Footer />
        </div>
    );
}
