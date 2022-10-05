import globalStyle from "../Global.module.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import NavBarLogin from "../../components/NavBarLogin";

const Navbar2 = () => {
    return (
        <div class="container-fluid border text-center ">
            <div class="row">
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-2 "></div>
                <Link href="/">
                    <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 ">
                        <img src="../../vox Icon.jpg" width="190" height="85" style ={{cursor:"pointer"}} />
                    </div>
                </Link>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 ">
                    <NavBarLogin />
                </div>
            </div>
        </div>
    );
};

// const Navbar2 = () => {
//     return (
//         <nav class="navbar" style = {{backgroundColor:"#e3f2fd"}}>
//             <div class="container-fluid">
//                 <a class="navbar-brand" href="#">Vox Viridis</a>
//             </div>

//         </nav>

//     );
// };

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
