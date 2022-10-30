function Points(props) {

    return (
        <div
            className="row mt-5 px-4 m-auto justify-content-center"
            style={{ border: "solid", borderRadius: "20px", width: "85%" }}
        >
            <div className="row">
                <div
                    className="col m-0"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                    }}
                >
                    <p className="m-0" style={{ fontSize: "3em" }}>
                        {props.data}
                    </p>
                    <div className="m-0">
                        <p className="m-0">pts</p>
                        <p className="m-0">earned</p>
                    </div>
                </div>
                <div
                    className="col m-0"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                    }}
                >
                    <p className="m-0" style={{ fontSize: "3em" }}>
                        5
                    </p>
                    <div className="m-0">
                        <p className="m-0">Jeans</p>
                        <p className="m-0">Recyclced</p>
                    </div>
                </div>
                <div
                    className="col m-0"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: ".5rem",
                    }}
                >
                    <p className="m-0" style={{ fontSize: "3em" }}>
                        2.89
                    </p>
                    <div className="m-0">
                        <p className="m-0">kg of cotton</p>
                        <p className="m-0">saved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Points;
