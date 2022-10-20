function RewardTransactionCard() {
    return (
        <div
            className="row p-3 mb-5"
            style={{ border: "solid", borderRadius: "20px" }}
        >
            <div style={{ textDecoration: "underline", fontSize: "1.5rem" }}>
                Transaction completed on 12/34/56
            </div>
            <div className="my-2 ">
                Description: Exchanged 5 stamps for 20ml of body wash
            </div>
        </div>
    );
}

export default RewardTransactionCard;
