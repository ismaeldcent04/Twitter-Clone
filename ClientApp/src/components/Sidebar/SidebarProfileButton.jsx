import React from "react";
import "../CSS/Sidebar.css";
import { Button, Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function SidebarProfileButton(props) {
  return (
    <Button
      className="sidebar_profileButton"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = "/profile";
      }}
    >
      <Avatar
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRbiMjUoOxJCAMB9poSO2wLg34m7OxmyaT-A&usqp=CAU"
        className="sidebar_avatarIcon"
      />
      <div className="sidebar_profileText">
        <h5>{props.FullName}</h5>
        <h6>{props.UserName}</h6>
      </div>
      <MoreHorizIcon className="more_icon" />
    </Button>
  );
}
export default SidebarProfileButton;
