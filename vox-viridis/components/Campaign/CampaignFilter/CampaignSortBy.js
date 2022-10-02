import { Button } from "@mui/material";
import styles from "./CampaignSortBy.module.css";

const buttons = ["Newest", "Oldest"];

const CampaignSortBy = () => {
    return (
        <div className="row-fluid" style={{ fontWeight: "bold" }}>
            <div
                className="row-fluid mb-2 p-0"
                style={{
                    fontSize: "1.3em",
                    fontWeight: "500",
                    marginLeft: "1.5vw",
                }}
            >
                Sort By
            </div>
            <div className="container-fluid p-0" style={{ width: "inherit" }}>
                <div className="row gap-2" style={{ margin: "auto" }}>
                    {buttons.map((button) => (
                        <div
                            className="col p-0 justify-content-center"
                            style={{ display: "flex" }}
                            key={button}
                        >
                            <button
                                type="button "
                                className="btn btn-primary btn-xs"
                                style={{
                                    backgroundColor: "blanchedalmond",
                                    color: "black",
                                    border: "0",
                                    margin: "auto",
                                    // width: "70px",
                                }}
                            >
                                {button}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CampaignSortBy;
