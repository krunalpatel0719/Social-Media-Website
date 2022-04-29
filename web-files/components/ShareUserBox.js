  import Image from "next/image";
  import { auth, db } from "../firebase";
  import { setDoc } from "firebase/firestore";


  import {
    doc,
    getDoc,
    collection,
    query,
    where,
    
  } from "firebase/firestore";
  import { getStorage, ref, deleteObject } from "firebase/storage";
  import React, { useState, useEffect, useRef} from "react";
  
  
  import AccountCircleIcon from "@material-ui/icons/AccountCircle";
  import { useRouter } from 'next/router'
  

  import { UserCircleIcon } from "@heroicons/react/solid";
  function ShareUserBox({post_id, profile_image, username, uid}) {
    const router = useRouter();
    const user = auth.currentUser;
   
    
    const sharePost = () => {
        setDoc(doc(db, "Shared", uid), {
            [post_id]:true
          }, {merge: true})
    }
    return (
      <div onClick = {sharePost} className="w-full py-1 flex items-center hover:bg-blue-100 cursor-pointer ">
          {profile_image ? (
            <div className="mx-2 relative h-9  w-9  rounded-full border border-black ">
            <Image src={profile_image} className = "rounded-full" objectFit="contain" layout='fill' />
          </div>
          ) : (
            <AccountCircleIcon style={{ fontSize: 36 }} className = "mx-2 text-blue-300 rounded-full"></AccountCircleIcon>
          )}
          
          {username}
          
      </div>
    );
  }
  
  export default ShareUserBox