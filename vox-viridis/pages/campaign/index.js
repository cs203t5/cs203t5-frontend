import { Button, IconButton, Input } from "@mui/material";
import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import styles from "./campaign.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CampaignFilter from "../../components/Campaign/CampaignFilter";

const Campaign = () => {
    return (
        <div>
            <div className={globalStyle.pageBg} style={{ display: "block" }}>
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
                <div className={styles.campaignContainer}>
                    <CampaignFilter />
                    <div className={styles.campaignLeft}>saearaes</div>
                    <div className={styles.campaignRight}>saearaes</div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
