import globalStyle from "../Global.module.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import NavBarLogin from "../../components/NavBarLogin";
import NavBarButton from "../../pages/help/Help Components/NavBarButton";
import AssistantPhotoTwoToneIcon from "@mui/icons-material/AssistantPhotoTwoTone";
import StarsTwoToneIcon from "@mui/icons-material/StarsTwoTone";
import HelpCenterTwoToneIcon from "@mui/icons-material/HelpCenterTwoTone";
import ContactPageTwoToneIcon from "@mui/icons-material/ContactPageTwoTone";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone"; /* or use Vox icon?*/

const Header = () => {
    return (
        <div className="container-fluid border text-center">
            <div className="row">
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-2 "></div>
                <Link href="/">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
                        <img
                            src="../../vox Icon.jpg"
                            width="190"
                            height="85"
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                </Link>
                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
                    <NavBarLogin />
                </div>
            </div>
        </div>
    );
};

const Navbar2 = () => {
    return (
        <nav
            className="navbar sticky-top pt-0"
            style={{ backGroundColor: "#FAF8F4;" }}
        >
            <div class="container-fluid px-0">
                <Header></Header>
                <div className="row">
                    <div className="col-2">
                        <Link href="/campaign">
                            <NavBarButton
                                textContent="Campaigns"
                                LinkPassed="/campaign"
                                toggle="false"
                                children={
                                    <AssistantPhotoTwoToneIcon
                                    />
                                }
                            />
                        </Link>
                    </div>
                    <div className="col-2">
                        <NavBarButton
                            textContent="Rewards"
                            LinkPassed=""
                            toggle="true"
                            children={<StarsTwoToneIcon></StarsTwoToneIcon>}
                        />
                    </div>
                    <div className="col-2"></div>
                    <div className="col-2">
                        <NavBarButton
                            textContent="Help"
                            LinkPassed=""
                            toggle="true"
                            children={
                                <HelpCenterTwoToneIcon></HelpCenterTwoToneIcon>
                            }
                        />
                    </div>
                    <div className="col-2">
                        <NavBarButton
                            textContent="Contact Us"
                            LinkPassed=""
                            toggle="true"
                            children={
                                <ContactPageTwoToneIcon></ContactPageTwoToneIcon>
                            }
                        />
                    </div>
                    <div className="col-2">
                        <NavBarButton
                            textContent="About"
                            LinkPassed=""
                            toggle="true"
                            children={<InfoTwoToneIcon></InfoTwoToneIcon>}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

const index = () => {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                {/* <Header /> */}
                <Navbar2 />
                <div className="row" style={{ height: "200vh" }}></div>
            </div>
        </div>
    );
};

export default index;
