import Dropdown from "react-bootstrap/Dropdown";
import CampaignFilter from "./CampaignFilter";

function CampaignFilterSmall() {
    return (
        <div className="container-fluid">
            <div className="row mt-2 d-lg-none justify-content-center">
                <Dropdown className="" style={{ textAlign: "center" }}>
                    <Dropdown.Toggle className="" id="dropdown-basic">
                        Filter
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {" "}
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            Something else
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    );
}

export default CampaignFilterSmall;
