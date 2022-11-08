import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import Footer from "../../components/Footer.js";
import { useRouter } from "next/router";
import { useLoginContext } from "../../context/loginContext";
import Instance from "../../services/axiosInstance";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const Analysis = () => {
    const [point, setPoint] = useState();
    const [labels, setLabels] = useState();
    const { sharedState, setSharedState } = useLoginContext();

    useEffect(() => {
        Instance.get("/analysis", {
            headers: { Authorization: `Bearer ${sharedState.token}` },
        })
            .then((response) => {
                console.log(response.data);
                setLabels(response.data.category);
                setPoint(response.data.participation);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Participations by Category",
            },
        },
    };

    const datapoints = {
        labels: labels,
        datasets: [
            {
                label: "Dataset 1",
                data: point && point.map((p) => p),
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    return (
        <div>
            <div
                className={globalStyle.pageBg}
                style={{ paddingBottom: "5vh" }}
            >
                <Navbar />
                <div className="d-flex align-items-center justify-content-center">
                    {point && labels && (
                        <Bar options={options} data={datapoints} />
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Analysis;
