import styles from "./Navbar.module.css";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavbarTemplate from "react-bootstrap/Navbar";
import NavBarLogin from "./NavBarLogin";
import NavBarLogout from "./NavBarLogout";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    return (
        <div className="container-fluid p-0">
            {isLoggedIn ? (
                <NavBarLogout setIsLoggedIn={setIsLoggedIn} />
            ) : (
                <NavBarLogin />
            )}

            <div className="row m-auto  ">
                <Link href="/">
                    <div
                        className="col justify-content-center mb-3"
                        style={{
                            fontStyle: "italic",
                            cursor: "pointer",
                        }}
                    >
                        <h2 style={{ textAlign: "center", fontWeight: "bold" }}>
                            <img
                                className="col mb-0"
                                src="../../Vox Icon.jpg"
                                width="210"
                                height="95"
                                style={{ marginLeft: "5px" }}
                            />
                        </h2>
                        {/* <img
                            src="../../Vox Icon.jpg"
                            width="190"
                            height="85"
                            className="center"
                            style={{ cursor: "pointer"}}
                        /> */}
                    </div>
                </Link>
            </div>
            {/* <div className="row border-bottom border-dark text-white m-auto ">
                dsad{" "}
            </div> */}
            <hr style={{ color: "grey", margin: "0", marginBottom: "10px" }} />

            <div className={styles.routeContainer}>
                <NavbarTemplate expand="lg">
                    <NavbarTemplate.Toggle
                        aria-controls="basic-navbar-nav"
                        style={{ marginLeft: "5vw" }}
                    />
                    <NavbarTemplate.Collapse className="basic-navbar-nav gap-2">
                        <Nav
                            className="me-lg-auto ms-lg-5 gap-lg-4"
                            // style={{ marginLeft: "8vw" }}
                        >
                            <Link href="/campaign">
                                <IconButton
                                    sx={{
                                        color: "black",
                                    }}
                                >
                                    Campaign
                                </IconButton>
                            </Link>

                            {isLoggedIn && (
                                <Link href="/rewards">
                                    <IconButton
                                        sx={{
                                            color: "black",
                                        }}
                                    >
                                        Rewards
                                    </IconButton>
                                </Link>
                            )}
                            {isLoggedIn && (
                                <Link href="/history">
                                    <IconButton
                                        sx={{
                                            color: "black",
                                        }}
                                    >
                                        History
                                    </IconButton>
                                </Link>
                            )}
                        </Nav>

                        <Nav
                            className="me-lg-5 gap-lg-3"
                            // style={{ marginRight: "8vw" }}
                        >
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
