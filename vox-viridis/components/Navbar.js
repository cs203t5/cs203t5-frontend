import styles from "./Navbar.module.css";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
    return (
        <div className={styles.topbar}>
            <div className={styles.login}>
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
            <div className={styles.routeContainer}>
                <div className={styles.routeContainerLeft}>
                    <IconButton
                        disableRipple
                        disableFocusRipple
                        className={styles.routeCampaign}
                    >
                        Campaign
                    </IconButton>
                </div>
                <div className={styles.routeContainerRight}>
                    <IconButton className={styles.routeHelp}>Help</IconButton>
                    <IconButton className={styles.routeContactUs}>
                        Contact Us
                    </IconButton>
                    <IconButton className={styles.routeAbout}>About</IconButton>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
