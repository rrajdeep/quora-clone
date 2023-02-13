import React, { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { BsBellSlashFill, BsBellSlash } from "react-icons/bs";

export const Currentnotification = (props) => {

    const data = props.data;
    let notif = props.data.content;
    var notifContent;
    if(notif.length >= 165) {
        notifContent = notif.slice(0,162) + "...";
    } else {
        notifContent = notif;
    }

    const [markAsRead, setMarkAsRead] = useState(false)

    return (
        <div className={`${markAsRead === true && "markRead"} notif-content`} onClick={() => setMarkAsRead(true)}>
            <div>
                <div className="notif-profile-div">
                    <CgProfile size={20} />
                </div>
            </div>
            <div>
                <div className="notif-content-middle">
                    <div className="">{data.name} <span>&#x2022;</span> </div>
                    <div className="">Posted by {data.by} <span>&#x2022;</span> </div>
                    <div className="">{data.time} ago</div>
                </div>
                <div className="notif-info-div">
                    <div className="notif-text">
                        {notifContent}    
                    </div>
                </div>
            </div>
            <div className="notif-right-menu">
                <div className="notif-menu-dots">
                    <RxDotsHorizontal size={22} />
                </div>
            </div>
        </div>
        // <div className="q-notification-box">
        //     <div className="notif-header">
        //         <div className="notif-name">{props.name}</div>
        //         <div className="notif-setting">Settings</div>
        //     </div>
        //     <div className={`${markAsRead === true && "markRead"} notif-content`} onClick={() => setMarkAsRead(true)}>
        //         <div>
        //             <div className="notif-profile-div">
        //                 <CgProfile size={20} />
        //             </div>
        //         </div>
        //         <div>
        //             <div className="notif-content-middle">
        //                 <div className="">UNIQUE FACTS</div>
        //                 <div className="">Posted by Sheila Lewis</div>
        //                 <div className="">13m ago</div>
        //             </div>
        //             <div className="notif-info-div">
        //                 <div className="notif-text">
        //                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="notif-right-menu">
        //             <div className="notif-menu-dots">
        //                 <RxDotsHorizontal size={22} />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}