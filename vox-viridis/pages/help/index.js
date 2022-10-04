import globalStyle from "../Global.module.css";
import Navbar from "../../components/Navbar";
import NavBarLogin from "../../components/NavBarLogin";

const Navbar2 = () => {
    return (
        <div class="container-fluid border text-center">
            <div class="row">
                <div class="col-4"></div>
                <div class="col-4">
                    <img src="../../vox Icon.jpg" width="190" height="85" />
                </div>
                <div class="col-4">
                    <NavBarLogin />
                </div>
            </div>

        </div>
        
    );
};

const index = () => {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar2 />
            </div>
        </div>
    );
};

export default index;
