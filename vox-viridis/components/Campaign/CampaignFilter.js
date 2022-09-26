import Button from "@mui/material/Button";
import styles from "./CampaignFilter.module.css";
import CampaignRewards from "./CampaignRewards";
import CampaignSortBy from "./CampaignSortBy";

const CampaignFilter = () => {
    return (
        <div className={styles.filterContainer}>
            <div>
                <div className={styles.filterBy}>Filter by</div>
                <hr className={styles.line}></hr>
                <CampaignSortBy />
                <hr className={styles.line}></hr>
                <CampaignRewards />
            </div>
        </div>
    );
};

export default CampaignFilter;
