import styles from "./Navbar.module.css";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <div className={styles.login} href="/login">
                <AccountCircleRoundedIcon />
                <text className={styles.loginText}>Login</text>
            </div>
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
            <hr />

            <div className={styles.routeContainerLeft}>
                <Link href="/campaign">
                    <IconButton
                        disableRipple
                        disableFocusRipple
                        className={styles.routeCampaign}
                    >
                        Campaign
                    </IconButton>
                </Link>
            </div>
            <div className={styles.routeContainerRight}>
                <Link href="/help">
                    <IconButton className={styles.routeHelp}>Help</IconButton>
                </Link>
                <Link href="/contactus">
                    <IconButton className={styles.routeContactUs}>
                        Contact Us
                    </IconButton>
                </Link>
                <Link href="/about">
                    <IconButton className={styles.routeAbout}>About</IconButton>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
