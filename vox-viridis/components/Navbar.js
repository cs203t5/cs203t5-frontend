import styles from "./Navbar.module.css";
import IconButton from "@mui/material/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarTemplate from "react-bootstrap/Navbar";

const Navbar = () => {
    return (
        <div className="container-fluid">
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
                    <div style={{ fontSize: "2em" }}>
                        <i>Vox-Viridis</i>
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

            <hr />
            <div className={styles.routeContainer}>
                <NavbarTemplate expand="lg">
                    <Container>
                        <NavbarTemplate.Toggle aria-controls="basic-navbar-nav" />
                        <NavbarTemplate.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link href="/campaign">
                                    <IconButton
                                        className={styles.routeCampaign}
                                        sx={{
                                            color: "black",
                                        }}
                                    >
                                        Campaign
                                    </IconButton>
                                </Link>
                            </Nav>
                            <Nav className="ml-auto">
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
                            </Nav>
                        </NavbarTemplate.Collapse>
                    </Container>
                </NavbarTemplate>
            </div>
        </div>
    );
};

export default Navbar;
