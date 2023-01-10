import React, { useState } from "react";
import { AiOutlineHome, AiOutlineEdit, AiOutlineBell, AiOutlineProfile, AiOutlineGlobal, AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsPeople } from "react-icons/bs";
import "./header.css";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [activeLink, setLink] = useState("home");

    const setActiveLink = (str) => {
        setLink(str);
    }

   return (
        <div className="q-position-fixed">
            <div className="q-width-1072">
                <div className="navbar-container">
                    <div className="logo">
                        <Link to="/"><img src="./images/quora-logo.png" alt="logo" /></Link>
                    </div>
                    <div className="nav-icons-cntainer">
                        <div className="nav-icons">
                            <div className={`${activeLink === 'home' && 'activeLink'} home nav-link-div`} onClick={() => setActiveLink("home")}>
                                <Link to="/" className="">
                                    <div className="">
                                        <AiOutlineHome size={25}></AiOutlineHome>
                                    </div>
                                </Link>
                            </div>
                            <div className="icon-bottom-div"></div>
                        </div>
                        <div className="nav-icons">
                            <div className={`${activeLink === 'followings' && 'activeLink'} followings nav-link-div`} onClick={() => setActiveLink("followings")}>
                                <Link to="/followings" className="">
                                    <div className="">
                                        <FaRegListAlt size={25}></FaRegListAlt>
                                    </div>
                                </Link>
                            </div>
                            <div className="icon-bottom-div"></div>
                        </div>
                        <div className="nav-icons">
                            <div className={`${activeLink === 'answer' && 'activeLink'} answer nav-link-div`} onClick={() => setActiveLink("answer")}>
                                <Link to="/answer">
                                    <div className="">
                                        <AiOutlineEdit size={25}></AiOutlineEdit>
                                    </div>
                                </Link>
                            </div>
                            <div className="icon-bottom-div"></div>
                        </div>
                        <div className="nav-icons">
                            <div className={`${activeLink === 'spaces' && 'activeLink'} spaces nav-link-div`} onClick={() => setActiveLink("spaces")}>
                                <Link to="/spaces">
                                    <div className="">
                                        <BsPeople size={25}></BsPeople>
                                    </div>
                                </Link>
                            </div>
                            <div className="icon-bottom-div"></div>
                        </div>
                        <div className="nav-icons">
                            <div className={`${activeLink === 'notifications' && 'activeLink'} notifications nav-link-div`} onClick={() => setActiveLink("notifications")}>
                                <Link to="/notifications">
                                    <div className="">
                                        <AiOutlineBell size={25}></AiOutlineBell>
                                    </div>
                                </Link>
                            </div>
                            <div className="icon-bottom-div"></div>
                        </div>
                    </div>
                    <div className="input-box">
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
                    <div className="nav-icons nav-profile-div">
                        <div className="nav-profile-div">
                            <CgProfile size={25}></CgProfile>
                        </div>
                    </div>
                    <div className="nav-icons nav-globe">
                        <div className="globe-icon">
                            <AiOutlineGlobal size={25}></AiOutlineGlobal>
                        </div>
                    </div>
                    <div className="add-question-div">
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
        </div>
    )
}