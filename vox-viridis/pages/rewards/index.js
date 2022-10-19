import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import Card from "react-bootstrap/Card";
import styles from "./rewards.module.css";
import { useRef } from "react";
import { Overlay } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, A11y } from "swiper";
import { useSwiper } from "swiper/react";
import { useState } from "react";

function index() {
    const swiper = useSwiper();

    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
                <div className="row mt-5 mx-4" style={{ overflow: "hidden" }}>
                    <div className="row mb-2 ">
                        <h4 className="font-weight-bold">Rewards</h4>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        cssMode={true}
                        spaceBetween={50}
                        slidesPerView={3}
                        navigation={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log("slide change")}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <button onClick={() => swiper.slideNext()}>
                            Slide to the next slide
                        </button>

                        <SwiperSlide>
                            <RewardCard />
                        </SwiperSlide>

                        <SwiperSlide>
                            <RewardCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RewardCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RewardCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RewardCard />
                        </SwiperSlide>
                        <SwiperSlide>
                            <RewardCard />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

function RewardCard() {
    const [opacity, setOpacity] = useState(0);
    const [imageOpacity, setImageOpacity] = useState(1);
    const showOverlay = (show) => {
        if (show) {
            setOpacity(1);
            setImageOpacity(0.3);
        } else {
            setOpacity(0);
            setImageOpacity(1);
        }
    };
    return (
        <div className="col">
            <Card
                onMouseOver={() => showOverlay(true)}
                onMouseOut={() => {
                    showOverlay(false);
                }}
            >
                <Card.Img
                    variant="top"
                    src="../../shaoDong.jpeg"
                    style={{ objectFit: "cover", opacity: imageOpacity }}
                />
                <Card.ImgOverlay
                    className="d-flex align-items-end"
                    style={{ opacity: opacity }}
                >
                    <Card.Body className="p-0 w-100">
                        <Card.Title
                            style={{
                                fontSize: "30px",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                        >
                            Card title
                        </Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default index;
//
