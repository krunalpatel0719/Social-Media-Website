import '../firebase.js'

import Header from '../components/Header' 
import Sidebar from '../components/Sidebar'
import Feed from "../components/Feed"
import Head from 'next/head'
import { useRouter } from 'next/router'
import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import {collection, onSnapshot, getDocs,query, orderBy} from "firebase/firestore";
import AccountInfo from '../components/AccountInfo.js';
import Requests from '../components/Requests.js'

// Loads the friends requests page and components

function FriendRequestsPage({posts}) {
  const auth = getAuth();
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user=> {
      if (!user) {
        setLoaded(false)
        router.push("/")
      } else {
        setLoaded(true)
      }
      
    });


    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  

 
  if(!loaded){ return <div></div> }
  return (
    <div> 
      <Head>
        <title>The Lounge</title>
      </Head>

      <Header/>
      <main className='flex  relative'>
         
          <Sidebar />
          <Requests posts={posts}/>
        </main>  
    </div>
    
  )
}

export default FriendRequestsPage