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
    const [hasFriends, setHasFriends] = useState(false)

      useEffect(async () => {
        if(user){
            const sfRef = doc(collection(db,'Friends'), user.uid);
            const collections = await getDoc(sfRef);
            const data = collections.data();
            const tempArray = []
            if (data != null) {
              Object.keys(data).forEach((usertags) => {
                
                tempArray.push( {
                  key_id:usertags
                })
                
              })
              if (tempArray.length != 0) {
                setHasFriends(true)
              }
              setArray(tempArray)
            }
        }
      }, [])
    
    return(
        <div className="flex-grow flex flex-col items-center pb-12 pt-8 mr-4 xl:mr-40 overflow-y-auto ">
          {hasFriends == false ? (
            <div
              className= "flex font-medium flex-grow text-3xl justify-center pb-12  mr-4 xl:mr-40 overflow-y-auto" >
           
              You have no friends, please make some :(
          
            </div>
        ) : (
          <p className="flex relative font-medium text-3xl justify-center pb-12  mr-4 xl:mr-40 overflow-y-auto">Friends</p>
        )}
          <div className = "grid grid-cols-1 sm:grid-cols-2 gap-14  mr-4 xl:mr-40 ">
           {

               Array?.map((item) => 
                    <FriendCard key_id = {item.key_id}/>
               )
           }
           </div> 
        </div>
        
    )
}

export default FriendsVerticalCard;