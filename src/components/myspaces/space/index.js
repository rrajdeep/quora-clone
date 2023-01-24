import React from "react";

export const Spacename = (props) => {
    return (
        <div className="spaces-contaier-item" key={props.data.id}>
                <div className="spaces-div">
                    <div className="spaces-image-div"><img src={props.data.img} alt="myspace" /></div>
                    <div className="space-title">{props.data.name}</div>
                </div>
            </div>
    );
}