import styles from "./HomepageRight.module.css";
const HomepageRewards = () => {
    return (
        <div className={styles.homepageRightContainer}>
            <div className={styles.homepageRightTextContainer}>
                <div className={styles.homepageRightHeader}>Rewards </div>
                <div className={styles.homepageRightText}>
                    Be rewarded when you recycle with us today! Accumulate
                    points and claim exciting gifts and rewards with Vox Viridis
                    today!{" "}
                </div>
            </div>
            <div className={styles.homepageRightImg}>
                <img src="../../home/rewards.svg" />
            </div>
        </div>
    );
};

export default HomepageRewards;
