import Navbar from "../../components/Navbar";
import ProductsSwiper from "../../components/Products/ProductsSwiper";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLoginContext } from "../../context/loginContext";
import Instance from "../../services/axiosInstance";

const Marketplace = () => {
    const [data, setData] = useState();
    const { sharedState, setSharedState } = useLoginContext();
    const [points, setPoints] = useState(0);

    useEffect(() => {
        Instance.get("/products", {
            headers: {
                Authorization: `Bearer ${sharedState.token}`,
            },
        })
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            });

        Instance.get(`/participation/myPoints`, {
            headers: { Authorization: `Bearer ${sharedState.token}` },
        })
            .then((response) => {
                setPoints(response.data);
            })
            .catch((e) => {
                console.log("hello");
                console.log(e);
            });
    }, []);

    return (
        <div>
            <div
                className={globalStyle.pageBg}
                style={{ paddingBottom: "5vh" }}
            >
                <Navbar />
                <div className="d-flex align-items-center justify-content-center">
                    <div style={{ paddingLeft: "40px", paddingRight: "40px" }}>
                        <h2 style={{ textAlign: "center" }}>{points} points</h2>
                        <p
                            style={{
                                fontSize: "28px",
                            }}
                        >
                            Welcome to the Marketplace! We are really thankful
                            for your participations and hope you get rewarded
                            for your efforts.
                        </p>
                    </div>
                    <img
                        alt="marketplace"
                        src="../../marketplace/marketplace.svg"
                        className="img-fluid w-100"
                    ></img>
                </div>

                <ProductsSwiper header={{ title: "Products" }} data={data} />
            </div>
            <Footer />
        </div>
    );
};

export default Marketplace;
