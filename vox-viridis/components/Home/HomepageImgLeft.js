import styles from "./HomepageImgLeft.module.css";
const HomepageImgLeft = (props) => {
    return (
        <div className={styles.homepageLeftContainer}>
            <div className={styles.homepageLeftImg}>
                <img src={props.content.src} />
            </div>
            <div className={styles.homepageLeftTextContainer}>
                <div className={styles.homepageLeftHeader}>
                    {props.content.header}
                </div>
                <div className={styles.homepageLeftText}>
                    {" "}
                    {props.content.text}
                </div>
            </div>
        </div>
    );
};

export default HomepageImgLeft;
