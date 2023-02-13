import React from "react";

export const Qspace = (props) => {
    const data = props.data;
    // const imgUrl = data.img;
    return (
        <div className="space-division" key={props.id}>
            <div className="s-img-div"><img src={'./images/' + data.img} alt="space" /></div>
            <div>
                <div className="space-heading">{data.name}</div>
                <div className="space-info">{data.info}</div>
            </div>
        </div>
    );
}