import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import axios from "axios";
import { useState } from "react";
import Router from "next/router";
import { Button, Form } from "react-bootstrap";

function NavBarLogin(props) {
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
    });

    const sendLogin = (e) => {
        e.preventDefault();
        if (!inputValues.password) {
            e.preventPropagation;
        }
        axios
            .post(
                "http://localhost:8080/api/users/token",
                {},
                {
                    auth: {
                        username: inputValues.username,
                        password: inputValues.password,
                    },
                }
            )
            .then(function (response) {
                localStorage.setItem("token", response.data);
                Router.reload(window.location.pathname);
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <div className="row m-auto">
            <div className="col ms-auto p-0 ">
                <Dropdown align="end" drop="down">
                    <Dropdown.Toggle
                        className="col float-end me-1 mt-1 dropdown"
                        style={{ backgroundColor: "inherit", border: "0" }}
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
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <form className="px-4 py-1">
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="username"
                                    className="form-control"
                                    placeholder="Username"
                                    onChange={(e) =>
                                        setInputValues({
                                            ...inputValues,
                                            username: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group mt-1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={(e) =>
                                        setInputValues({
                                            ...inputValues,
                                            password: e.target.value,
                                        })
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid city.
                                </Form.Control.Feedback>
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
                            <Button
                                type="submit"
                                className="btn btn-primary"
                                onClick={(e) => sendLogin(e)}
                                style={{
                                    marginTop: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                Sign in
                            </Button>
                        </form>
                        <div
                            className="dropdown-item-text "
                            style={{
                                fontWeight: "bold",
                                fontWeight: "500",
                                textAlign: "center",
                            }}
                        >
                            New around here?{" "}
                            <a href="/register" style={{ color: "black" }}>
                                Sign up
                            </a>
                        </div>
                        <div className="row m-auto">
                            <div
                                className="dropdown-item-text"
                                style={{
                                    fontWeight: "bold",
                                    fontWeight: "500",
                                    textAlign: "center",
                                }}
                            >
                                <a href="/register" style={{ color: "black" }}>
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item-text" style={{}}>
                            <div className="row">
                                {/* <img
                                    clasName=" img-fluid rounded mx-auto d-md-block d-none"
                                    src="../../singpass.svg"
                                /> */}
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default NavBarLogin;
