import { Button, IconButton, Input } from "@mui/material";
import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import styles from "./campaign.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CampaignFilter from "../../components/Campaign/CampaignFilter";
import Footer from "../../components/Footer.js";
import CampaignBoxSticky from "../../components/Campaign/CampaignBoxSticky";

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
                    </div>{" "}
                    <div className="row">
                        <div className="col-lg-2">
                            <CampaignFilter />
                        </div>
                        <div className="col-lg-10">
                            <CampaignBoxSticky />
                            <CampaignBoxSticky />
                            <CampaignBoxSticky />
                            <CampaignBoxSticky />
                            <CampaignBoxSticky />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Campaign;
