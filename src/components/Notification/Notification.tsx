import React from "react";
import "./notification.css";

interface NotificationProps {
  userImage: string;
  userName: string;
  mainMsg: string;
  msgBoldText?: string;
  ntfDate: string;
  new: boolean;
  message?: string;
  postImage?: string;
}

const Notification = (props: NotificationProps) => {
  return (
    <div className={`notification${props.new ? " new" : ""}`}>
      <div className="user_profile_image_container">
        <img
          className="user_profile_image"
          src={props.userImage}
          alt={props.userName}
        />
      </div>
      <div className="notification_details">
        <div className="notification_message_details">
          <div className="ntf_details">
            <div className="ntf_msg">
              <span className="user_name">{props.userName}</span>
              {props.mainMsg}
              {props.msgBoldText && (
                <span className="notification_bold_text">
                  {props.msgBoldText}
                </span>
              )}
              {props.new && <div className="red_circle"></div>}
            </div>
          </div>
        </div>
        <div className="notification_time">{props.ntfDate}</div>
        {props.message && <p className="private_message">{props.message}</p>}
      </div>
      {props.postImage && (
        <div className="post_image">
          <img src={props.postImage} alt="" />
        </div>
      )}
      {/* {props.new && <div className="red_circle"></div>} */}
    </div>
  );
};

export default Notification;
