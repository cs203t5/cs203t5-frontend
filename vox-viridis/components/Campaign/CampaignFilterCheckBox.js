import styles from "./CampaignFilterCheckBox.module.css";
const CampaignFilterCheckBox = (props) => {
    const renderCheckBox = props.content.filters.map((filter) => (
        <div class="form-check" style={{ display: "flex" }}>
            <input
                class="form-check-input "
                type="checkbox"
                value=""
                id="flexCheckDefault"
                style={{ width: "1vw", height: "1vw" }}
            />
            <label
                class="form-check-label"
                for="flexCheckDefault"
                style={{
                    marginLeft: "5px",
                    fontWeight: "normal",
                    fontSize: "medium",
                    // alignSelf: "center",
                    marginTop: "2px",
                }}
            >
                {filter}
            </label>
        </div>
    ));

    return (
        <div
            className="row-fluid"
            style={{
                fontSize: "1.3em",
                fontWeight: "500",
                paddingBottom: props.style,
            }}
        >
            <div
                className="row-fluid mb-2 p-0"
                style={{
                    marginLeft: "1.5vw",
                    fontWeight: "500",
                }}
            >
                {props.content.title}
            </div>
            <div className="container-fluid p-10 ">
                {props.content.filters && renderCheckBox}
            </div>
        </div>
    );
};

export default CampaignFilterCheckBox;
