import "./App.css";
import Notification from "./components/Notification/Notification";
import MarkWebber from "./assets/images/avatar-mark-webber.webp";
import AngelaGray from "./assets/images/avatar-angela-gray.webp";
import JacobThompson from "./assets/images/avatar-jacob-thompson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "./assets/images/avatar-kimberly-smith.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import AnnaKim from "./assets/images/avatar-anna-kim.webp";
import ChessImage from "./assets/images/image-chess.webp";
import { useEffect, useState } from "react";

interface NotificationType {
  userImage: string;
  userName: string;
  mainMsg: string;
  msgBoldText?: string;
  ntfDate: string;
  new: boolean;
  message?: string;
  postImage?: string;
}

function App() {
  const [unReadNews, setUnreadNews] = useState<number>(0);
  const [notifications, setNotifications] = useState<NotificationType[]>([
    {
      userImage: MarkWebber,
      userName: "Mark Webber",
      mainMsg: "reacted to your recent post",
      msgBoldText: "My first tournament today!",
      ntfDate: "1 m ago",
      new: true,
    },
    {
      userImage: AngelaGray,
      userName: "Angela Gray",
      mainMsg: "followed you",
      ntfDate: "5 m ago",
      new: true,
    },
    {
      userImage: JacobThompson,
      userName: "Jacob Thompson",
      mainMsg: "has joined your group",
      msgBoldText: "Chess Club",
      ntfDate: "1 day ago",
      new: true,
    },
    {
      userImage: Rizky,
      userName: "Rizky Hasanuddin",
      mainMsg: "sent you a private message",
      ntfDate: "5 days ago",
      new: false,
      message: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.`,
    },
    {
      userImage: Kimberly,
      userName: "Kimberly Smith",
      mainMsg: "commented on your picture",
      ntfDate: "1 week ago",
      new: false,
      postImage: ChessImage,
    },
    {
      userImage: Nathan,
      userName: "Nathan Peterson",
      mainMsg: "reacted to your recent post",
      msgBoldText: "5 end-game strategies to increase your win rate",
      ntfDate: "2 weeks ago",
      new: false,
    },
    {
      userImage: AnnaKim,
      userName: "Anna Kim",
      mainMsg: "left the group",
      msgBoldText: "Chess Club",
      ntfDate: "2 weeks ago",
      new: false,
    },
  ]);

  const calculateNews = () => {
    let count = 0;
    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i].new === true) {
        count += 1;
      }
    }
    setUnreadNews(count);
  };

  useEffect(() => {
    calculateNews();
  });

  const handleMarkasRead = () => {
    setUnreadNews(0);

    const updatedNotifications = [...notifications];

    for (let i = 0; i < updatedNotifications.length; i++) {
      if (updatedNotifications[i].new === true) {
        updatedNotifications[i].new = false;
      }
    }

    setNotifications(updatedNotifications);
  };

  return (
    <div className="notification_app">
      <div className="notification_container">
        <div className="notifications_card">
          <div className="notification_header">
            <div className="ntf_header_left">
              <p className="ntf_header_title">Notification</p>
              <p className="notification_number">{unReadNews}</p>
            </div>
            <div className="ntf_header_right">
              <p className="mark_as_read" onClick={handleMarkasRead}>
                Mark all as read
              </p>
            </div>
          </div>
          <div className="notifcations_container">
            {notifications.length > 0 &&
              notifications.map((notification, index) => (
                <Notification
                  key={index}
                  userImage={notification.userImage}
                  userName={notification.userName}
                  mainMsg={notification.mainMsg}
                  msgBoldText={notification.msgBoldText}
                  ntfDate={notification.ntfDate}
                  new={notification.new}
                  message={notification.message}
                  postImage={notification.postImage}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
