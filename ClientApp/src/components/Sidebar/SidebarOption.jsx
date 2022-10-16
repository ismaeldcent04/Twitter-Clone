import React from "react";
import "../CSS/sidebarOption.css";

function SidebarOption({ active, text, Icon, href }) {
  return (
    <a
      className={`sidebarOption ${active && "sidebarOption--active"}`}
      href={href}
    >
      <Icon className="icons" />
      <h2>{text}</h2>
    </a>
  );
}
export default SidebarOption;
