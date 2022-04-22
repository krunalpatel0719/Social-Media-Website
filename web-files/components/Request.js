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


function Request({key_id}){

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

      const acceptFriend = () => {
        setDoc(doc(db, "Friends", uid), {
            [user.uid]:true
          }, {merge: true});

        setDoc(doc(db, "Friends", user.uid), {
            [uid]:true
        }, {merge: true});
      }

      const rejectFriend = () => {

      }

    return(
            <div  className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="items-center justify-between space-x-2">
                    <div>
                        <p>{name} ({username}) has sent you a friend requests.</p>
                    </div>
                    <div>
                        <p>gender: {gender}</p>
                        <p>bio: {bio}</p>
                        <p>age: {age}</p>
                    </div>
                    <div>
                        <div className="inline-flex"><button onClick={acceptFriend} type="button" className="w-24 lg:w-28 h-auto text-md font-semibold text-centered  text-white rounded-full  lg:mr-20  block shadow-xl
                                    transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400">Accept</button></div>
                        <div className="inline-flex"><button onClick={rejectFriend} type="button" className="w-24 lg:w-28 h-auto text-md font-semibold text-centered  text-white rounded-full  lg:mr-20  block shadow-xl
                                    transition ease-in-out bg-red-600 hover:bg-red-500 duration-400">Reject</button></div>
                    </div>
                </div>
            </div>
        
    );
}

export default Request;