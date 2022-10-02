import styles from "./Navbar.module.css";
import IconButton from "@mui/material/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavbarTemplate from "react-bootstrap/Navbar";

const Navbar = () => {
    return (
        <div className="container-fluid p-0">
            <div
                className="d-flex flex-row-reverse p-2"
                style={{ cursor: "pointer" }}
            >
                <Link href="/login">
                    <div>
                        <AccountCircleRoundedIcon />
                        <text className={styles.loginText}>Login</text>
                    </div>
                </Link>
            </div>

            <Link href="/">
                <div className={styles.logoContainer}>
                    <div
                        style={{
                            fontSize: "xxx-large!important",
                            fontStyle: "italic",
                        }}
                    >
                        Vox-Viridis
                    </div>

                    <img
                        className="row"
                        src="../../vox-viridis_icon.png"
                        width="35"
                        height="35"
                        style={{ marginLeft: "5px" }}
                    ></img>
                </div>
            </Link>

            <hr style={{ color: "grey" }} />
            <div className={styles.routeContainer}>
                <NavbarTemplate expand="lg">
                    <NavbarTemplate.Toggle
                        aria-controls="basic-navbar-nav"
                        style={{ marginLeft: "5vw" }}
                    />
                    <NavbarTemplate.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: "8vw" }}>
                            <Link href="/campaign">
                                <IconButton
                                    sx={{
                                        color: "black",
                                    }}
                                >
                                    Campaign
                                </IconButton>
                            </Link>
                        </Nav>

                        <Nav className="" style={{ marginRight: "8vw" }}>
                            <Link href="/help">
                                <IconButton sx={{ color: "black" }}>
                                    Help
                                </IconButton>
                            </Link>
                            <Link href="/contactus">
                                <IconButton sx={{ color: "black" }}>
                                    Contact Us
                                </IconButton>
                            </Link>
                            <Link href="/about">
                                <IconButton sx={{ color: "black" }}>
                                    About
                                </IconButton>
                            </Link>
                        </Nav>
                    </NavbarTemplate.Collapse>
                </NavbarTemplate>
            </div>
        </div>
    );
};

export default Navbar;
