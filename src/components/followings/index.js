import React from "react";
import { Space } from "../myspaces";
import { Ques } from "../ques-section";
import { Feed } from "../feeds";
import "../home/home.css";

export const Followings = () => {
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
                </div>
            </div>
        </div>
    );
}