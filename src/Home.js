import React from "react";
import { Space } from "./components/myspaces";
import { Ques } from "./components/ques-section";
import { Post } from "./components/posts";
import { Feed } from "./components/feeds";
import { SpacesToFollow } from "./components/spaces-to-follow";
import "./Home.css";

export const Home = () => {
    return (
        <div className="quora-home">
            <div className="q-b-border-box">
                <div className="q-d-initial q-flex">
                    <div className="div1">
                        <div className="inside-div1">
                            <Space />
                        </div>
                    </div>
                    <div className="div2">
                        <Ques />
                        <Feed />
                    </div>
                    <div className="div3">
                        <div className="inside-div3">
                            <SpacesToFollow />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}