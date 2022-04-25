import { db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import Comment from "./Comment";
import {collection, query, orderBy,where} from "firebase/firestore";
 function Comments(originID) {

    // Renders the comments in the comment page in real time

     const origin_id = originID.post_originID
     const [realtimePosts, loading, error] =  useCollection(
     query(collection(db, "Comments"),where("origin_docID", "==", origin_id))
  );
  //orderBy("name", "desc")
 
  return (
    <div>
    {
      realtimePosts?.docs.map((origin_post) => (
        
          <Comment
            doc_id={origin_post.data().doc_id}
            origin_Docid={origin_post.data().origin_Docid}
            username={origin_post.data().username}
            content={origin_post.data().content}
            uid = {origin_post.data().uid}
            timestamp={origin_post.data().timestamp}
            profile_picture={origin_post.data().profile_picture || null}
          />
          
        ))
     }
  </div>)

 
}

export default Comments;