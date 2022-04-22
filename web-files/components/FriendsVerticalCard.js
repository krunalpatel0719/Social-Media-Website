import InputBox from "./InputBox"
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import {collection, query, where, getDoc, doc, FieldPath, documentId, getDocs, docs, listCollections} from "firebase/firestore";
import Request from "./Request";
import { DocumentDownloadIcon } from "@heroicons/react/solid";
import {useState, useEffect} from "react";
import FriendCard from "./FriendCard";
 
 
 function FriendsVerticalCard() {

    const user = auth.currentUser;

    const [Array, setArray] = useState([])

      useEffect(async () => {
        if(user){
            const sfRef = doc(collection(db,'Friends'), user.uid);
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
                    <FriendCard key_id = {item.key_id}/>
               )
           }
        </div>
        
    )
}

export default FriendsVerticalCard;