const data = { card: 5 };
function Cards(props) {
    return (
        <div
            className="row mt-5 px-4 m-auto justify-content-center w-75"
            style={{
                border: "solid",
                borderRadius: "20px",
                backgroundColor: "#f1e1c7",
            }}
        >
            <div className="row my-5 gap-5">
                {Array(props.data)
                    .fill(0)
                    .map((_, i) => (
                        <img
                            className=""
                            src="..//rewards/rewardIcon.svg"
                            style={{ width: "20%" }}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Cards;
