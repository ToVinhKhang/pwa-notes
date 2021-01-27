import { Avatar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";
import EventNoteIcon from "@material-ui/icons/EventNote";
import DeleteIcon from "@material-ui/icons/Delete";

function SideMenu() {
  return (
    <div className="sideMenu">
      <div className="sideMenu__userInfo">
        <Avatar />
        <p>Quang Khai</p>
      </div>
      <NavLink
        exact
        to="/workspace"
        className="sideMenu__allNotesLink"
        activeClassName="sideMenu__link--active"
      >
        <EventNoteIcon />
        <p>My Notes</p>
      </NavLink>
      <NavLink
        exact
        to="/trash"
        className="sideMenu__trashLink"
        activeClassName="sideMenu__link--active"
      >
        <DeleteIcon />
        <p>Trash</p>
      </NavLink>
    </div>
  );
}

export default SideMenu;
