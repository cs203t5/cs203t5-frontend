import { Button, IconButton, Input } from "@mui/material";
import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import styles from "./campaign.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CampaignFilter from "../../components/Campaign/CampaignFilter";
import Footer from "../../components/Footer.js";
import CampaignBox from "../../components/Campaign/CampaignBox";

const Campaign = () => {
    return (
        <div>
            <div className={globalStyle.pageBg} style={{ display: "block" }}>
                <div className="container-fluid p-0 ">
                    <Navbar />
                    <div className={styles.search}>
                        <Input
                            placeholder="Search for campaigns"
                            className={styles.searchForCampaign}
                        />
                        <IconButton size="large">
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <div className="container-fluid g-0 mt-5 pb-5">
                        <div className="row m-auto ">
                            <CampaignFilter />
                            <div className="col-8 p-0 offset-1">
                                <div
                                    className="row m-auto"
                                    style={{ height: "500px" }}
                                >
                                    <CampaignBox />
                                    <CampaignBox />
                                </div>
                                <div
                                    className="row m-auto"
                                    style={{ height: "500px" }}
                                >
                                    <CampaignBox />
                                    <CampaignBox />
                                </div>
                                <div
                                    className="row m-auto"
                                    style={{ height: "500px" }}
                                >
                                    <CampaignBox />
                                    <CampaignBox />
                                </div>
                                <div className="row m-auto">
                                    <CampaignBox />
                                    <CampaignBox />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Campaign;
