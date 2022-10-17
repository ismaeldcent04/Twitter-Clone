import React from "react";
import "../CSS/Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreOutlinedIcon from "@material-ui/icons/MoreOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import { Avatar, Button } from "@material-ui/core";
import SidebarProfileButton from "./SidebarProfileButton";

function Sidebar({ avatar, userName, displayName }) {
  return (
    <div className="sidebar">
      {/*Icon*/}
      <TwitterIcon className="appLogo" />
      {/*SidebarOptions*/}
      <SidebarOption active text="Home" href="/" Icon={HomeOutlinedIcon} />
      <SidebarOption
        text="Explore"
        href="/explore"
        Icon={ExploreOutlinedIcon}
      />

      <SidebarOption
        text="Notificacions"
        href="/notificacions"
        Icon={NotificationsOutlinedIcon}
      />

      <SidebarOption text="Messages" Icon={EmailOutlinedIcon} />
      <SidebarOption
        text="Bookmarks"
        href="/bookmarks"
        Icon={BookmarkBorderOutlinedIcon}
      />
      <SidebarOption text="List" href="/list" Icon={DescriptionOutlinedIcon} />
      <SidebarOption
        text="Profile"
        href="/profile"
        Icon={PersonOutlineOutlinedIcon}
      />

      <SidebarOption text="More" Icon={MoreOutlinedIcon} />

      {/*TweetButton*/}
      <Button variant="outlined" className="sidebarButton" fullWidth>
        Tweet
      </Button>

      {/*Profile_Twitterbutton*/}
      <SidebarProfileButton
        FullName="Ismael Dicent"
        UserName="@ismaeldcent04"
      />
    </div>
  );
}

export default Sidebar;
