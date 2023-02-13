import React, { useState } from "react";
import { BiUpvote, BiDownvote, BiRefresh, BiMessageRounded } from "react-icons/bi";
import "./post.css";
import { Answer } from "./Readmore";

export const Post = (props) => {
    const data = props.data;
    const [upvoteCount, setupvoteCount] = useState(data.upvotes);

    return (
        <div className="post-container" key={data.id}>
            <div className="post-top">
                <div className="profile-img-div">
                    <img src="./images/hacking.png" alt="profile" />
                </div>
                <div className="profile-info">
                    <div className="profile-name">
                        {data.profileName} <span>&#x2022;</span> <span className="follow-text">Follow</span>
                    </div>
                    <div className="profile-about">
                        {data.profileAbout} <span>&#x2022;</span> <span>{data.since}</span>
                    </div>
                </div>
            </div>

            <div className="post-middle">
                <div style={{"paddingLeft": "8px", "paddingRight": "8px"}}>
                    <b>{data.question}</b>
                </div>
                <Answer data={data.ans} />    
                <div>
                    <img src={data.img} alt="" />
                </div>
            </div>
            <div className="post-bottom">
                <div className="post-bottom-icons">
                    <div className="up-down-vote-div">
                        <div className="upvote-container">
                            <BiUpvote size={22} onClick={() => setupvoteCount(upvoteCount + 1)} style={{"cursor": "pointer"}} />
                            <div className="upvote">
                                <span>{upvoteCount}</span>
                            </div>
                        </div>
                        <div className="q-b-icon">
                            <BiDownvote size={22} onClick={() => setupvoteCount(upvoteCount - 1)} style={{"cursor": "pointer"}} />
                        </div>
                    </div>
                    <div className="q-b-icon"><BiRefresh size={22} /> <span>{data.shareCount}</span></div>
                    <div className="q-b-icon"><BiMessageRounded size={22} /> <span>{data.comments}</span></div>
                </div>
            </div>
        </div >
    );
}





