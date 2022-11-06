import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";
import instance from "../../services/axiosInstance";
import { useLoginContext } from "../../context/loginContext";
import { ArrowUpCircle, ArrowDownCircle } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import { Button, Form } from "react-bootstrap";

const ModifyCampaign = () => {
    const { sharedState, setSharedState } = useLoginContext();
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        setRefresh(false);
        instance
            .get("/users", {
                headers: {
                    Authorization: `Bearer ${sharedState.token}`,
                },
            })
            .then((arr) => {
                console.log(arr.data);
                let records = [];
                arr.data.map((record) => {
                    records.push({
                        username: record.username,
                        email: record.email,
                        role: record.role,
                    });
                });
                records = records.filter((record) => record.role !== "ADMIN");
                setData(records);
            });
    }, [refresh]);

    const Column = [
        {
            name: "Username",
            selector: (row) => row.username,
            sortable: true,
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true,
        },
        {
            name: "Role",
            selector: (row) => row.role,
            sortable: true,
        },
        {
            name: "Upgrade",
            button: true,
            cell: (row) => {
                return (
                    <>
                        <Button
                            className="btn btn-primary btn-sm"
                            onClick={() => {
                                Upgrade(row.username);
                            }}
                            disabled={row.role === "BUSINESS"}
                        >
                            <ArrowUpCircle color="white" />
                        </Button>
                    </>
                );
            },
        },
        {
            name: "Downgrade",
            button: true,
            cell: (row) => {
                return (
                    <>
                        <Button
                            className="btn btn-warning btn-sm"
                            onClick={() => {
                                Downgrade(row.username);
                            }}
                            disabled={row.role === "CONSUMER"}
                        >
                            <ArrowDownCircle color="white" />
                        </Button>
                    </>
                );
            },
        },
    ];

    const Upgrade = (username) => {
        instance
            .put(
                `/users/role/upgrade/${username}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${sharedState.token}`,
                    },
                }
            )
            .then((arr) => {
                console.log(arr.data);
                setRefresh(true);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const Downgrade = (username) => {
        instance
            .put(
                `/users/role/downgrade/${username}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${sharedState.token}`,
                    },
                }
            )
            .then(() => {
                setRefresh(true);
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
                        User Role
                    </div>
                    {data && <DataTable columns={Column} data={data} />}
                </div>
            </div>
        </div>
    );
};

export default ModifyCampaign;
