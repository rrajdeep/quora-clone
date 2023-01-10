import React from "react";
import { BiUpvote, BiDownvote, BiRefresh, BiMessageRounded } from "react-icons/bi";
import "./post.css";

export const Post = () => {
    return (
        <div className="post">
            <div className="post-container">
                <div className="post-top">
                    <div className="profile-img-div">
                        <img src="./images/hacking.png" alt="profile" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">
                            Rajdeep Rathore
                        </div>
                        <div className="profile-about">
                            Full Stack Developer | Tech Ethusiast
                        </div>
                    </div>
                </div>
                <div className="post-middle">
                    <img src="./images/stock-market.png" alt="" />
                </div>
                <div className="post-bottom">
                    <div className="up-down-vote-div">
                        <BiUpvote size={22} />
                        <div className="upvote"><span>10</span></div>
                        <BiDownvote size={22} />
                    </div>
                    <div><BiRefresh size={22} /> <span>5</span></div>
                    <div><BiMessageRounded size={22} /> <span>4</span></div>
                </div>
            </div>

            <div className="post-container">
                <div className="post-top">
                    <div className="profile-img-div">
                        <img src="./images/hacking.png" alt="profile" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">
                            Rajdeep Rathore
                        </div>
                        <div className="profile-about">
                            Full Stack Developer | Tech Ethusiast
                        </div>
                    </div>
                </div>
                <div className="post-middle">
                    <img src="./images/stock-market.png" alt="" />
                </div>
                <div className="post-bottom">
                    <div className="up-down-vote-div">
                        <BiUpvote size={22} />
                        <div className="upvote"><span>10</span></div>
                        <BiDownvote size={22} />
                    </div>
                    <div><BiRefresh size={22} /> <span>5</span></div>
                    <div><BiMessageRounded size={22} /> <span>4</span></div>
                </div>
            </div>


            <div className="post-container">
                <div className="post-top">
                    <div className="profile-img-div">
                        <img src="./images/hacking.png" alt="profile" />
                    </div>
                    <div className="profile-info">
                        <div className="profile-name">
                            Rajdeep Rathore
                        </div>
                        <div className="profile-about">
                            Full Stack Developer | Tech Ethusiast
                        </div>
                    </div>
                </div>
                <div className="post-middle">
                    <img src="./images/stock-market.png" alt="" />
                </div>
                <div className="post-bottom">
                    <div className="up-down-vote-div">
                        <BiUpvote size={22} />
                        <div className="upvote"><span>10</span></div>
                        <BiDownvote size={22} />
                    </div>
                    <div><BiRefresh size={22} /> <span>5</span></div>
                    <div><BiMessageRounded size={22} /> <span>4</span></div>
                </div>
            </div>

        </div>
    );
}