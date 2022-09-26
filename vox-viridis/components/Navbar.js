import styles from "./Navbar.module.css";
import IconButton from "@mui/material/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className={styles.login} href="/login">
                <AccountCircleRoundedIcon />
                <text className={styles.loginText}>Login</text>
            </div>

            <Link href="/">
                <div className={styles.logoContainer}>
                    <h2 className={styles.topbarText}>
                        <i styles={{ fontSize: "50px" }}>Vox-Viridis</i>
                    </h2>

                    <img
                        className={styles.logoImage}
                        src="../../vox-viridis_icon.png"
                        width="35"
                        height="35"
                    ></img>
                </div>
            </Link>

            <hr />
            <div className={styles.routeContainer}>
                <div className={styles.routeContainerLeft}>
                    <Link href="/campaign">
                        <IconButton
                            className={styles.routeCampaign}
                            sx={{ color: "black" }}
                        >
                            Campaign
                        </IconButton>
                    </Link>
                </div>
                <div className={styles.routeContainerRight}>
                    <Link href="/help">
                        <IconButton
                            className={styles.routeHelp}
                            sx={{ color: "black" }}
                        >
                            Help
                        </IconButton>
                    </Link>
                    <Link href="/contactus">
                        <IconButton
                            className={styles.routeContactUs}
                            sx={{ color: "black" }}
                        >
                            Contact Us
                        </IconButton>
                    </Link>
                    <Link href="/about">
                        <IconButton
                            className={styles.routeAbout}
                            sx={{ color: "black" }}
                        >
                            About
                        </IconButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
