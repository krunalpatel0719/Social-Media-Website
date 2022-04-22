import InputBox from "./InputBox"
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import {collection, query, where, getDoc, doc, FieldPath, documentId, getDocs, docs, listCollections} from "firebase/firestore";
import Request from "./Request";
import { DocumentDownloadIcon } from "@heroicons/react/solid";
import {useState, useEffect} from "react";


function Requests({ posts }) {

    // Handles the requests for friends 
    
    const user = auth.currentUser;

   // const [realtimeUsers, loading, error] =  useCollection(
  //      query(collection(db, "FriendRequests"), where(id, "==", user.uid))
   // );

    const [Array, setArray] = useState([])
    /*
    useEffect(async () => {
        if (user) {
        
          console.log("use effect run again")
          const querySnapshot = await getDocs(collection(db, "FriendRequests"));
          const tempArray = []
          let tempQuerySnapshot;
          querySnapshot.forEach((doc) => {
            tempQuerySnapshot
          });

          tempArray.push( {
            key_id: doc.id,
          })
          setSearchArray(tempArray)
         
        }
      }, [])
      */

      

      useEffect(async () => {
        if(user){
            const sfRef = doc(collection(db,'FriendRequests'), user.uid);
            const collections = await getDoc(sfRef);
            const data = collections.data();
            const tempArray = []
            console.log(data);
            Object.keys(data).forEach((usertags) => {
               console.log(usertags);
               tempArray.push( {
                key_id:usertags
              })
               
            })
            
            setArray(tempArray)
        }
      }, [])
    
    return(
        <div>
           {
               Array.map((item) => 
                    <Request key_id = {item.key_id}/>
               )
           }
        </div>
        
    )
}

export default Requests

/**{ realtimeUsers?.docs.map((potentialFriend) => (
                <Request
                key_id={potentialFriend.data().id}
                
                />
        ))
            } */