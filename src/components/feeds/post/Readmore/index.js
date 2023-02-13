import React, { useState } from "react";

export const Answer = (props) => {
    const data = props.data;
    if(data.length > 140) {
        var initiaState = true
    } else {
        initiaState = false
    }
    
    const [isShowMore, setIsShowMore] = useState(initiaState);

    const toggleReadMore = () => {
        setIsShowMore(!isShowMore);
      };


    return (
        <div>
            <div style={{ "textAlign": "justify", "paddingLeft": "8px", "paddingRight": "8px" }}>
                { isShowMore ? data.slice(0, 137): data}
                <span className="more" onClick={toggleReadMore}>
                    {isShowMore ? "(more)" : ""}
                </span>
            </div>
        </div>
    )
}