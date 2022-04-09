
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


// Loads the main page with the feed


function MainPage({posts}) {
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
          <Feed/>
          
        </main>  
    </div>
    
  )
}

export default MainPage

/*
export async function getServerSideProps() {
  // Get User
  

  
  const querySnapshot =  await getDocs(collection(db, "Posts"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });

  const docs = querySnapshot.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
 const posts =  query(collection(db, "Posts"), orderBy("timestamp", "desc"))

  onSnapshot(posts, (snapshot) => {
    snapshot.docs.forEach((doc) => {
      console.log(doc.data())
    })
  })
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {posts: docs },
  };
}

*/