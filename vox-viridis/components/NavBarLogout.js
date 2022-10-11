import LogoutIcon from "@mui/icons-material/Logout";
import Router from "next/router";

function NavBarLogout(props) {
    const handleLogout = (e) => {
        localStorage.removeItem("token");
        props.setIsLoggedIn(false);
        Router.push("/");
    };
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
