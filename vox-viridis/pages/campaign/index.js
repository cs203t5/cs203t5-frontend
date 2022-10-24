import { Button, IconButton, Input } from "@mui/material";
import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import styles from "./campaign.module.css";
import SearchIcon from "@mui/icons-material/Search";
import CampaignFilter from "../../components/Campaign/CampaignFilter/CampaignFilter";
import Footer from "../../components/Footer.js";
import CampaignBoxSticky from "../../components/Campaign/CampaignBoxSticky";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Campaign = () => {
    const [data, setdata] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/campaign")
            .then((response) => {
                console.log(response);
                const everything = response.data;
                const campaigns = [];
                for (let i = 0; i < everything.length; i += 2) {
                    const campaign1 = everything[i];
                    const campaign2 = everything[i + 1];
                    const allCamppaign = [];
                    allCamppaign.push(campaign1);
                    allCamppaign.push(campaign2);
                    campaigns.push(allCamppaign);
                }
                setdata(campaigns);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                    {/* <CampaignFilterSmall /> */}
                    <div className="row mt-5">
                        <div className="col-lg-2">
                            <CampaignFilter />
                        </div>
                        <div className="col-lg-10">
                            {data &&
                                data.map((element, index) => {
                                    return (
                                        <CampaignBoxSticky
                                            campaignData={element}
                                            key={index}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Campaign;
