import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { answerData } from "../data/mockdata";
import { AnswerComponent } from "./ans-component";
import "./answer.css";

export const Answer = () => {
    const [actAnsSection, setActActAnsSection] = useState("q-for-you");
    let data = answerData;

    return (
        <div className="answer-container">
            <div className="answer-container-outer">
                <div className="answer-left">
                    <div className="filter-div">
                        <div>
                            Questions
                        </div>
                        <div>
                            <hr />
                        </div>
                    </div>
                    <div className={`${actAnsSection === "q-for-you" && "active-ans-div"} ans-div`} onClick={() => setActActAnsSection("q-for-you")}>
                        <div className="ans-tiltle">
                            <div>
                                Questions for you
                            </div>
                        </div>
                    </div>
                    <div className={`${actAnsSection === "ans-requests" && "active-ans-div"} ans-div`} onClick={() => setActActAnsSection("ans-requests")}>
                        <div className="ans-tiltle">
                            <div>
                                Answer requests
                            </div>
                        </div>
                    </div>
                    <div className={`${actAnsSection === "draft" && "active-ans-div"} ans-div`} onClick={() => setActActAnsSection("draft")}>
                        <div className="ans-tiltle">
                            <div>
                                Draft
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                actAnsSection === "q-for-you" &&
                <div className="q-ans-box">
                    <div className="ans-box-card">
                        <div className="ans-box-star">
                            <AiFillStar size={20} style={{ "color": "#fff" }}></AiFillStar>
                        </div>
                        <div className="ques-for-you">
                            Questions for you
                        </div>
                    </div>
                    {
                        data.map((element, index) => {
                            return(
                                <AnswerComponent key={index} data={element}></AnswerComponent>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}