import { Button, Form, CloseButton } from "react-bootstrap";
import Router from "next/router";
import { useState } from "react";
import axios from "axios";

const Register = () => {
    const [inputValues, setInputValues] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
    });

    const returnToHome = (e) => {
        Router.push("/");
    };

    const submitRegister = () => {
        axios
            .post("http://localhost:8080/api/users/save", inputValues, {})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={(e) => {
                                    setInputValues({
                                        ...inputValues,
                                        email: e.target.value,
                                    });
                                }}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
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
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Control
                                        type="First Name"
                                        placeholder="First Name"
                                        onChange={(e) => {
                                            setInputValues({
                                                ...inputValues,
                                                firstName: e.target.value,
                                            });
                                        }}
                                    />
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
                                        onChange={(e) => {
                                            setInputValues({
                                                ...inputValues,
                                                lastName: e.target.value,
                                            });
                                        }}
                                    />
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
                                onChange={(e) => {
                                    setInputValues({
                                        ...inputValues,
                                        username: e.target.value,
                                    });
                                }}
                            />
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
                                onChange={(e) => {
                                    setInputValues({
                                        ...inputValues,
                                        password: e.target.value,
                                    });
                                }}
                            />
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
                            />
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
                            name="date_of_birth"
                            onChange={(e) => {
                                setInputValues({
                                    ...inputValues,
                                    dob: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <Button
                        className="w-25 ms-auto me-3 mt-5"
                        as="input"
                        type="submit"
                        value="Submit"
                        style={{ minWidth: "150px" }}
                        onClick={(e) => {
                            e.preventDefault();
                            submitRegister();
                        }}
                    />{" "}
                </div>
            </div>
        </div>
    );
};

export default Register;
