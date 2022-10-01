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
                    </div>{" "}
                    <CampaignFilter />
                    <div
                        className="col-4 p-0 offset-2 border border-primary"
                        style={{ display: "flex", height: "500px" }}
                    >
                        Enter
                    </div>
                    <div className="row mx-auto p-0 ml-2">
                        <div
                            className="col-4 p-0 offset-2 border border-primary"
                            style={{ display: "flex", height: "500px" }}
                        >
                            Enter
                        </div>
                        <div
                            className="col-4 p-0 offset-1 border border-primary"
                            style={{ display: "flex" }}
                        >
                            Enter
                        </div>
                        
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Campaign;
