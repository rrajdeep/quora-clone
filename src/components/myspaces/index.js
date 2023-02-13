import React from "react";
import { myspaces } from "../data/mockdata";
import { Spacename } from "./space";
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
            {
                myspaces.map((spacename, index) => {
                    return (
                        <Spacename key={index} data={spacename}></Spacename>
                    )
                })
            }
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
        </div>
    );
}