import Navbar from "../../../components/Navbar";
import globalStyle from "../../Global.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import instance from "../../../services/axiosInstance";
import { useLoginContext } from "../../../context/loginContext";
import { PencilSquare, Trash } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";
import SelectInput from "@mui/material/Select/SelectInput";

const ModifyCampaign = () => {
    const { sharedState, setSharedState } = useLoginContext();
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [currentId, setCurrentId] = useState();
    const [refresh, setRefresh] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        instance
            .get(`/campaign/${currentId}`, {
                headers: {
                    Authorization: `Bearer ${sharedState.token}`,
                },
            })
            .then(async ({ data }) => {
                let values = {
                    title: data.title,
                    startDate: data.startDate,
                    endDate: data.endDate,
                    address: data.address,
                    location: data.location,
                    rewardName: data.rewardName,
                    rewardType: data.rewardType,
                };
                setInputValues(values);
                setShow(true);
            });
    };
    const [inputValues, setInputValues] = useState({
        title: "",
        displayStartDate: "",
        displayEndDate: "",
        startDate: "",
        endDate: "",
        address: "",
        location: "",
        rewardName: "",
        rewardType: "",
    });

    useEffect(() => {
        if (inputValues.title) {
            setShow(true);
        }
    }, [inputValues]);

    useEffect(() => {
        if (currentId) handleShow();
    }, [currentId]);
    const onInputChange = (e) => {
        let { name, value } = e.target;
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
        } else {
            setInputValues((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        setRefresh(false);
        instance
            .get("/campaign/myCampaign", {
                headers: {
                    Authorization: `Bearer ${sharedState.token}`,
                },
            })
            .then((arr) => {
                console.log(arr.data);
                let records = [];
                arr.data.map((record) => {
                    records.push({
                        title: record.title,
                        startDate: record.startDate,
                        endDate: record.endDate,
                        address: record.address,
                        location: record.location,
                        reward: record.rewardName,
                        rewardType: record.rewardType,
                        id: record.id,
                    });
                });
                setData(records);
            });
    }, [refresh]);

    const Column = [
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "Start Date",
            selector: (row) => row.startDate,
            sortable: true,
        },
        {
            name: "End Date",
            selector: (row) => row.endDate,
            sortable: true,
        },
        {
            name: "Address",
            selector: (row) => row.address,
            sortable: true,
        },
        {
            name: "Location",
            selector: (row) => row.location,
            sortable: true,
        },
        {
            name: "Reward",
            selector: (row) => row.rewardName,
            sortable: true,
        },
        {
            name: "Reward Type",
            selector: (row) => row.rewardType,
            sortable: true,
        },
        {
            name: "Action",
            button: true,
            cell: (row) => {
                return (
                    <>
                        <Button
                            className="btn btn-success btn-sm"
                            onClick={() => {
                                if (currentId === row.id) {
                                    handleShow();
                                }
                                setCurrentId(row.id);
                            }}
                        >
                            <PencilSquare color="white" />
                        </Button>

                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => Remove(row.id)}
                        >
                            <Trash color="white" />
                        </button>
                    </>
                );
            },
        },
    ];

    const Edit = () => {
        let id = currentId;
        console.log(currentId);
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

        instance
            .put(`/campaign/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${sharedState.token}`,
                },
            })
            .then((arr) => {
                console.log(arr.data);
                handleClose();
                setRefresh(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const Remove = (id) => {
        instance
            .delete(`/campaign/${id}`, {
                headers: {
                    Authorization: `Bearer ${sharedState.token}`,
                },
            })
            .then(() => {
                setData(data.filter((row) => row.id !== id));
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div>
            <div className="container-fluid p-0 pb-4">
                <div className={globalStyle.pageBg}>
                    <Navbar />
                    <div
                        className="row m-0 p-0 mx-5 my-5"
                        style={{
                            fontSize: "50px",
                            fontWeight: "bold",
                        }}
                    >
                        Your Current Campaigns
                    </div>
                    {data && <DataTable columns={Column} data={data} />}
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit your campaign</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={inputValues.title}
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="displayStartDate"
                                value={inputValues.displayStartDate}
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>End Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="displayEndDate"
                                value={inputValues.displayEndDate}
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={inputValues.address}
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                value={inputValues.location}
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Reward</Form.Label>
                            <Form.Control
                                type="text"
                                name="reward"
                                value={inputValues.reward}
                                onChange={onInputChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Reward Type</Form.Label>
                            <Form.Control
                                type="text"
                                name="rewardType"
                                value={inputValues.rewardType}
                                onChange={onInputChange}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Edit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default ModifyCampaign;
