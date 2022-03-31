import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinussCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className="header">
        {/* <h1>This is the header</h1> */}

        <div className="header__left">
             <img 
               src='/images/download.jpg' 
               alt=''
            />

             <div className="header__search">
                <SearchIcon />
                 <input type="text" />
             </div>
        </div>
 
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My 
          Network" />
          <HeaderOption Icon={BusinussCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon}
          title="NotificationsIcon" />
          <HeaderOption avatar=" "
          title="me"
          />
        </div>
    </div>
  )
}

export default Header 