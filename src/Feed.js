import React, { useEffect, useState } from 'react';
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from './InputOption';
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalenderViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from "./Post";
// import { db } from "./firebase";


function Feed() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").onSnapshot(snapshot => (
  //     setPosts(
  //       snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }
  //     )))
  //   )
  //   );
  // }, [])

const sendPost = e => {
  e.preventDefault();

  // db.
};

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text"/>
                    <button onClick={sendPost} type="text">Send</button>
                </form>
            </div>
            <div className="feed__inputOptions">
              <InputOption Icon={ImageIcon} title='Photo' 
              color="#70B5F9" />
              <InputOption Icon={SubscriptionsIcon} title="video"
              color="#E7A33E" />
              <InputOption Icon={EventNoteIcon} title="Event"
              color="#C0CBCD" />
              <InputOption 
                Icon={CalenderViewDayIcon} 
                title="Write article" 
                color="#7FC15E"
                />
            </div>
        </div>

        {/* {post} */}
        {posts.map((posts) => (
          <Post />
        ))}
        <Post 
        name='Emmanuel Asmah' 
        description='This is a test'
        message="WOW this worked"
        />
    </div>
  )
}

export default Feed