import { useRouter } from "next/router";
import { Card, Button, Col } from "react-bootstrap";

function RewardCard(props) {
    const router = useRouter();

    const handleClick = () => {
        router.push({
            pathname: "/rewards/[rewardId]",
            query: { rewardId: props.data.rewardId },
        });
    };

    console.log(props.data);
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
