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
            className="row"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
        >
            <div className="col-1 ms-auto p-0 mt-2 me-2" style={{}}>
                <LogoutIcon />
                Logout
            </div>
        </div>
    );
}

export default NavBarLogout;
