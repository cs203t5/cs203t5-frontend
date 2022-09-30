import styles from "./HomepageImgLeft.module.css";
const HomepageImgLeft = (props) => {
    return (
        <div className="row p-5">
            <div className="col-lg-1 "></div>
            <div
                className="col-lg-5 md-12 w-50 "
                align="center"
                style={{ margin: "auto" }}
            >
                <img src={props.content.src} />
            </div>

            <div
                className="col-lg-5 md-12 "
                style={{
                    alignSelf: "center",
                }}
            >
                <div
                    className="row"
                    style={{
                        fontSize: "2em",
                        fontStyle: "italic",
                        justifyContent: "center",
                    }}
                >
                    {props.content.header}
                </div>
                <div
                    className="row my-3 "
                    style={{
                        width: "35vw",
                        margin: "auto",
                    }}
                >
                    {" "}
                    {props.content.text}
                </div>
            </div>
        </div>
    );
};

export default HomepageImgLeft;
