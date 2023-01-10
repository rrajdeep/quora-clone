import React from "react";
import { RiQuestionnaireLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxPencil1 } from "react-icons/rx";
import "./ques.css";


export const Ques = () => {
    return (
        <div className="ques-container">
            <div className="profile-n-ques-div">
                <div>
                    <CgProfile size={30} />
                </div>
                <div className="ask-share-div">
                    <div className="inside-ask-share">What do you want to ask or share?</div>
                </div>
            </div>
            <div className="ask-ans-post-div">
                <div className="q-ask-ans-post">
                    <div><RiQuestionnaireLine size={16}></RiQuestionnaireLine></div>
                    <div>Ask</div>
                </div>
                <div className="tiny-div"></div>
                <div className="q-ask-ans-post">
                    <div><AiOutlineEdit size={16}></AiOutlineEdit></div>
                    <div> Answer</div>
                </div>
                <div className="tiny-div"></div>
                <div className="q-ask-ans-post">
                    <div><RxPencil1 size={16}></RxPencil1></div>
                    <div>Post</div>
                </div>
            </div>
        </div>
    );
}