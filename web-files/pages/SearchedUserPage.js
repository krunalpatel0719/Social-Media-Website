import "../firebase.js";
import InputBox from "../components/InputBox";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Head from "next/head";

import { useRouter, router } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  getDocs,
  query,
  doc,
  getDoc,
  setDoc,
  orderBy,
  where,
} from "firebase/firestore";

import { useCollection, useDocument, useDocumentData} from "react-firebase-hooks/firestore";

import { withRouter } from "next/router";

import { useLocation } from "react-router-dom";

import UserInfo from "../components/UserInfo";

import { UserCircleIcon } from "@heroicons/react/solid";
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';

// Loads the comments page and components

function CommentsPage() {
  let uidString = "";

  if (typeof window !== "undefined") {
    uidString = window.location.search.slice(1).split("&")[0].split("=")[1];
  }
  
  const auth = getAuth();
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [userFriends, setUserFriends] = useState([]);
  const [profileImage, setProfileImage] = useState("")
  const [username, setUsername] = useState("")
  const [bio, setBio] = useState("")
  const [gender, setGender] = useState("")
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoaded(false);
        router.push("/");
      } else {
        setLoaded(true);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  const [userSnapshot, loading, error] = useDocumentData(
    doc(db, "Users", uidString)
  );
 
  const sendFriendRequest = () => {
    const user = auth.currentUser;
    setDoc(doc(db, "FriendRequests", uidString), {
      [user.uid]:true
    }, {merge: true})
  }
  useEffect(() => {
    if (userSnapshot) {
     
      setName(userSnapshot.first_name + " " + userSnapshot.last_name);
      
      setAge(userSnapshot.age);
      setGender(userSnapshot.gender);
      setUsername(userSnapshot.username);
      setBio(userSnapshot.bio);
      setProfileImage(userSnapshot.profile_picture)
     
  }
  }, [userSnapshot])
    
  useEffect(async () => {
    const user = auth.currentUser;
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
    }
  }, []);   

  if (!loaded) {
    console.log("not loaded")
    return <div></div>;
  }
 
    
        
   
    
 
  

  return (
    <div>
      <Head>
        <title>The Lounge</title>
      </Head>

      <Header />
      <main className="flex flex-wrap relative">
        <Sidebar />

        <div
          className="flex-grow  pb-12 pt-16 mr-4
        xl:mr-40 overflow-y-auto "
        >
          <div className="font-sans border bg-white rounded-xl shadow-xl mx-auto max-w-md md:max-w-lg lg:max-w-xl ">
           <div className="flex ">
            <div
              role="account-form"
              className="flex flex-shrink min-w-64 max-w-auto pt-6 flex-col items-center p-2  px-4 btext-grey-500 
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
              <p className=" pt-3  font-semibold text-2xl text-center">{name + ", "+ age}</p>
              <p className="pb-4 pt-1 font-medium text-lg  text-center text-slate-500">{username}</p>
              {uidString != auth.currentUser.uid && userFriends.includes(uidString) == false && (
                <button
                    type="button"
                    onClick = {sendFriendRequest}
                    className=" mb-4 w-40 h-10 text-sm font-semibold text-center  text-white rounded-full block shadow-xl
                                transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                  >
                    Send Friend Request
                    
                  </button>)}
            </div>
            <div className ='border-l-4 flex  justify-between flex-grow flex-col p-2 py-2 pt-8 w-72'>
              <p className=" font-medium text-lg ">{bio}</p>
              <div className ='text-right'> 
                  {gender == "Male" ? (
                    <MaleIcon style={{ fontSize: 36 }} className = "mx-2 text-blue-400 rounded-full"></MaleIcon>
                  ) : (
                    <FemaleIcon style={{ fontSize: 36 }} className = "mx-2 text-pink-400 rounded-full"></FemaleIcon>
                  )
                  }
                
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
    </div>
  );
}

export default withRouter(CommentsPage);
