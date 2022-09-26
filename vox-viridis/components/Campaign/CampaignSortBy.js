import { Button } from "@mui/material";
import styles from "./CampaignSortBy.module.css";

const CampaignSortBy = () => {
    return (
        <div style={{ fontWeight: "bold" }}>
            <div className={styles.sortBy}>Sort By</div>
            <div className={styles.sortButton}>
                <Button
                    variant="contained"
                    className={styles.sortNewest}
                    size="small"
                    style={{
                        color: "black",
                        textTransform: "none",
                        height: "3vh",
                        backgroundColor: "blanchedalmond",
                        borderRadius: "5px",
                        fontFamily: "Italiana ",
                        width: "0.5vw",
                    }}
                    disableRipple
                    >
                    Newest
                </Button>
                <Button
                    variant="contained"
                    className={styles.sortOldest}
                    size="small"
                    style={{
                        color: "black",
                        borderRadius: "5px",
                        textTransform: "none",
                        height: "3vh",
                        backgroundColor: "blanchedalmond",
                        fontFamily: "Italiana ",
                        width: "0.5vw",
                    }}
                    disableRipple
                >
                    Oldest
                </Button>
            </div>
        </div>
    );
};

export default CampaignSortBy;
