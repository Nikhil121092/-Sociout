import React from 'react';
import './leftSidebar.css';
import {
  HomeOutlined,
  PermIdentityOutlined,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <a href='/' className='anchor'>
            <li className="sidebarListItem">
              <HomeOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Home</span>
            </li>
          </a>
          <a href='/profile' className='anchor'>
            <li className="sidebarListItem">
              <PermIdentityOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Profile </span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}




