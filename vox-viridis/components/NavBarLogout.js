import LogoutIcon from "@mui/icons-material/Logout";
import axios from "axios";
import Router from "next/router";
import { useEffect } from "react";

function NavBarLogout(props) {
    const handleLogout = (e) => {
        localStorage.removeItem("token");
        props.setIsLoggedIn(false);
        Router.reload(window.location.pathname);
    };
    useEffect(() => {
        axios
            .get(
                "http://localhost:8080/api/users/name",
                {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            "token"
                        )}`,
                    },
                }
            )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div
            className="row p-0 m-auto "
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
        >
            <div className="col">
                <div
                    className="col-auto p-0 float-end mt-2 me-2
             "
                    style={{}}
                >
                    <LogoutIcon style={{ fontSize: "xx-large" }} />
                    Logout
                </div>
            </div>
        </div>
    );
}

export default NavBarLogout;
