import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideMenu.css";
import EventNoteIcon from "@material-ui/icons/EventNote";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import SportsHandballIcon from "@material-ui/icons/SportsHandball";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

function SideMenu() {
    const [displaySignOut, setDisplaySignOut] = useState(false);
    const [arrowState, setArrowState] = useState(false);

    const displaySignOutHandler = () => {
        setDisplaySignOut(!displaySignOut);
        setArrowState(!arrowState);
    };

    return (
        <div className="sideMenu">
            <div className="sideMenu__top">
                <div
                    className="sideMenu__userInfo"
                    onClick={displaySignOutHandler}>
                    <Avatar />
                    <p>Quang Khai</p>
                    {arrowState === false ? (
                        <KeyboardArrowDownIcon />
                    ) : (
                        <KeyboardArrowRightIcon />
                    )}
                    {displaySignOut === false ? (
                        <a
                            className="sideMenu__userInfoDetail"
                            style={{ display: "none" }}
                            href="/signout">
                            Sign out
                        </a>
                    ) : (
                        <a
                            className="sideMenu__userInfoDetail"
                            style={{ display: "block" }}
                            href="/signout">
                            Sign out
                        </a>
                    )}
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}>
                    Add Note
                </Button>

                <NavLink
                    exact
                    to="/workspace"
                    className="sideMenu__allNotesLink"
                    activeClassName="sideMenu__link--active">
                    <EventNoteIcon />
                    <p>My Notes</p>
                </NavLink>

                <NavLink
                    exact
                    to="/trash"
                    className="sideMenu__trashLink"
                    activeClassName="sideMenu__link--active">
                    <DeleteIcon />
                    <p>Trash</p>
                </NavLink>
            </div>

            <div className="sideMenu__bottom">
                <SportsHandballIcon />
                <p>KKKDQ Team</p>
            </div>
        </div>
    );
}

export default SideMenu;
