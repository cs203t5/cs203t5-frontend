import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button, Modal } from "react-bootstrap";
import Router, { useRouter } from "next/router";
import Instance from "../../services/axiosInstance";
import { SwiperCard } from "./SwiperCard";

function RewardsSwiper(props) {
    const router = useRouter();

    const showViewAll = () => {
        router.push("/marketplace/allProducts");
    };

    return (
        <div className="row mt-5 mx-4" style={{ overflow: "hidden" }}>
            <div className="row mb-2 pe-0">
                <div className="col d-flex pe-0">
                    <div
                        className="me-auto"
                        style={{ fontWeight: "bold", fontSize: "1.5em" }}
                    >
                        {props.header.title}
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
                {props &&
                    props.data &&
                    props.data.length !== 0 &&
                    props.data.map((element, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <SwiperCard data={element} key={index} />
                            </SwiperSlide>
                        );
                    })}
            </Swiper>
        </div>
    );
}

export default RewardsSwiper;
