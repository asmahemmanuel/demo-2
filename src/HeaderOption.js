import React from 'react';
import "./HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOption({ avatar, Icon, title }) {
  return (
  <div className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && <Avatar className='headerOption__icon' src=
      {avatar}/> }
      <h4 className="headerOption__titile">{title}</h4>
    </div>
  );  
}

export default HeaderOption;