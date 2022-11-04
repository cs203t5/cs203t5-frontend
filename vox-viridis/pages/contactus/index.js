import { Button, Form } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import Instance from "../../services/axiosInstance";

const ContactUs = () => {
    const [inputValues, setInputValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        question: "",
    });
    const [errorValues, setErrorValues] = useState({});

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: value,
        }));
        validateInput(e);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);

    const submitContact = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
            return;
        }

        setInputValues({ ...inputValues, validated: true });
        handleShow();
    };

    const submitConfirmation = (e) => {
        Instance.post("email", inputValues).then((data) => {
            handleClose();
            setInputValues({
                firstName: "",
                lastName: "",
                email: "",
                question: "",
            });
            setShow2(true);
        });
    };

    const validateInput = (e) => {
        let { name, value } = e.target;
        setErrorValues((prev) => {
            const stateObj = { ...prev, [name]: "" };
            switch (name) {
                case "firstName":
                    if (!value) {
                        stateObj[name] = "Please enter First Name.";
                    }
                    break;

                case "lastName":
                    if (!value) {
                        stateObj[name] = "Please enter Last Name.";
                    }
                    break;

                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter Email.";
                    }
                    break;
                case "question":
                    if (!value) {
                        stateObj[name] = "Please enter your Question.";
                    }

                default:
                    break;
            }

            return stateObj;
        });
    };

    return (
        <div>
            <div className="container-fluid p-0 pb-4">
                <div className={globalStyle.pageBg}>
                    <Navbar />
                    <div className="row">
                        <div
                            className="col-3 mx-auto"
                            style={{
                                fontSize: "60px",
                                fontWeight: "bold",
                                fontFamily: "Sans Serif",
                                textAlign: "center",
                            }}
                        >
                            Contact Us
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-3 mx-auto text-secondary"
                            style={{
                                fontSize: "20px",
                                textAlign: "center",
                            }}
                        >
                            We are here to help! Leave us a reply below
                        </div>
                    </div>
                    <Form
                        noValidate
                        validated={inputValues.validated}
                        onSubmit={submitContact}
                    >
                        <div
                            className="row pt-5 mx-5"
                            style={{ paddingBottom: "50px" }}
                        >
                            <div className="col-lg-6 col-12">
                                <img
                                    src="../../contactus/contactus.svg"
                                    className="img-fluid w-100 h-100"
                                ></img>
                            </div>
                            <div className="col-lg-6 col-12">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label style={{ fontSize: "30px" }}>
                                        First Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        value={inputValues.firstName}
                                        required
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                    />
                                    {errorValues.firstName && (
                                        <div className="mb-2 text-danger">
                                            {errorValues.firstName}
                                        </div>
                                    )}{" "}
                                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                </Form.Group>
                                <div className="row">
                                    <div className="col lg-12">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Last Name
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter last name"
                                                name="lastName"
                                                value={inputValues.lastName}
                                                required
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.lastName && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.lastName}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col lg-12">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Email
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                value={inputValues.email}
                                                required
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.email && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.email}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col lg-12">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Questions
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Your questions..."
                                                name="question"
                                                value={inputValues.question}
                                                required
                                                as="textarea"
                                                rows={4}
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.question && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.question}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <Button
                                        className="w-25 ms-auto me-3 mt-5"
                                        as="input"
                                        type="submit"
                                        value="Submit"
                                        style={{ minWidth: "150px" }}
                                    />{" "}
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm submission</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You&apos;re about to submit your contact details...
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={submitConfirmation}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            <Toast
                onClose={() => setShow2(false)}
                show={show2}
                delay={3000}
                style={{ position: "fixed", bottom: "20px", right: "20px" }}
            >
                <Toast.Header>
                    <strong className="me-auto">Vox Viridis</strong>
                </Toast.Header>
                <Toast.Body>Email Sent Successfully!</Toast.Body>
            </Toast>
        </div>
    );
};

export default ContactUs;
