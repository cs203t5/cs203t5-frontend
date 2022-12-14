import LogoutIcon from "@mui/icons-material/Logout";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Instance from "../services/axiosInstance";
import { useLoginContext } from "../context/loginContext";
import { Dropdown } from "react-bootstrap";
import AccountCircleRounded from "@mui/icons-material/AccountCircleRounded";

function NavBarLogout(props) {
    const router = useRouter();
    const [name, setName] = useState("");
    const { sharedState, setSharedState } = useLoginContext();

    const handleLogout = (e) => {
        setSharedState({ ...sharedState, token: "" });
        localStorage.setItem("token", "");
    };

    useEffect(() => {
        Instance.get("/users/name", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => {
                setName(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        Instance.get("/users/role", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((response) => {
                setSharedState({
                    ...sharedState,
                    role: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="row p-0 m-auto " style={{ cursor: "pointer" }}>
            <div className="col">
                <div
                    className="col-auto p-0 float-end mt-2 me-2

             "
                    onClick={handleLogout}
                    style={{}}
                >
                    <LogoutIcon style={{ fontSize: "xx-large" }} />
                    Logout
                </div>
                {sharedState.role === "BUSINESS" ? (
                    <div
                        className="col-auto p-0 float-end mt-2 me-3
             "
                        style={{}}
                    >
                        <Dropdown align="end" drop="down">
                            <Dropdown.Toggle
                                className="col float-end p-0 dropdown"
                                style={{
                                    backgroundColor: "inherit",
                                    border: "0",
                                    color: "black",
                                }}
                            >
                                <AccountCircleIcon
                                    style={{ fontSize: "xx-large" }}
                                />
                                {name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <a
                                    className="dropdown-item"
                                    onClick={(e) =>
                                        router.push("/campaign/createcampaign")
                                    }
                                >
                                    Create Campaign
                                </a>
                                <a
                                    className="dropdown-item"
                                    onClick={(e) =>
                                        router.push("/campaign/modifycampaign")
                                    }
                                >
                                    Modify Campaign
                                </a>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ) : sharedState.role === "ADMIN" ? (
                    <div
                        className="col-auto p-0 float-end mt-2 me-3
             "
                        style={{}}
                    >
                        <Dropdown align="end" drop="down">
                            <Dropdown.Toggle
                                className="col float-end p-0 dropdown"
                                style={{
                                    backgroundColor: "inherit",
                                    border: "0",
                                    color: "black",
                                }}
                            >
                                <AccountCircleIcon
                                    style={{ fontSize: "xx-large" }}
                                />
                                {name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <a
                                    className="dropdown-item"
                                    onClick={(e) => router.push("/role")}
                                >
                                    Modify User Role
                                </a>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                ) : (
                    <div
                        className="col-auto p-0 float-end mt-2 me-3
     "
                        style={{}}
                    >
                        <AccountCircleIcon style={{ fontSize: "xx-large" }} />
                        {name}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBarLogout;
