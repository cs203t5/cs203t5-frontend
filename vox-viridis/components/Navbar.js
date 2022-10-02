import styles from "./Navbar.module.css";
import IconButton from "@mui/material/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavbarTemplate from "react-bootstrap/Navbar";

const Navbar = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row m-auto">
                <div className="col ms-auto p-0">
                    <Link href="/login">
                        <div
                            className="col float-end me-3 mt-1"
                            style={{ cursor: "pointer" }}
                        >
                            <AccountCircleRoundedIcon
                                style={{ fontSize: "xx-large" }}
                            />

                            <span
                                className="span-1"
                                style={{ alignSelf: "center" }}
                            >
                                Login
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="row m-auto  ">
                <Link href="/">
                    <div
                        className="col-lg-auto col-md-auto col-xs-auto justify-content-center m-auto"
                        style={{
                            fontSize: "xxx-large",
                            fontStyle: "italic",
                            cursor: "pointer",
                        }}
                    >
                        Vox-Viridis
                        <img
                            className="col"
                            src="../../vox-viridis_icon.png"
                            width="35"
                            height="35"
                            style={{ marginLeft: "5px" }}
                        />
                    </div>
                </Link>
            </div>

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
