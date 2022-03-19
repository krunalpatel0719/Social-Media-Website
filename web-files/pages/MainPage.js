
import '../firebase.js'

import Header from '../components/Header' 
import Sidebar from '../components/Sidebar'
import Feed from "../components/Feed"
import Head from 'next/head'
import { useRouter } from 'next/router'
import {getAuth, signOut, onAuthStateChanged} from 'firebase/auth';
import React, { useState, useEffect } from 'react';


function MainPage() {
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
      <main className='flex flex-wrap relative'>
         
          <Sidebar />
          <Feed />
          
        </main>  
    </div>
    
  )
}

export default MainPage