import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useLoginContext } from "../../context/loginContext";

function RewardCard(props) {
    const router = useRouter();
    const { sharedState, useSharedState } = useLoginContext();
    const [rewardId, setrewardId] = useState("");

    useEffect(() => {
        if (sharedState.token === "") {
            router.push("/unauthorized");
        }
    }, []);

    const handleClick = () => {
        router.push({
            pathname: "/rewards/[campaignId]",
            query: { campaignId: props.data.id },
        });
    };

    return (
        <Col>
            <Card className="" style={{ width: "auto", height: "700px" }}>
                {props.data.campaignImage !== null ? (
                    <Card.Img
                        className="mh-50 h-50"
                        variant="top"
                        src={props.data.campaignImage}
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
                    <Card.Title>{props.data.campaignTitle}</Card.Title>
                    <div className="row h-50 h-md-50">
                        <Card.Text>{props.data.tnc}</Card.Text>
                    </div>
                    <div className="row ">
                        <Button
                            className=""
                            variant="primary"
                            onClick={handleClick}
                        >
                            View More
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default RewardCard;
