import { useRouter } from "next/router";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export function SwiperCard(props) {
    const router = useRouter();
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
    const showReward = () => {
        router.push({
            pathname: "/rewards/[campaignId]",
            query: { campaignId: props.data.id },
        });
    };
    return (
        <div className="col">
            <Card
                onMouseOver={() => showOverlay(true)}
                onMouseOut={() => {
                    showOverlay(false);
                }}
            >
                {props.data.campaignImage !== null ? (
                    <Card.Img
                        variant="top"
                        src={props.data.campaignImage}
                        style={{
                            objectFit: "cover",
                            opacity: opacity.imageOpacity,
                            height: "300px",
                        }}
                    />
                ) : (
                    <Card.Img
                        variant="top"
                        src="https://www.smu.edu.sg/sites/default/files/smu-logo.jpg"
                        style={{
                            objectFit: "cover",
                            opacity: opacity.imageOpacity,
                            height: "300px",
                        }}
                    />
                )}
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
                            onClick={showReward}
                        >
                            {props.data.campaignTitle}
                            <br />
                            {props.data.rewardName}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                            {props.data.tnc}
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}
