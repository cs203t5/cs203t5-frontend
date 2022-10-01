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
                    <div className="container-fluid g-0 mt-5 ">
                        <div className="row m-auto">
                            <CampaignFilter />

                            <div className="col-4 p-0 ">saearaes</div>

                            <div className="col-4 p-0 ">saearaes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
