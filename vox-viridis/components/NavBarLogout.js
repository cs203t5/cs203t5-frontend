import LogoutIcon from "@mui/icons-material/Logout";
import Router from "next/router";
import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import instance from "../services/AxiosInstance";
import { useLoginContext } from "../context/loginContext";

function NavBarLogout(props) {
    const [name, setName] = useState("");
    const { sharedState, setSharedState } = useLoginContext();
    const handleLogout = (e) => {
        setSharedState({ ...sharedState, token: "" });
    };
    console.log(localStorage.getItem("token"));
    useEffect(() => {
        instance
            .get("/users/name", {
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
                <div
                    className="col-auto p-0 float-end mt-2 me-3
             "
                    style={{}}
                >
                    <AccountCircleIcon style={{ fontSize: "xx-large" }} />
                    {name}
                </div>
            </div>
        </div>
    );
}

export default NavBarLogout;
