import styles from "./unauthorised.module.css";
import { Button, Box } from "@mui/material";
const Unauthorised = () => {
    return (
        <div
            styles={{
                backgroundColor: "#faf8f4",
                color: "white",
                height: "100vh",
                width: "100vw",
                display: "flex",
            }}
        >
            <div
                className="mt-5"
                style={{
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100vw",
                    fontSize: "3em",
                    fontStyle: "oblique",
                }}
            >
                <img
                    src="../401.svg"
                    style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        justifyContent: "center",
                        width: "50%",
                    }}
                />
                <div
                    className={styles.notFoundText}
                    style={{
                        textAlign: "center",
                        justifyContent: "center",
                        marginTop: "8vh",
                    }}
                >
                    You are currently performing an unauthorised operation.
                    Please Login
                </div>
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

export default Unauthorised;
