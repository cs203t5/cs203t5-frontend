import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import { useState } from "react";
import Router from "next/router";
import { Alert, Button, Form } from "react-bootstrap";
import instance from "../services/AxiosInstance";

function NavBarLogin(props) {
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
    });
    const [validated, setValidated] = useState(false);
    const [wrongLogin, setWrongLogin] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            sendLogin(event);
        }

        setValidated(true);
    };

    const sendLogin = (e) => {
        e.preventDefault();

        instance
            .post(
                "/users/token",
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
                console.log(error.response.status);
                if (error.response.status === 401) {
                    setValidated(false);
                    setWrongLogin(true);
                }
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
                            style={{
                                fontSize: "xx-large",
                                fill: "#949494",
                                height: "30px",
                                position: "relative;top:6px",
                            }}
                        />

                        <span
                            className="span-1"
                            style={{
                                alignSelf: "center",
                                color: "#949494",
                                position: "relative;top:7px;left:1px",
                                fontSize: "19px",
                                fontFamily: "Nanum Gothic",
                            }}
                        >
                            Login
                        </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Form
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                            className="px-4 py-1 needs-validation"
                        >
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    type="username"
                                    required
                                    className="form-control"
                                    placeholder="Username"
                                    onChange={(e) =>
                                        setInputValues({
                                            ...inputValues,
                                            username: e.target.value,
                                        })
                                    }
                                />
                                <div class="invalid-feedback">
                                    Please provide a username
                                </div>
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
                                <div class="invalid-feedback">
                                    Please provide a password
                                </div>
                            </div>
                            <div className="form-check mt-1 ">
                                <label
                                    className="form-label"
                                    // htmlFor="dropdownCheck"
                                >
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        validated="false"
                                    />
                                    Remember me
                                </label>
                            </div>

                            {wrongLogin && (
                                <div class="" style={{ color: "red" }}>
                                    Wrong user credentials!
                                </div>
                            )}

                            <Button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    marginTop: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                Sign in
                            </Button>
                        </Form>
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
                                <a style={{ color: "black" }}>
                                    Forgot Password?
                                </a>
                            </div>
                        </div>

                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item-text" style={{}}>
                            <div className="row">
                                <img
                                    clasName=" img-fluid rounded mx-auto d-md-block d-none"
                                    src="../../singpass.svg"
                                />
                            </div>
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default NavBarLogin;
