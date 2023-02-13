import React, { useState } from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import { BsBellSlash } from "react-icons/bs";
import { Currentnotification } from "./notification-component";
import { notificationData } from "../data/mockdata";
import "./notifications.css";

export const Notifications = () => {

    const [actNotif, setActNotif] = useState("all-notifications");

    return (
        <div className="notifications-container">
            <div className="notification-container-outer">
                <div className="notifications-left">
                    <div className="filter-div">
                        <div>
                            Filters
                        </div>
                        <div>
                            <hr />
                        </div>
                    </div>
                    <div className={`${actNotif === "all-notifications" && "active-notification-div"} notification-div`} onClick={() => setActNotif("all-notifications")}>
                        <div className="notification-tiltle">
                            <div>
                                All Notifications
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "stories" && "active-notification-div"} notification-div`} onClick={() => setActNotif("stories")}>
                        <div className="notification-tiltle">
                            <div>
                                Stories
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "questions" && "active-notification-div"} notification-div`} onClick={() => setActNotif("questions")}>
                        <div className="notification-tiltle">
                            <div>
                                Questions
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "spaces" && "active-notification-div"} notification-div`} onClick={() => setActNotif("spaces")}>
                        <div className="notification-tiltle">
                            <div>
                                Spaces
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "people-updates" && "active-notification-div"} notification-div`} onClick={() => setActNotif("people-updates")}>
                        <div className="notification-tiltle">
                            <div>
                                People updates
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "comments-mentions" && "active-notification-div"} notification-div`} onClick={() => setActNotif("comments-mentions")}>
                        <div className="notification-tiltle">
                            <div>
                                Comments and mentions
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "upvotes" && "active-notification-div"} notification-div`} onClick={() => setActNotif("upvotes")}>
                        <div className="notification-tiltle">
                            <div>
                                Upvotes
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "your-content" && "active-notification-div"} notification-div`} onClick={() => setActNotif("your-content")}>
                        <div className="notification-tiltle">
                            <div>
                                Your content
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "your-profile" && "active-notification-div"} notification-div`} onClick={() => setActNotif("your-profile")}>
                        <div className="notification-tiltle">
                            <div>
                                Your profile
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "announcements" && "active-notification-div"} notification-div`} onClick={() => setActNotif("announcements")}>
                        <div className="notification-tiltle">
                            <div>
                                Announcements
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "earning" && "active-notification-div"} notification-div`} onClick={() => setActNotif("earning")}>
                        <div className="notification-tiltle">
                            <div>
                                Earning
                            </div>
                        </div>
                    </div>
                    <div className={`${actNotif === "subscriptions" && "active-notification-div"} notification-div`} onClick={() => setActNotif("subscriptions")}>
                        <div className="notification-tiltle">
                            <div>
                                Subscriptions
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {
                actNotif === "all-notifications" &&
                // <Currentnotification name="Notifications"></Currentnotification>
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Notifications</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    {
                        notificationData.map((ele, index) => {
                            return <Currentnotification key={index} data={ele}></Currentnotification>
                        })
                    }
                </div>

            }
            {
                actNotif === "stories" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Stories</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div>
                            <RxDotsHorizontal />
                        </div>
                    </div>
                </div>
            }
            {
                actNotif === "questions" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Questions</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "spaces" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Spaces</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "people-updates" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">People updates</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "comments-mentions" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Comments and mentions</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "upvotes" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Upvotes</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "your-content" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Your content</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "your-profile" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Your profile</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "announcements" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Announcements</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "earning" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Earnings</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div><RxDotsHorizontal /></div>
                    </div>
                </div>
            }
            {
                actNotif === "subscriptions" &&
                <div className="q-notification-box">
                    <div className="notif-header">
                        <div className="notif-name">Subscriptions</div>
                        <div className="notif-setting">Settings</div>
                    </div>
                    <div className="notif-content">
                        <div></div>
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <div>
                                {/* <BsBellSlashFill size={45} /> */}
                                <BsBellSlash size={50} />
                            </div>
                            <div className="no-new-notif">
                                No New Notifications
                            </div>
                            <div className="show-up-notif-div">
                                Notifications you received in the last 30 days will show up here.
                            </div>
                        </div>
                        <div>
                            <RxDotsHorizontal />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}