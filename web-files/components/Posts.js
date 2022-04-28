import { auth, db } from "../firebase";

import Post from "./Post";
import { useState, useEffect, useRef } from "react";

import { useCollection } from "react-firebase-hooks/firestore";
import {
  collection,
  query,
  orderBy,
  getDoc,
  getDocs,
  doc,
} from "firebase/firestore";
function Posts() {
  const user = auth.currentUser;

  const [profilePicture, setProfilePicture] = useState(null);
  const [userFriends, setUserFriends] = useState([]);
  const [debounce, setDebounce] = useState(false);
  // Gets the posts from the database and renders them in real time
  const [realtimePosts, loading, error] = useCollection(
    query(collection(db, "Posts"), orderBy("timestamp", "desc"))
  );

  useEffect(async () => {
    const sfRef = doc(db, "Friends", user.uid);
    const collections = await getDoc(sfRef);
    const data = collections.data();
    let tempArray = [];
    if (data != null) {
      Object.keys(data).forEach(function (key) {
        tempArray.push(key);
      });

      if (tempArray.length != 0) {
        setUserFriends(tempArray);
      }

      setDebounce(true);
    } else {
      setDebounce(true);
    }
  }, []);

  //orderBy("name", "desc")
  if (debounce == false) {
    return false;
  }
  return (
    <div>
      {console.log(userFriends)}
      {realtimePosts?.docs.map((post) => (
        <Post
          key_id={post.id}
          name={post.data().username}
          message={post.data().content}
          uid={post.data().uid}
          timestamp={post.data().timestamp}
          likes={post.data().likes}
          postImage={post.data().postImage}
          profile_picture={post.data().profile_picture || null}
          friends={userFriends}
        />
      ))}
    </div>
  );
  {
    /* 
    <div>
      {realtimePosts
        ? 
        realtimePosts?.docs.map((post) => (
            <Post
              key={post.id}
              name={post.data().username}
              message={post.data().content}
             
              timestamp={post.data().timestamp}
              
              postImage={post.data().postImage}
            />
          ))
        : posts.map((post) => (
            <Post
              key={post.id}
              name={post.username}
              message={post.content}
             
              timestamp={post.timestamp}
              postImage={post.postImage}
            />
          ))}
    </div>
        */
  }
}

export default Posts;
