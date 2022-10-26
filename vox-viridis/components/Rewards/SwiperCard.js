import { useState } from "react";
import { Modal } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export function SwiperCard(props) {
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
                    src={props.data.campaignImage}
                    style={{
                        objectFit: "cover",
                        opacity: opacity.imageOpacity,
                        maxHeight: "500px",
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
