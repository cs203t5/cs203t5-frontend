import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { useLoginContext } from "../../context/loginContext";

function RewardCard(props) {
    const router = useRouter();
    const { sharedState, useSharedState } = useLoginContext();
    const [rewardId, setrewardId] = useState("");
    useEffect(() => {
        setrewardId(props.data.rewardId);
    }, []);

    const handleClick = () => {
        router.push({
            pathname: "/rewards/[campaignId]",
            query: { campaignId: props.data.rewardId },
        });
    };

    return (
        <Col>
            <Card style={{ width: "auto" }}>
                <Card.Img variant="top" src="../rewards/theBodyShop.webp" />
                <Card.Body>
                    <Card.Title>{props.data.shop}</Card.Title>
                    <Card.Text>{props.data.text}</Card.Text>

                    <Button
                        className="float-end"
                        variant="primary"
                        onClick={handleClick}
                    >
                        View More
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default RewardCard;
