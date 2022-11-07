import Navbar from "../../../components/Navbar";
import globalStyle from "../../Global.module.css";
import Footer from "../../../components/Footer.js";
import ProductCard from "../../../components/AllProducts/ProductCard";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLoginContext } from "../../../context/loginContext";
import Instance from "../../../services/axiosInstance";

function Index() {
    const router = useRouter();
    const { sharedState, setSharedState } = useLoginContext();
    const [data, setData] = useState([]);
    const [points, setPoints] = useState(0);

    useEffect(() => {
        Instance.get("/products")
            .then((response) => {
                setData(response.data);
            })
            .catch((e) => {
                console.log(e);
            });

        Instance.get("/participation/myPoints", {
            headers: { Authorization: `Bearer ${sharedState.token}` },
        })
            .then((response) => {
                console.log(response);
                setPoints(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <div
                className={globalStyle.pageBg}
                style={{ paddingBottom: "5vh" }}
            >
                <Navbar />
                <div className="container-fluid mt-5 g-5 ">
                    <div
                        className="my-4"
                        style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "3em",
                        }}
                    >
                        Products
                    </div>
                    <div
                        className="my-4 ms-2"
                        style={{
                            fontWeight: "bold",
                            fontSize: "1.5em",
                        }}
                    >
                        You currently have {points} points
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        {data &&
                            data.length !== undefined &&
                            data.map((element, index) => {
                                return (
                                    <ProductCard data={element} key={index} />
                                );
                            })}
                    </Row>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Index;
