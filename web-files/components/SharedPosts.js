import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Post from "./Post";
import {collection, query, orderBy} from "firebase/firestore";


 function SharedPosts() {

  // Shared Post component loads them in

     const [realtimePosts, loading, error] =  useCollection(
     query(collection(db, "Posts"), orderBy("timestamp", "desc"))
  );
  //orderBy("name", "desc")
 
  return (
    <div>
    {
      realtimePosts?.docs.map((post) => (
        
          <Post
            key_id={post.id}
            name={post.data().username}
            message={post.data().content}
            uid = {post.data().uid}
            postImage={post.data().postImage}
            timestamp={post.data().timestamp}
            likes = {post.data().likes}
          />
          
        ))
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