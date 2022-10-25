import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Modal } from "react-bootstrap";
import Router, { useRouter } from "next/router";

function RewardsSwiper(props) {
    const router = useRouter();
    const showViewAll = () => {
        if (props.data.title === "Rewards") {
            router.push("/rewards/allRewards");
            return;
        } else if (props.data.title === "Shops") {
            router.push("/rewards/allShops");
        }
    };
    return (
        <div className="row mt-5 mx-4" style={{ overflow: "hidden" }}>
            <div className="row mb-2 pe-0">
                <div className="col d-flex pe-0">
                    <div
                        className="me-auto"
                        style={{ fontWeight: "bold", fontSize: "1.5em" }}
                    >
                        {props.data.title}
                    </div>
                    <Button
                        variant="outline-dark ml-auto"
                        onClick={showViewAll}
                    >
                        View All
                    </Button>{" "}
                </div>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                cssMode={true}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <SwiperCard />
                </SwiperSlide>

                <SwiperSlide>
                    <SwiperCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperCard />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
function SwiperCard() {
    const [opacity, setOpacity] = useState({
        imageOpacity: 1,
        textOpacity: 0,
    });
    const [show, setShow] = useState(false);

    const showOverlay = (show) => {
        if (show) {
            setOpacity({
                imageOpacity: 0.3,
                textOpacity: 1,
            });
        } else {
            setOpacity({
                imageOpacity: 1,
                textOpacity: 0,
            });
        }
    };
    const showModal = (isShow) => setShow(isShow);
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
                    style={{
                        objectFit: "cover",
                        opacity: opacity.imageOpacity,
                    }}
                />
                <Card.ImgOverlay
                    className="d-flex align-items-end"
                    style={{ opacity: opacity.textOpacity }}
                >
                    <Card.Body className="p-0 w-100">
                        <Card.Title
                            style={{
                                fontSize: "30px",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                            onClick={() => showModal(true)}
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
            <Modal show={show} onHide={() => showModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default RewardsSwiper;
