import { useEffect } from "react";
import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
const Campaign = () => {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
            </div>
        </div>
    );
};

export default Campaign;
