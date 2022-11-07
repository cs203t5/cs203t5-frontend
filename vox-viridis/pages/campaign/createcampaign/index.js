import { Button, Form } from "react-bootstrap";
import Navbar from "../../../components/Navbar";
import globalStyle from "../../Global.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";
import { useRouter } from "next/router";
import { useLoginContext } from "../../../context/loginContext";
import { NextResponse } from "next/dist/server/web/spec-extension/response";
import Instance from "../../../services/axiosInstance";
import { createRef } from "react";

const CreateCampaign = () => {
    const [inputValues, setInputValues] = useState({
        title: "",
        description: "",
        displayStartDate: "",
        displayEndDate: "",
        startDate: "",
        endDate: "",
        address: "",
        location: "",
        rewardName: "",
        goal: "",
        rewardType: "",
        tnc: "",
    });
    const [errorValues, setErrorValues] = useState({});
    const { sharedState, setSharedState } = useLoginContext();
    const imageRef = createRef();

    const router = useRouter();

    useEffect(() => {
        if (sharedState.token === "") {
            router.push("/unauthorised");
        }
    }, []);

    const onInputChange = (e) => {
        let { name, value } = e.target;
        console.log(name);
        if (name === "displayEndDate" || name === "displayStartDate") {
            let temp = "startDate";
            if (name === "displayEndDate") {
                temp = "endDate";
            }
            setInputValues((prev) => ({
                ...prev,
                [name]: value,
                [temp]: value.split("-").reverse().join("-") + ` 12:00`,
            }));
        } else if (name === "imageFile") {
            console.log(e.target.files[0]);
            setInputValues((prev) => ({
                ...prev,
                campaignImage: e.target.files[0],
            }));
        } else {
            setInputValues((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

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
        const formData = new FormData();
        const rewardData = {
            rewardName: "",
            goal: 0,
            tnc: "",
            rewardType: "",
        };

        inputValues["goal"] = parseInt(inputValues["goal"]);

        inputValues["rewardType"] = inputValues.rewardType.toUpperCase();

        Object.keys(inputValues).forEach((key) => {
            if (
                key === "rewardName" ||
                key === "goal" ||
                key === "tnc" ||
                key === "rewardType"
            ) {
                rewardData[key] = inputValues[key];
            } else {
                formData.append(key, inputValues[key]);
            }
        });
        formData.append("reward", JSON.stringify(rewardData));

        Instance.post("/campaign", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${sharedState.token}`,
            },
        })
            .then((data) => {
                console.log(data);
                handleClose();
                setInputValues({
                    title: "",
                    description: "",
                    startDate: "",
                    endDate: "",
                    displaystartDate: "",
                    displayendDate: "",
                    address: "",
                    location: "",
                    rewardName: "",
                    rewardType: "",
                    imageFile: null,
                    goal: "",
                    tnc: "",
                });
                setShow2(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const validateInput = (e) => {
        let { name, value } = e.target;
        setErrorValues((prev) => {
            const stateObj = { ...prev, [name]: "" };
            switch (name) {
                case "title":
                    if (!value) {
                        stateObj[name] = "Please enter your Campaign Name.";
                    } else if (value.length < 5) {
                        stateObj[name] =
                            "Campaign Name must be at least 5 characters!";
                    }
                    break;

                case "description":
                    if (!value) {
                        stateObj[name] =
                            "Please enter your Campaign Description.";
                    }
                    break;

                case "displayStartDate":
                    if (!value) {
                        stateObj[name] = "Please enter Start Date.";
                    }
                    break;

                case "displayEndDate":
                    if (!value) {
                        stateObj[name] = "Please enter End Date.";
                    }
                    break;

                case "address":
                    if (!value) {
                        stateObj[name] = "Please enter Address.";
                    }
                    break;
                case "goal":
                    if (!value) {
                        stateObj[name] = "Please enter Goals for Reward.";
                    }
                    break;

                case "location":
                    if (!value) {
                        stateObj[name] = "Please enter Location.";
                    }
                    break;

                case "tnc":
                    if (!value) {
                        stateObj[name] = "Please enter Terms and Conditions.";
                    }
                    break;

                case "rewardName":
                    if (!value) {
                        stateObj[name] = "Please enter reward name.";
                    }
                    break;

                case "rewardType":
                    if (inputValues.reward && value == "-") {
                        stateObj[name] = "Please select Reward Type.";
                    }
                    break;

                case "imageFile":
                    if (!value) {
                        stateObj[name] = "Please upload Campaign Image.";
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
                            className="col-4 mx-auto"
                            style={{
                                fontSize: "60px",
                                fontWeight: "bold",
                                fontFamily: "Sans Serif",
                                textAlign: "center",
                            }}
                        >
                            Create Campaign
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
                                    src="../../createcampaign/createcampaign.svg"
                                    className="img-fluid w-100 h-100"
                                ></img>
                            </div>
                            <div className="col-lg-6 col-12">
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label style={{ fontSize: "30px" }}>
                                        Campaign Name
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter campaign name"
                                        name="title"
                                        value={inputValues.title}
                                        required
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                    />
                                    {errorValues.title && (
                                        <div className="mb-2 text-danger">
                                            {errorValues.title}
                                        </div>
                                    )}{" "}
                                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                </Form.Group>
                                <div className="row">
                                    <div className="col-6">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Start Date
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="date"
                                                placeholder="Enter start date"
                                                name="displayStartDate"
                                                value={
                                                    inputValues.displayStartDate
                                                }
                                                required
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.startDate && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.startDate}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            End Date
                                        </div>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="date"
                                                placeholder="End date"
                                                required
                                                onChange={onInputChange}
                                                name="displayEndDate"
                                                value={
                                                    inputValues.displayEndDate
                                                }
                                                onBlur={validateInput}
                                            />
                                            {errorValues.endDate && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.endDate}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>

                                <div className="row pt-3">
                                    <div className="col-6">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Location
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Select
                                                type="form-select"
                                                aria-label="Default select example"
                                                name="location"
                                                value={inputValues.location}
                                                required
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            >
                                                <option value="-" selected>
                                                    Select location
                                                </option>
                                                <option value="North">
                                                    North
                                                </option>
                                                <option value="East">
                                                    East
                                                </option>
                                                <option value="South">
                                                    South
                                                </option>
                                                <option value="West">
                                                    West
                                                </option>
                                                <option value="Central">
                                                    Central
                                                </option>
                                            </Form.Select>
                                            {errorValues.location && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.location}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Reward Name
                                        </div>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter reward name"
                                                onChange={onInputChange}
                                                name="rewardName"
                                                value={inputValues.rewardName}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.rewardName && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.rewardName}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col lg-12">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Address
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter address"
                                                name="address"
                                                value={inputValues.address}
                                                required
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.address && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.address}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-6">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Reward Goals
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Reward Goals"
                                                name="goal"
                                                value={inputValues.goal}
                                                required
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.goal && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.goal}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Terms and Conditions
                                        </div>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Terms and Conditions"
                                                onChange={onInputChange}
                                                name="tnc"
                                                value={inputValues.tnc}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.tnc && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.tnc}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <div className="col-6">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Reward Type
                                        </div>
                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Select
                                                required
                                                className="form-select"
                                                aria-label="Default select example"
                                                onChange={onInputChange}
                                                name="rewardType"
                                                value={inputValues.rewardType}
                                                onBlur={validateInput}
                                            >
                                                <option value="-" selected>
                                                    Select Reward Type
                                                </option>
                                                <option value="points">
                                                    Points
                                                </option>
                                                <option value="cards">
                                                    Cards
                                                </option>
                                            </Form.Select>
                                            {errorValues.rewardType && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.rewardType}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                    </div>
                                    <div className="col-6">
                                        <label
                                            className="rowform-label"
                                            for="customFile"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Campaign Image
                                        </label>
                                        <input
                                            type="file"
                                            class="form-control"
                                            name="imageFile"
                                            onChange={onInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="row pt-4">
                                    <div className="col lg-12">
                                        <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Campaign Description
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter Campaign Description"
                                                name="description"
                                                value={inputValues.description}
                                                required
                                                as="textarea"
                                                rows={4}
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.description && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.description}
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
                    You&apos;re about to submit your campaign details...
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
                <Toast.Body>Campaign Created Successfully!</Toast.Body>
            </Toast>
        </div>
    );
};

export default CreateCampaign;
