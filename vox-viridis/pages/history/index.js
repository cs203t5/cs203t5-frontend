import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function index() {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
                
            </div>
        </div>
    );
}

export default index;
