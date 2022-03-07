import '../firebase.js'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import Post from '../components/Post.js'
import Sidebar from '../components/Sidebar.js'
import Feed from '../components/Feed.js'
import '../auth.js'
import {getAuth} from 'firebase/auth';
import {db} from '../firebase';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "../firebase";
import { getStorage, ref, getDownloadURL, uploadString, UploadTask} from "firebase/storage";

export default function Home() {
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  const user = auth.currentUser;


  return (

    <div className='bg-gray-100 overflow-hidden'>
      <Head>
        <title>The Lounge</title>
      </Head>
      
      <Header />

      <main className='flex'>
      <button type="button" id="logout">Leave the Lounge</button>
        <Sidebar />
        <Feed />
        
        
        {/* Feed */}
        {/*Widgets*/}
      </main>
      <Login />
      <SignUp />
    </div>

  )
}
