import styles from "./404.module.css";
import { Button, Box } from "@mui/material";
const NotFound = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.internalContainer}>
                <img className={styles.img} src="../404.svg" />
                <div className={styles.notFoundText}>Error! Page Not Found</div>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "5vh",
                    }}
                >
                    <Button
                        variant="contained"
                        href="/"
                        size="large"
                        style={{
                            backgroundColor: "#7d7565",
                            justifyContent: "center",
                            width: "30vw",
                            height: "5vh",
                        }}
                    >
                        Return to Home
                    </Button>
                </Box>
            </div>
        </div>
    );
};

export default NotFound;
