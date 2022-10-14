import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";

const HelpPageDetails= () => {
    return (
        <div className="container-fluid">
            <div className="row" style={{ height: "100vh" }}>
                <div className="col-5 px-2 py-5">
                    <img
                        src="../../Help page image.png"
                        width="330"
                        height="225"
                    />
                </div>
                <div className="col-7 px-2 py-2 text-center">
                    <p style={{fontFamily:"PT Sans"}}>FAQ</p>
                    
                </div>
            </div>
        </div>
    );
};
const index = () => {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
                <HelpPageDetails/>
            </div>
        </div>
    );
};


export default index;
