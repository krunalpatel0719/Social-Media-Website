import { doc, getFirestore } from "firebase/firestore";
import { render } from "react-dom";
import {auth, db} from '../firebase';
import { collection, getDocs, orderBy} from "firebase/firestore";
import {useCollection} from "react-firebase-hooks/firestore"
import Posts from "./Posts";

function Post(){
//setup Post
    const db = getFirestore();
    const [realtimePosts] = useCollection(
        collection(db, 'Posts')
    );

    return(
        <div>
            
        </div>
    )
}

export default Post


/*
            {
            getDocs(collection(db, 'Posts')).then(snapshot => {
                snapshot.forEach(posts => {
                    <Posts 
                        key={posts.id}
                        content={posts.data().content}
                        email = {posts.data().userID}
                    />
                    })
                })
            };
            
            
            
*/