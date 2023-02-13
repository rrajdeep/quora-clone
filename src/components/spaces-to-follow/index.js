import React from "react";
import { spaceData } from "../data/mockdata";
import { Qspace } from "./space-component";
import './spaces-to-follow.css';

export const SpacesToFollow = () => {
    return(
        <div className="spaces-to-follow-div">
            <div className="space-top">
                Spaces to follow
            </div>
            {
                spaceData.map((sData,index)=> {
                   return (
                    <Qspace key={index} data={sData}></Qspace>
                   ) 
                })
            }
        </div>
    );
}