import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";

const AboutDetails = () => {
    return (
        <div
            className="container-fluid my-2 pb-5 pt-4"
            style={{
                backgroundColor: "#faf8f4",
                borderRadius: "10px",
            }}
        >
            <div className="row w-100 h-100">
                <div className="col-lg-6 col-12">
                    <img
                        src="../../about image.png"
                        className="img-fluid w-100 h-100"
                    ></img>
                </div>
                <div className="col-lg-6 col-12 my-md-4 my-lg-0">
                    <p
                        style={{
                            fontFamily: "PT Sans",
                            fontSize: "25px",
                            position: "relative;top:140px;"
                        }}
                    >
                        We are a group of SMU CS students embarking on our CS203
                        journey! Through this project, we hope to raise
                        awareness of on-going green campaigns and incentivise
                        everyone to participant. <br></br><br></br>
                        
                        Since it is a work of progress,
                        please be patient with us and we welcome any feedback
                        through the contact us page. Thank you!
                    </p>
                </div>
            </div>
        </div>
    );
};
const About = () => {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
                <AboutDetails />
            </div>
        </div>
    );
};

export default About;
