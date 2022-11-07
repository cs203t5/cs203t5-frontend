import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Button, Col, Modal, Toast } from "react-bootstrap";
import { useLoginContext } from "../../context/loginContext";
import Instance from "../../services/axiosInstance";

function ProductCard(props) {
    const router = useRouter();

    useEffect(() => {
        if (sharedState.token === "") {
            router.push("/unauthorized");
        }
    }, [router.isReady]);

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
                if (response.data < props.data.points) {
                    setDisableConfirmation(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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
        <Col>
            <Card className="" style={{ width: "auto", height: "700px" }}>
                {props.data.image !== null ? (
                    <Card.Img
                        className="mh-50 h-50"
                        variant="top"
                        src={props.data.image}
                        style={{
                            objectFit: "cover",
                        }}
                    />
                ) : (
                    <Card.Img
                        className="mh-50 h-50"
                        variant="top"
                        src="https://www.smu.edu.sg/sites/default/files/smu-logo.jpg"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                )}
                <Card.Body>
                    <Card.Title>{props.data.category}</Card.Title>
                    <div className="row h-50 h-md-50">
                        <Card.Text>{props.data.name}</Card.Text>
                    </div>
                    <div className="row ">
                        <Button
                            className=""
                            variant="primary"
                            onClick={() => setShowModal(true)}
                        >
                            View More
                        </Button>
                    </div>
                </Card.Body>
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
        </Col>
    );
}

export default ProductCard;
