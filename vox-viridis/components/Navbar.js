import styles from "./Navbar.module.css";
import IconButton from "@mui/material/IconButton";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavbarTemplate from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
    return (
        <div className="container-fluid p-0">
            <div className="row m-auto">
                <div className="col ms-auto p-0">
                    <Dropdown>
                        <Dropdown.Toggle className="col float-end me-3 mt-1 dropdown">
                            <AccountCircleRoundedIcon
                                style={{ fontSize: "xx-large" }}
                            />

                            <span
                                className="span-1"
                                style={{ alignSelf: "center" }}
                            >
                                Login
                            </span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <form className="px-4 py-1">
                                <div className="form-group">
                                    <label htmlFor="exampleDropdownFormEmail1">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        // id="exampleDropdownFormEmail1"
                                        placeholder="email@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleDropdownFormPassword1">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        // id="exampleDropdownFormPassword1"
                                        placeholder="Password"
                                    />
                                </div>
                                <div className="form-check mt-1">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        // id="dropdownCheck"
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor="dropdownCheck"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ marginTop: "5px" }}
                                >
                                    Sign in
                                </button>
                            </form>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/register">
                                New around here? Sign up
                            </a>
                            <a className="dropdown-item" href="/forgetpassword">
                                Forgot password?
                            </a>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="row m-auto  ">
                <Link href="/">
                    <div
                        className="col-lg-auto col-md-auto col-xs-auto justify-content-center m-auto"
                        style={{
                            fontStyle: "italic",
                            cursor: "pointer",
                        }}
                    >
                        <h3>
                            Vox-Viridis
                            <img
                                className="col mb-2"
                                src="../../vox-viridis_icon.png"
                                width="35"
                                height="35"
                                style={{ marginLeft: "5px" }}
                            />
                        </h3>
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
