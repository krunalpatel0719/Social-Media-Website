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
  deleteField,
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

import { UserCircleIcon } from "@heroicons/react/solid";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

function Request({key_id}){

    const user = auth.currentUser;
    const [profileImage, setProfileImage] = useState("")
    const [bio, setBio] = useState();
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [uid, setUid] = useState();
    const [deleted, setDeleted] = useState(false)
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
            setProfileImage(data.profile_picture)

        }
      }, [])

      const acceptFriend = () => {
        setDoc(doc(db, "Friends", uid), {
            [user.uid]:true
          }, {merge: true});

        setDoc(doc(db, "Friends", user.uid), {
            [uid]:true
        }, {merge: true});
        updateDoc(doc(db, "FriendRequests", user.uid), {
          [uid]:deleteField()
        });
        
        setDeleted(true)
      }

      const rejectFriend = () => {
        updateDoc(doc(db, "FriendRequests", user.uid), {
          [uid]:deleteField()
        });
        setDeleted(true)
      }
    if (deleted) {return false}
    return(
      <div className="font-sans border bg-white rounded-xl shadow-xl  max-w-xs md:max-w-md lg:max-w-md ">
         
          <div className="flex ">
          <div
            role="account-form"
            className="flex flex-shrink max-w-auto pt-6 flex-col items-center p-2  px-4 btext-grey-500 
        "
          >
            
            <div className="relative w-32 h-32 ">
              {profileImage ? (
                <img
                  className="rounded-full object-contain "
                  src={profileImage}
                />
              ) : (
                <UserCircleIcon
                  
                  className="text-blue-300 rounded-full object-contain h-32 w-32"
                ></UserCircleIcon>
              )}
            </div>
            <p className=" pt-3  font-semibold text-2xl text-center">{name + " has sent you a friend request!"}</p>
            <p className="pb-4 pt-1 font-medium text-lg  text-center text-slate-500">{username}</p>
            <div className = "flex flex-grow justify-between">
            <button
                type="button"
                onClick={acceptFriend}
                className=" mb-4 w-24 h-6 text-sm font-semibold text-center  text-white rounded-full block shadow-xl
                            transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
              >
                Accept
                
              </button>
              <button
                  type="button"
                  onClick={rejectFriend}
                  className=" mb-4 w-24 h-6 text-sm font-semibold text-center  text-white rounded-full block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                >
                  Reject
                  
                </button>
                </div>
          </div>
          
        </div>
      </div> 
  
        
    );
}

export default Request;