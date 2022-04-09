
import '../firebase.js'
import InputBox from '../components/InputBox'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from "../components/Feed"
import Head from 'next/head'
import { useRouter, router } from 'next/router'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, onSnapshot, getDocs, query, orderBy,where } from "firebase/firestore";
import AccountInfo from '../components/AccountInfo.js'

import { useCollection } from "react-firebase-hooks/firestore";
import Comment_origin_post from '../components/Comment_origin_post'

import { withRouter } from 'next/router'
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

import { useLocation } from 'react-router-dom';

import Comment_InputBox from "../components/Comment_InputBox";
import Comments from "../components/Comments";


function CommentsPage({ comments }) {

  var postOriginID= "";
  var postIdString= "";

  if (typeof window !== "undefined") {
    postIdString = window.location.search.slice(1).split("&")[0].split("=")[1];
  }

  const auth = getAuth();
  const router = useRouter()
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
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

  const [realtimePosts, loading, error] =  useCollection(
    query(collection(db, "Posts"), where("doc_id", "==", postIdString)));
  if (!loaded) { return <div></div> }
  return (
    <div>
      <Head>
        <title>The Lounge</title>
      </Head>

      <Header />
      <main className='flex flex-wrap relative'>

        <Sidebar />

        <div className="flex-grow  pb-44 pt-6 mr-4
        xl:mr-40 overflow-y-auto "> <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl ">
            <div>
              {
                realtimePosts?.docs.map((post) => (
                  <Comment_origin_post
                    key_id={post.id}
                    name={post.data().username}
                    message={post.data().content}
                    uid={post.data().uid}
                    timestamp={post.data().timestamp}
                    likes={post.data().likes}
                    postImage={post.data().postImage}
                  />

                ))
                
              }
            </div>
            <div>
              {
                realtimePosts?.docs.map((post) => (
                  <Comment_InputBox post_originID={post.id}/>

                ))
                
              }
            </div>
            <div>
              {
                realtimePosts?.docs.map((post) => (
                  <Comments post_originID={post.id}/>

                ))
                
              }
            </div>
            
            
            {/**Input Box */}
           
            
            
          </div></div>




      </main>
    </div>

  )
}

export default withRouter(CommentsPage);