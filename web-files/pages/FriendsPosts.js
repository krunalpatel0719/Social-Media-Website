
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
import FriendPosts from '../components/FriendPosts.js'
import FriendsVerticalCard from '../components/FriendsVerticalCard.js'

// Loads the friends page and components 

function FriendsPosts({posts}) {
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
      <main className='flex flex-wrap relative space-x-2'>
         
          <Sidebar />
          <div className="flex-grow  pb-44 pt-6 mr-4
    xl:mr-40 overflow-y-auto">
            <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
                <p>This page  displays exclusively posts that were submitted by friends</p>
                <FriendPosts posts={posts}/>
            </div>
            
          </div>
        </main>  
    </div>
    
  )
}

export default FriendsPosts