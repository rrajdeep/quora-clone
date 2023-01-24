import React, { useState } from "react";
import { RiQuestionnaireLine } from "react-icons/ri";
import { AiOutlineEdit, AiOutlineClose, AiOutlineCaretRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RxPencil1, RxLetterCaseCapitalize } from "react-icons/rx";
import { BsImages } from "react-icons/bs"
import "./ques.css";


export const Ques = () => {
    const [openQuesBox, setQuesBox] = useState(false);
    const [toggleQuesModal, setQuesModal] = useState("add-question");

    return (
        <div className="ques-container">
            <div className="profile-n-ques-div">
                <div>
                    <CgProfile size={30} />
                </div>
                <div className="ask-share-div" onClick={() => setQuesBox(true)}>
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
                <div className="q-ask-ans-post" onClick={() => setQuesBox(true)}>
                    <div><RxPencil1 size={16}></RxPencil1></div>
                    <div>Post</div>
                </div>
            </div>


            {
                openQuesBox === true &&
                <div class="q-box-modal">
                    <div className="question-post-box">
                        <div className="q-box-top">
                            <div className="close-q-box">
                                <AiOutlineClose size={20} onClick={() => setQuesBox(false)} />
                            </div>
                            <div className={`${toggleQuesModal === "add-question" && "active-ques-div"} q-add-ques`} onClick={() => setQuesModal("add-question")}>
                                Add Question
                            </div>
                            <div className={`${toggleQuesModal === "create-post" && "active-ques-div"} q-create-post`} onClick={() => setQuesModal("create-post")}>
                                Create Post
                            </div>
                        </div>

                        {toggleQuesModal === "add-question" &&
                            <div>
                                <div className="q-box-middle">
                                    <div className="q-box-profile-n-share-with">
                                        <div className="q-share-profile">
                                            <CgProfile size={20} />
                                        </div>
                                        <div>
                                            <AiOutlineCaretRight size={15} />
                                        </div>
                                        <div className="q-share-to-div">
                                            <select>
                                                <optgroup>
                                                    <option value="public">Public</option>
                                                    <option vlaue="everyone">Everyone</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="ques-hint">
                                        Start your question with "What", "How", "Why", etc.
                                    </div>
                                    <div className="ques-input-div">
                                        <textarea type="text" className="ques-input-area" rows="8" />
                                    </div>
                                </div>
                                <div className="q-box-bottom">
                                    <div className="cancel-btn-div" onClick={() => setQuesBox(false)}>
                                        Cancel
                                    </div>
                                    <div className="add-question-btn-div">
                                        <div className="add-ques-btn-inner-div">
                                            Add question
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            toggleQuesModal === "create-post" &&
                            <div>
                                <div className="q-box-middle">
                                    <div className="q-box-profile-n-share-with">
                                        <div className="q-share-profile">
                                            <CgProfile size={20} />
                                        </div>
                                        <div>
                                            <AiOutlineCaretRight size={15} />
                                        </div>
                                        <div className="q-share-to-div">
                                            <select>
                                                <optgroup>
                                                    <option>Everyone</option>
                                                </optgroup>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="ques-hint">
                                        Say something...
                                    </div>
                                    <div className="ques-input-div">
                                        <textarea type="text" className="ques-input-area" rows="8" />
                                    </div>
                                </div>
                                <div className="c-post-bottom">
                                    <div className="c-post-inner-div">
                                        <div>
                                            <RxLetterCaseCapitalize size={15} />
                                        </div>
                                        <div>
                                            <BsImages size={15} />
                                        </div>
                                    </div>
                                    <div className="c-post-inner-div">
                                        <div className="cancel-btn-div" onClick={() => setQuesBox(false)}>
                                            Cancel
                                        </div>
                                        <div className="add-question-btn-div">
                                            <div className="add-ques-btn-inner-div">
                                                Post
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }

        </div>
    );
}