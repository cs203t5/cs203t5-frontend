import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
const index = () => {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
            </div>
        </div>
    );
};

export default index;
