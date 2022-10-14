import Navbar from "../../components/Navbar";
import globalStyle from "../Global.module.css";
import QuestionsDropdown from "./questionsDropdown";

// const HelpPageDetails = () => {
//     return (
//         <div className="container-fluid">
//             <div className="row" style={{ height: "100vh" }}>
//                 <div className="col-5 px-3 py-5">
//                     <img
//                         src="../../Help page image.png"
//                         /*width="330"
//                         height="225"*/
//                         class="img-fluid w-50 h-50"
//                         alt="Responsive image"
//                         style={{ position: "relative;top:100px" }}
//                     />
//                 </div>
//                 <div className="col-7 px-2 py-2 text-center">
//                     <p style={{ fontFamily: "PT Sans",color:"rgb(69, 144, 210)" }}>FAQ</p>
//                     <QuestionsDropdown question="hello" answer="world" />
//                 </div>
//             </div>
//         </div>
//     );
// };

const HelpPageDetails = () => {
    return (
        <div
            className="container-fluid my-2 pb-5 pt-4"
            style={{
                backgroundColor: "#faf8f4",
                borderRadius: "10px",
            }}
        >
            <div className="row w-100 h-100">
                <div className="col-lg-6 col-12">
                    <img
                        src="../../Help page image.png"
                        className="img-fluid w-100 h-100"
                    ></img>
                </div>
                <div className="col-lg-6 col-12 my-md-4 my-lg-0 text-center">
                    <p
                        style={{
                            fontFamily: "PT Sans",
                            color: "rgb(69, 144, 210)",
                            fontSize: "40px",
                            position: "relative;bottom:40px",
                        }}
                    >
                        FAQ
                    </p>
                    <div
                        class="accordion accordion-flush"
                        id="accordionFlushExample"
                    >
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseOne"
                                >
                                    Q(User): The store has rejected my recycleables.
                                </button>
                            </h2>
                            <div
                                id="flush-collapseOne"
                                class="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div class="accordion-body">
                                Have you checked the conditions of your recycleables? It could be its damaged or unclean state that has caused it to be rejected! Do check with stores through our platform before going to the stores for exchanges!"
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseTwo"
                                >
                                    Q(User): I did not receive any stamps after giving a recycleable to the store.
                                </button>
                            </h2>
                            <div
                                id="flush-collapseTwo"
                                class="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div class="accordion-body">
                                    Sorry for the inconvenience caused! Please send us a ticket through the Contact Us page so that we can verify and assist you in this matter!
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2
                                class="accordion-header"
                                id="flush-headingThree"
                            >
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree"
                                    aria-expanded="false"
                                    aria-controls="flush-collapseThree"
                                >
                                    Q(Admin): Why was my campaign taken down?
                                </button>
                            </h2>
                            <div
                                id="flush-collapseThree"
                                class="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree"
                                data-bs-parent="#accordionFlushExample"
                            >
                                <div class="accordion-body">
                                    We are sorry to hear that. It could possibly caused by the fact that your campaign does not relate to our green movement! For more information or assistance, please use the contact us so that we can verify your campaign manually.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
const index = () => {
    return (
        <div>
            <div className={globalStyle.pageBg}>
                <Navbar />
                <HelpPageDetails />
            </div>
        </div>
    );
};

export default index;


