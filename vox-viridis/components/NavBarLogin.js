import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import axios from "axios";
import { useState } from "react";

function NavBarLogin() {
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
    });

    const sendLogin = (e) => {
        e.preventDefault();

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
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get("http://localhost:8080/api/users/name", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
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
                                <label htmlFor="exampleDropdownFormPassword1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setInputValues({
                                            ...inputValues,
                                            password: e.target.value,
                                        })
                                    }
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
                                onClick={(e) => sendLogin(e)}
                                style={{
                                    marginTop: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                Sign in
                            </button>
                        </form>
                        <div
                            className="dropdown-item-text "
                            style={{ fontWeight: "bold", fontWeight: "500" }}
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
