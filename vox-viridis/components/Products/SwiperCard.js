import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Button, Modal, Toast } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Instance from "../../services/axiosInstance";
import { useLoginContext } from "../../context/loginContext";

export function SwiperCard(props) {
    const router = useRouter();
    const [opacity, setOpacity] = useState({
        imageOpacity: 1,
        textOpacity: 0,
    });
    const [points, setPoints] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [disableConfirmation, setDisableConfirmation] = useState(false);
    const { sharedState, setSharedState } = useLoginContext();

    useEffect(() => {
        Instance.get("/participation/myPoints", {
            headers: { Authorization: `Bearer ${sharedState.token}` },
        })
            .then((response) => {
                setPoints(response.data);
                console.log(response.data);
                console.log(props.data.points);
                if (
                    !props.data.points ||
                    response.data.length === 0 ||
                    response.data < props.data.points
                ) {
                    console.log("object");
                    setDisableConfirmation(true);
                } else {
                    console.log(response.data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
    const showProduct = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const submitConfirmation = () => {
        Instance.put(
            `/products/buy/${props.data.id}`,
            {},
            {
                headers: { Authorization: `Bearer ${sharedState.token}` },
            }
        )
            .then((response) => {
                handleCloseModal();
                setShowToast(true);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(props.data);
    };
    return (
        <div className="col">
            <Card
                onMouseOver={() => showOverlay(true)}
                onMouseOut={() => {
                    showOverlay(false);
                }}
            >
                {props.data.image !== null ? (
                    <Card.Img
                        variant="top"
                        src={props.data.image}
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
                            onClick={showProduct}
                        >
                            {props.data.name}
                            <br />
                            {props.data.point} points
                        </Card.Title>
                        <Card.Text style={{ fontSize: "20px" }}>
                            {props.data.description}
                        </Card.Text>
                    </Card.Body>
                </Card.ImgOverlay>
            </Card>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Exchange Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You&apos;re about to exchange {props.data.point} points for{" "}
                    a {props.data.name}
                    <br />
                    <br />
                    You have {points} points currently
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    {!disableConfirmation && (
                        <Button variant="primary" onClick={submitConfirmation}>
                            Confirm
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
            <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={3000}
                style={{ position: "fixed", bottom: "20px", right: "20px" }}
            >
                <Toast.Header>
                    <strong className="me-auto">Vox Viridis</strong>
                </Toast.Header>
                <Toast.Body>Exchanged for Product Successfully!</Toast.Body>
            </Toast>
        </div>
    );
}
