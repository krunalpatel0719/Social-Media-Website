import { useState, useEffect } from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import {
  collection,
  query,
  orderBy,
  where,
  updateDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db, auth,  user} from "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
    deleteUser, 
} from "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";

import { PencilIcon } from "@heroicons/react/solid";


function FriendCard({key_id}){

    const user = auth.currentUser;
    
    const [bio, setBio] = useState();
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [uid, setUid] = useState();

      useEffect(async () => {
        if(user){
            const sfRef = doc(collection(db,'Users'), key_id);
            const collections = await getDoc(sfRef);
            console.log(collections.data())
            const data = collections.data();
            setBio(data.bio);
            setUsername(data.username);
            setName(data.first_name + " " + data.last_name);
            setAge(data.age);
            setGender(data.gender);
            setUid(key_id);

        }
      }, [])

    return(
            <div  className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm border-4 border-blue-600">
                <div className="items-center justify-between space-x-2 rounded-md">
                    <div>
                        <p>{name} ({username})</p>
                    </div>
                    <div>
                        <p>gender: {gender}</p>
                        <p>bio: {bio}</p>
                        <p>age: {age}</p>
                    </div>
                </div>
            </div>
        
    );
}

export default FriendCard;