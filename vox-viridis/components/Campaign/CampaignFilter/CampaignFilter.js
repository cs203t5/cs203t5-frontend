import Button from "@mui/material/Button";
import CampaignFilterCheckBox from "./CampaignFilterCheckBox";
import CampaignSortBy from "./CampaignSortBy";

const contents = [
    {
        title: "Rewards",
        filters: ["Points", "Cards"],
    },
    {
        title: "Categories",
        filters: ["Clothing", "Plastic"],
    },
    {
        title: "Location",
        filters: ["North", "South", "East", "West", "Central"],
    },
];

const CampaignFilter = () => {
    return (
        <div
            className="w-100 mt-10 d-none d-lg-block sticky-top p-0"
            style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                borderStyle: "solid",
                borderWidth: "1.8px",
                width: "10%",
                marginLeft: "70px",
                overflow: "hidden",
                alignItems: "flex-start",
                top: "2vh",
                float: "left",
            }}
        >
            <div
                className="row-fluid mt-3"
                style={{
                    fontWeight: "500",
                    fontSize: "1.5em",
                    marginLeft: "1.5vw",
                    marginTop: "5vh",
                }}
            >
                Filter by
            </div>
            <hr style={{ color: "grey" }} />
            <CampaignSortBy />
            <hr style={{ color: "grey" }} />
            <CampaignFilterCheckBox content={contents[0]} />
            <hr style={{ color: "grey" }} />
            <CampaignFilterCheckBox content={contents[1]} />
            <hr style={{ color: "grey" }} />
            <CampaignFilterCheckBox content={contents[2]} style="20px" />
            <div className="mb-100"></div>
        </div>
    );
};

export default CampaignFilter;