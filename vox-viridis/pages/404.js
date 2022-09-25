import styles from "./404.module.css";
const NotFound = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.internalContainer}>
                <img className={styles.img} src="../404.svg" />
                <div className={styles.notFoundText}>Error! Page Not Found</div>
            </div>
        </div>
    );
};

export default NotFound;
