import React, { useState, useEffect } from 'react'
import '../firebase.js'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import RegistrationPage from './RegistrationPage'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import Post from '../components/Post.js'
import Sidebar from '../components/Sidebar.js'
import Feed from '../components/Feed.js'
import '../auth.js'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {db} from '../firebase';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {useAuthState} from "react-firebase-hooks/auth";
import "firebase/storage";
import "../firebase";
import { getStorage, ref, getDownloadURL, uploadString, UploadTask} from "firebase/storage";
import { useRouter } from 'next/router'

// Index page where it redirects if they are logged in or logged out to the specific page


function Home() {
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
 
  const router = useRouter()
  const [loadPage, setLoadPage] = useState(true)
  const [user, loading, error] = useAuthState(auth);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user=> {
      if (user) {
        setLoadPage(false)
        router.push("/MainPage")
      } 
      
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  useEffect(() => { 
    
    if (user) {
      setLoadPage(false)
      
    }
    
  }, []);
  if (!setLoadPage) {return <div></div> }
  return(
    <div className="relative">
      <div className=" bg-gradient-to-tr top-0 left-0 from-blue-500 via-purple-500 to-pink-500 h-screen">
    
        <Head>
          <title>The Lounge</title>
        </Head>
        <RegistrationPage/>
    
    
   
      {/*</div></div><div id='registration-portal' className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">*/}
   </div>
    
  </div>
  

  )
}

export default Home
