import { Avatar } from "@material-ui/core";
import React from 'react'
import "./Sidebar.css";

function Sidebar() {

    const recentItem = ( topic ) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
  <div className="sidebar">
      <div className="sidebar__top">
          <img 
          src="/images/asmah.jpg" 
          alt='' 
          />
          <Avatar className="sidebar__avatar" 
          img src=" " />
          <h2>Emmanuel Asmah</h2>
          <h4>atbhae100@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
          <div className="sidebar__stats">
              <p>Who viewed you</p>
              <p className="sidebar__statNumber">5,689</p>
              </div>
              <div className="sidebar__stats">
                  <p>Views on post</p>
                  <p className="sidebar__statNumber">5,461</p>
          </div>
      </div>

      <div className="sidebar__bottom"></div>
         <p>Recent</p>
         {recentItem('reactjs')}
         {recentItem('programming')}
         {recentItem('softwareengineering')}
         {recentItem('design')}
         {recentItem('developer')}
  </div>
  );
}

export default Sidebar;