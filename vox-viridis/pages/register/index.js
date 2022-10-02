import { Button, Form, CloseButton } from "react-bootstrap";
import Router from "next/router";

const Register = () => {
    const returnToHome = (e) => {
        Router.push("/");
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
                                        type="Last Name Name"
                                        placeholder="Last Name"
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
                            <Form.Control placeholder="Username" />
                        </Form.Group>
                        <div
                            className="col lg-12"
                            style={{
                                fontSize: "30px",
                            }}
                        >
                            Email
                        </div>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Control placeholder="Email Name" />
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
                            <Form.Control placeholder="Password" />
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
                            <Form.Control placeholder="Password" />
                        </Form.Group>

                        <div
                            className="col lg-12"
                            style={{
                                fontSize: "30px",
                            }}
                        >
                            Date of Birth
                        </div>
                        <Form.Control type="date" name="date_of_birth" />
                    </div>
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
    );
};

export default Register;
