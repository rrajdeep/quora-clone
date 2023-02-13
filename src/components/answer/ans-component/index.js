import React from "react";
import { AiOutlineClose, AiOutlineEdit, AiOutlineEllipsis } from "react-icons/ai";
import { BiDownvote, BiWifi2 } from "react-icons/bi";
import { MdEditOff } from "react-icons/md";

export const AnswerComponent = (props) => {
    const data = props.data;
    return(
        <div className="ans-q-container" key={data.id}>
                        <div className="question-box-div">
                            <div className="ans-ques-string">
                                {data.ques}
                            </div>
                            <div className="ans-close">
                                <AiOutlineClose size={15}></AiOutlineClose>
                            </div>
                        </div>
                        <div className="below-ques-string">
                            <div className="ans-count">
                                <span>{data.ansCount} answers</span>
                            </div>
                        </div>
                        <div className="b-ans-box-div">
                            <div className="b-ans-icons-left">
                                <div className="ans-box-icons ans-initial-box">
                                    <div>
                                        <AiOutlineEdit size={20}></AiOutlineEdit>
                                    </div>
                                    <div>
                                        Answer
                                    </div>
                                </div>
                                <div className="ans-box-icons q-ans-hover">
                                    <div className="follow-symbol">
                                        <BiWifi2 size={25}></BiWifi2>
                                    </div>
                                    <div>
                                        Follow <span>{data.followCount}</span>
                                    </div>
                                </div>
                                <div className="ans-box-icons q-ans-hover">
                                    <div className="">
                                        <MdEditOff size={20}></MdEditOff>
                                    </div>
                                    <div>
                                        Pass
                                    </div>
                                </div>
                            </div>
                            <div className="b-ans-icons-right">
                                <div className="ans-close">
                                    <BiDownvote size={20} style={{ "cursor": "pointer" }}></BiDownvote>
                                </div>
                                <div className="ans-close">
                                    <AiOutlineEllipsis size={20} style={{ "cursor": "pointer" }}></AiOutlineEllipsis>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}