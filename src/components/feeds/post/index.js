import React, { useState } from "react";
import { BiUpvote, BiDownvote, BiRefresh, BiMessageRounded } from "react-icons/bi";
import "./post.css";

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
                        {data.profileName}
                    </div>
                    <div className="profile-about">
                        {/* Full Stack Developer | Tech Ethusiast */}
                        {data.profileAbout}
                    </div>
                </div>
            </div>
            <div className="post-middle">
                <img src={data.img} alt="" />
            </div>
            <div className="post-bottom">
                <div className="post-bottom-icons">
                    <div className="up-down-vote-div">
                        <div className="upvote-container">
                            <BiUpvote size={22} onClick={() => setupvoteCount(upvoteCount + 1)} />
                            <div className="upvote">
                                <span>{upvoteCount}</span>
                            </div>
                        </div>
                        <div className="q-b-icon">
                            <BiDownvote size={22} onClick={() => setupvoteCount(upvoteCount - 1)} />
                        </div>
                    </div>
                    <div className="q-b-icon"><BiRefresh size={22} /> <span>{data.shareCount}</span></div>
                    <div className="q-b-icon"><BiMessageRounded size={22} /> <span>{data.comments}</span></div>
                </div>
            </div>
        </div>
    );
}