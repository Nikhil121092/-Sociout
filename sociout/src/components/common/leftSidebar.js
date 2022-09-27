import React from 'react';
import './leftSidebar.css';
import {
  RssFeed,
  PeopleOutlined,
  MessageOutlined,
  NotificationsNoneOutlined,
  TravelExploreOutlined,
  PermIdentityOutlined,
  SettingsOutlined,
  LogoutOutlined
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <PeopleOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">My community</span>
          </li>
          <li className="sidebarListItem">
            <MessageOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Messages</span>
          </li>
          <li className="sidebarListItem">
            <NotificationsNoneOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Notification</span>
          </li>
          <li className="sidebarListItem">
            <TravelExploreOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Explore</span>
          </li>
          <li className="sidebarListItem">
            <PermIdentityOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Profile</span>
          </li>
          <li className="sidebarListItem">
            <SettingsOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Settings</span>
          </li>
          <li className="sidebarListItem">
            <LogoutOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
}