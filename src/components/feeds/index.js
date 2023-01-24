import React from "react";
import { Post } from "./post";
import "./feed.css";

import { feedData } from "../../mockdata";

export const Feed = () => {
    return (
        <div className="post">
            {
                feedData.map((fData, index) => {
                    return (
                        <Post key={index} data={fData}></Post>
                    )
                })
            }
        </div>
       
    );
}