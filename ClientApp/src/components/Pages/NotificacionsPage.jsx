import React from "react";
import NotificationsPageFeed from "../Feed/NotificationsPageFeed";
import Sidebar from "../Sidebar/Sidebar";
import Widgets from "../Widgets/Widgets";

function NotificacionsPage() {
  return (
    <div>
      {/*SIDEBAR */}
      <Sidebar />
      {/*NOTIFICACIONS FEED */}
      <NotificationsPageFeed />
      {/*WIDGETS*/}
      <Widgets />
    </div>
  );
}
export default NotificacionsPage;
