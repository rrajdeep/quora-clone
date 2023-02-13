import React, { useState } from "react";
import { AiOutlineHome, AiOutlineEdit, AiOutlineBell, AiOutlineGlobal, AiOutlineDown, AiOutlineSearch, AiOutlineClose, AiOutlineCaretRight } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsPeople, BsImages } from "react-icons/bs";
import { RxLetterCaseCapitalize } from "react-icons/rx";
import { SpacesToFollow } from "../spaces-to-follow";
import "./header.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [openQbox, setQbox] = useState("close");
    const [activeLink, setLink] = useState("home");
    const [toggleQuesModal, setQuesModal] = useState("add-question");
    const setActiveLink = (str) => {
        setLink(str);
    }

    return (
        <div className="q-position-fixed">
            <div className="q-width-1072">
                <div className="navbar-container">
                    <div className="logo" onClick={() => setActiveLink("home")}>
                        <Link to="/"><img src="./images/quora-logo.png" alt="logo" /></Link>
                    </div>
                    <div className="nav-icons-cntainer">
                        <Link to="/">
                            <div className="nav-icons" title="Home" onClick={() => setActiveLink("home")}>
                                <div className={`${activeLink === 'home' && 'activeLink'} home nav-link-div`}>
                                    <div className={activeLink === 'home' ? 'activeLink' : 'link-icon-svg'}>
                                        <AiOutlineHome size={25}></AiOutlineHome>
                                    </div>
                                </div>
                                <div className="icon-bottom-div"></div>
                            </div>
                        </Link>

                        <Link to="/followings" className="">
                            <div className="nav-icons" title="Followings"  onClick={() => setActiveLink("followings")}>
                                <div className={`${activeLink === 'followings' && 'activeLink'} followings nav-link-div`}>
                                    <div className={activeLink === 'followings' ? 'activeLink' : 'link-icon-svg'}>
                                        <FaRegListAlt size={25}></FaRegListAlt>
                                    </div>
                                </div>
                                <div className="icon-bottom-div"></div>
                            </div>
                        </Link>

                        <Link to="/answer">
                            <div className="nav-icons" title="Answer" onClick={() => setActiveLink("answer")}>
                                <div className={`${activeLink === 'answer' && 'activeLink'} answer nav-link-div`}>
                                    <div className={activeLink === 'answer' ? 'activeLink' : 'link-icon-svg'}>
                                        <AiOutlineEdit size={25}></AiOutlineEdit>
                                    </div>
                                </div>
                                <div className="icon-bottom-div"></div>
                            </div>
                        </Link>

                        <Link to="/spaces">
                            <div className="nav-icons" title="Spaces" onClick={() => setActiveLink("spaces")}>
                                <div className={`${activeLink === 'spaces' && 'activeLink'} spaces nav-link-div`}>
                                        <div className={activeLink === 'spaces' ? 'activeLink' : 'link-icon-svg'}>
                                            <BsPeople size={25}></BsPeople>
                                        </div>
                                </div>
                                <div className="icon-bottom-div"></div>
                            </div>
                        </Link>

                        <Link to="/notifications">
                            <div className="nav-icons" title="Notifications" onClick={() => setActiveLink("notifications")}>
                                <div className={`${activeLink === 'notifications' && 'activeLink'} notifications nav-link-div`}>
                                    <div className={activeLink === 'notifications' ? 'activeLink' : 'link-icon-svg'}>
                                        <AiOutlineBell size={25}></AiOutlineBell>
                                    </div>
                                </div>
                                <div className="icon-bottom-div"></div>
                            </div>
                        </Link>
                    </div>
                    <div className="input-box" title="Search">
                        <div className="input-box-inner">
                            <div className="search-icon-div">
                                <AiOutlineSearch ></AiOutlineSearch>
                            </div>
                            <div className="input-div">
                                <input type="text" className="q-input" placeholder="Search Quora" />
                            </div>
                        </div>
                    </div>
                    <div className="quora-plus">
                        <div className="quora-plus-inner">
                            Try Quora+
                        </div>
                    </div>
                    <div className="nav-icons nav-profile-div" title="Profile">
                        <div className="nav-profile-div">
                            <CgProfile size={25}></CgProfile>
                        </div>
                    </div>
                    <div className="nav-icons nav-globe">
                        <div className="globe-icon">
                            <AiOutlineGlobal size={25}></AiOutlineGlobal>
                        </div>
                    </div>
                    <div className="add-question-div" onClick={() => setQbox("open")}>
                        <div className="add-question-inner">
                            <div>
                                <button className="add-ques-btn aq-bn-left " type="button">
                                    <div>
                                        <div>
                                            Add question
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <div className="add-ques-separator">
                            </div>
                            <div>
                                <button className="add-ques-btn aq-btn-right" type="button">
                                    <div>
                                        <div>
                                            <AiOutlineDown></AiOutlineDown>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {
                openQbox === "open" &&
                <div class="q-box-modal">
                    <div className="question-post-box">
                        <div className="q-box-top">
                            <div className="close-q-box">
                                <AiOutlineClose size={20} onClick={() => setQbox("close")} />
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
                                    <div className="cancel-btn-div" onClick={() => setQbox("close")}>
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
                                        <div className="cancel-btn-div" onClick={() => setQbox("close")}>
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
            {
                activeLink === "spaces" &&
                <div className="show-spaces">
                    <SpacesToFollow></SpacesToFollow>
                </div>
            }
        </div>
    )
}