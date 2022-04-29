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
import SharedPost from "./SharedPost";


 function SharedPosts() {
  const user = auth.currentUser;
  const [userFriends, setUserFriends] = useState([]);
  const [sharedPosts, setSharedPosts] = useState([]);
  const [debounce, setDebounce] = useState(false);
  // Shared Post component loads them in
  
  

  //orderBy("name", "desc")
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

  useEffect(async () => {
    const dfRef = doc(db, "Shared", user.uid);
    const dcollections = await getDoc(dfRef);
    const ddata = dcollections.data();
    let tempArray = [];
    if (ddata != null) {
      Object.keys(ddata).forEach(function (key) {
        tempArray.push(key);
      });

      if (tempArray.length != 0) {
        setSharedPosts(tempArray);
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
    <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl flex-grow  pb-44 pt-6 mr-4
    xl:mr-40 overflow-y-auto">
    {
         
        sharedPosts?.map((item) => 
        <SharedPost key_id = {item} friends = {userFriends}/>
   )
       }
  </div>)
  {/* 
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
        */}
 
}

export default SharedPosts;