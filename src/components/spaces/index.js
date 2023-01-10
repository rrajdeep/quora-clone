import React from "react";
import { Link } from "react-router-dom";
import "./spaces.css";

export const Space = () => {
    return (
        <div className="spaces-container">
            <div className="spaces-contaier-item">
                <div className="spaces-div">
                    <div>+</div>
                    <div>Create Space</div>
                </div>
            </div>
            <div className="spaces-contaier-item">
                <div className="spaces-div">
                    <div className="spaces-image-div"><img src="./images/stock-market.PNG" alt="stock" /></div>
                    <div className="space-title">India Stock Market</div>
                </div>
            </div>
            <div className="spaces-contaier-item">
                <div className="spaces-div">
                    <div className="spaces-image-div"><img src="./images/hacking.PNG" alt="hacking" /></div>
                    <div className="space-title">Ethickal hacking</div>
                </div>
            </div>
            <div className="spaces-contaier-item">
                <div className="spaces-div">
                    <div className="spaces-image-div"><img src="./images/indian-map.PNG" alt="india" /></div>
                    <div className="space-title">Real History of India</div>
                </div>
            </div>
            <div className="spaces-contaier-item">
                <div className="spaces-div">
                    <div className="spaces-image-div"><img src="./images/meme.PNG" alt="memes" /></div>
                    <div className="space-title">Memes</div>
                </div>
            </div>
            <div className="spaces-contaier-item">
                <div className="spaces-div">
                    <div className="spaces-image-div"><img src="./images/tech-programming.PNG" alt="tech" /></div>
                    <div className="space-title">Tech Programming</div>
                </div>
            </div>
            
            <div>
                <hr />
            </div>
            <div>
                <span>About </span>
                <span className="q-below-spaces">Career </span>
                <span className="q-below-spaces">Terms </span>
                <span className="q-below-spaces">Privacy </span>
                <span className="q-below-spaces">Acceptable Use </span>
                <span className="q-below-spaces">Business </span>
                <span className="q-below-spaces">Press </span>
                <span className="q-below-spaces">Your Ad Choices </span>
                <span className="q-below-spaces">Grievence Officer </span>
            </div>
                <Link to="/posts">Post</Link>
                <Link to="/ques">Ques section</Link>
                <Link to="/spaces-to-follow">Spaces to Follow</Link>
        </div>
    );
}