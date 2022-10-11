import { Button, Form, CloseButton } from "react-bootstrap";
import Router from "next/router";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        validated: false,
    });
    const [errorValues, setErrorValues] = useState({});

    const returnToHome = (e) => {
        Router.push("/");
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues((prev) => ({
            ...prev,
            [name]: value,
        }));
        validateInput(e);
    };

    const validateInput = (e) => {
        let { name, value } = e.target;
        setErrorValues((prev) => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "username":
                    if (!value) {
                        stateObj[name] = "Please enter Username.";
                    }
                    break;

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

                case "dob":
                    if (!value) {
                        stateObj[name] = "Please enter Date Of Birth.";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (
                        inputValues.confirmPassword &&
                        value !== inputValues.confirmPassword
                    ) {
                        stateObj["confirmPassword"] =
                            "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] =
                            inputValues.confirmPassword
                                ? ""
                                : errorValues.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (
                        inputValues.password &&
                        value !== inputValues.password
                    ) {
                        stateObj[name] =
                            "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    };

    const submitRegister = (e) => {
        const form = e.currentTarget;

        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setInputValues({ ...inputValues, validated: true });
    };

    return (
        <div className="container-fluid d-flex">
            <div
                className="container-fluid my-2 pb-5 pt-4"
                style={{
                    backgroundColor: "#faf8f4",
                    borderRadius: "10px",
                }}
            >
                <div className="row">
                    <CloseButton
                        className="ms-auto me-5"
                        onClick={returnToHome}
                    />
                </div>
                <Form
                    noValidate
                    validated={inputValues.validated}
                    onSubmit={submitRegister}
                >
                    <div className="row mt-6 w-100 h-100">
                        <div className="col-lg-6 col-12">
                            <img
                                src="../../register/registration.svg"
                                className="img-fluid w-100 h-100"
                            ></img>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div
                                className="col lg-12"
                                style={{
                                    fontSize: "50px",
                                    fontWeight: "bold",
                                }}
                            >
                                Sign Up
                            </div>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
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
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
                            </Form.Group>
                            <div className="row">
                                <div className="col-6">
                                    <div
                                        className="col lg-12"
                                        style={{
                                            fontSize: "30px",
                                        }}
                                    >
                                        First Name
                                    </div>

                                    <Form.Group
                                        mb={3}
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            type="text"
                                            placeholder="First Name"
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
                                </div>
                                <div className="col-6">
                                    <div
                                        className="col lg-12"
                                        style={{
                                            fontSize: "30px",
                                        }}
                                    >
                                        Last Name
                                    </div>
                                    <Form.Group
                                        className="mb-3"
                                        controlId="formBasicPassword"
                                    >
                                        <Form.Control
                                            type="Last Name"
                                            placeholder="Last Name"
                                            required
                                            onChange={onInputChange}
                                            name="lastName"
                                            value={inputValues.lastName}
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
                            <div
                                className="col lg-12"
                                style={{
                                    fontSize: "30px",
                                }}
                            >
                                Username
                            </div>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Control
                                    placeholder="Username"
                                    required
                                    onChange={onInputChange}
                                    name="username"
                                    value={inputValues.userName}
                                    onBlur={validateInput}
                                />
                                {errorValues.username && (
                                    <div className="mb-2 text-danger">
                                        {errorValues.username}
                                    </div>
                                )}{" "}
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </Form.Group>
                            <div
                                className="col lg-12"
                                style={{
                                    fontSize: "30px",
                                }}
                            >
                                Password
                            </div>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    required
                                    onChange={onInputChange}
                                    name="password"
                                    value={inputValues.password}
                                    onBlur={validateInput}
                                />
                                {errorValues.password && (
                                    <div className="mb-2 text-danger">
                                        {errorValues.password}
                                    </div>
                                )}{" "}
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </Form.Group>
                            <div
                                className="col lg-12"
                                style={{
                                    fontSize: "30px",
                                }}
                            >
                                Confirm Password
                            </div>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Control
                                    placeholder="Password"
                                    type="password"
                                    required
                                    onChange={onInputChange}
                                    name="confirmPassword"
                                    value={inputValues.confirmPassword}
                                    onBlur={validateInput}
                                />
                                {errorValues.confirmPassword && (
                                    <div className="mb-2 text-danger">
                                        {errorValues.confirmPassword}
                                    </div>
                                )}{" "}
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </Form.Group>
                            <div
                                className="col lg-12"
                                style={{
                                    fontSize: "30px",
                                }}
                            >
                                Date of Birth
                            </div>
                            <Form.Control
                                type="date"
                                name="dob"
                                required
                                onChange={onInputChange}
                                onBlur={validateInput}
                            />
                            {errorValues.dob && (
                                <div className="mb-2 text-danger">
                                    {errorValues.dob}
                                </div>
                            )}{" "}
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </div>
                        <Button
                            className="w-25 ms-auto me-3 mt-5"
                            as="input"
                            type="submit"
                            value="Submit"
                            style={{ minWidth: "150px" }}
                        />{" "}
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;
