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
                        className="w-auto h-100 px-md-5 px-xs-4 px-s-3"
                        variant="contained"
                        href="/"
                        size="large"
                        style={{
                            backgroundColor: "#7d7565",
                            justifyContent: "center",
                            color: "white",
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
