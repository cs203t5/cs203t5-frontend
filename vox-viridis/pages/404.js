import styles from "./404.module.css";
const NotFound = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.internalContainer}>
                <text className={styles.notFoundText}>Not Found</text>
            </div>
        </div>
    );
};

export default NotFound;
