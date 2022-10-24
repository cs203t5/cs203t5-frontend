import { Button, Form } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Toast from "react-bootstrap/Toast";

const CreateCampaign = () => {
    const [inputValues, setInputValues] = useState({
        campaignName: "",
        campaignDescription: "",
        startDate: "",
        endDate: "",
        address: "",
        location: "",
        reward: "",
        rewardType: "",
        campaignImage: "",
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
        axios.post("http://localhost:8080/api/email", inputValues).then((data) => {
            handleClose();
        setInputValues({
            campaignName: "",
            campaignDescription: "",
            startDate: "",
            endDate: "",
            address: "",
            location: "",
            reward: "",
            rewardType: "",
            campaignImage: "",
        });
        setShow2(true);
        });
    };

    const validateInput = (e) => {
        let { name, value } = e.target;
        setErrorValues((prev) => {
            const stateObj = { ...prev, [name]: "" };
            switch (name) {
                case "campaignName":
                    if (!value) {
                        stateObj[name] = "Please enter your Campaign Name.";
                    }
                    break;

                case "campaignDescription":
                    if (!value) {
                        stateObj[name] = "Please enter your Campaign Description.";
                    }
                    break;

                case "startDate":
                    if (!value) {
                        stateObj[name] = "Please enter Start Date.";
                    }
                    break;

                case "endDate":
                    if (!value) {
                        stateObj[name] = "Please enter End Date.";
                    }
                    break;

                case "address":
                    if (!value) {
                        stateObj[name] = "Please enter Address.";
                    }
                    break;

                case "location":
                    if (!value) {
                        stateObj[name] = "Please enter Location.";
                    }
                    break;

                case "reward":
                    console.log(inputValues.rewardType  && !value);
                    console.log(inputValues.rewardType  && (!value));
                    if (inputValues.rewardType  && !value ) {
                        console.log("hi");
                        stateObj[name] = "Please enter reward.";
                    }
                    break;

                case "rewardType":
                    if (inputValues.reward && value == "-") {
                        stateObj[name] = "Please select Reward Type.";
                    }
                    break;

                case "campaignImage":
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
                                        name="campaignName"
                                        value={inputValues.campaignName}
                                        required
                                        onChange={onInputChange}
                                        onBlur={validateInput}
                                    />
                                    {errorValues.campaignName && (
                                        <div className="mb-2 text-danger">
                                            {errorValues.campaignName}
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
                                                name="startDate"
                                                value={inputValues.startDate}
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
                                                name="endDate"
                                                value={inputValues.endDate}
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
                                            Location
                                        </div>

                                        <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter location"
                                                name="location"
                                                value={inputValues.location}
                                                required
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
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
                                            Reward
                                        </div>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Enter reward"
                                                onChange={onInputChange}
                                                name="reward"
                                                value={inputValues.reward}
                                                onBlur={validateInput}
                                            />
                                         {errorValues.reward && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.reward}
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
                                                onBlur={validateInput}>

                                                <option value="-" selected>Select Reward Type</option>
                                                <option value="1">Point</option>
                                                <option value="2">Card</option>
                                            </Form.Select>
                                            {errorValues.rewardType && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.rewardType}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>

                                        {/* <Form.Group
                                            mb={3}
                                            controlId="formBasicPassword"
                                        >

                                            <Form.Control
                                                type="text"
                                                placeholder="Select reward type"
                                                name="rewardType"
                                                value={inputValues.rewardType}
                                                required
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.rewardType && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.rewardType}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group> */}
                                    </div>
                                    <div className="col-6">
                                        {/* <div
                                            className="col lg-12"
                                            style={{
                                                fontSize: "30px",
                                            }}
                                        >
                                            Campaign Image
                                        </div> */}
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
                                            id="customFile" 
                                            />
                                        {/* <Form.Group
                                            className="mb-3"
                                            controlId="formBasicPassword"
                                        >
                                            <Form.Control
                                                type="text"
                                                placeholder="Upload image"
                                                required
                                                onChange={onInputChange}
                                                name="campaignImage"
                                                value={inputValues.campaignImage}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.campaignImage && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.campaignImage}
                                                </div>
                                            )}{" "}
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group> */}
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
                                                name="campaignDescription"
                                                value={inputValues.campaignDescription}
                                                required
                                                as="textarea"
                                                rows={4}
                                                onChange={onInputChange}
                                                onBlur={validateInput}
                                            />
                                            {errorValues.campaignDescription && (
                                                <div className="mb-2 text-danger">
                                                    {errorValues.campaignDescription}
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
                    You're about to submit your campaign details...
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
                style={{position:"fixed", bottom:"20px", right:"20px"}}
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
