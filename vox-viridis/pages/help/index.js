import globalStyle from "../Global.module.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import NavBarLogin from "../../components/NavBarLogin";

const Header = () => {
    return (
        <div class="container-fluid border text-center">
            <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-2 "></div>
                <Link href="/">
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
                        <img
                            src="../../vox Icon.jpg"
                            width="190"
                            height="85"
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                </Link>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
                    <NavBarLogin />
                </div>
            </div>
        </div>
    );
};

const Navbar2 = () => {
    return (
        <nav
            class="navbar sticky-top pt-0"
            style={{ backGroundColor: "#FAF8F4;" }}
        >
            <div class="container-fluid px-0">
                <Header></Header>
                <p class="font-Handlee">Campaign</p>
            </div>
        </nav>
    );
};

// const Navbar2 = () => {
//     return (
//         <nav class="navbar" style={{ backgroundColor: "#EEEEEE" }}>
//             <div class="container-fluid">

//                 <a class="navbar-brand - 4" href="#">
//                     <p class = "font-Handlee">Campaign</p>
//                 </a>
//                 <a class="navbar-brand - 4" href="#">
//                     <p class = "font-Handlee">Help</p>
//                 </a>
//                 <a class="navbar-brand -4" href="#">
//                     <p class = "font-Handlee">Contact us</p>
//                 </a>

//             </div>
//         </nav>
//     );
// };
const index = () => {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                {/* <Header /> */}
                <Navbar2 />
                <div class="row" style={{ height: "200vh" }}></div>
            </div>
        </div>
    );
};

export default index;
