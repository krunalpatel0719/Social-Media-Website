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
import {getAuth, signOut} from 'firebase/auth';
import {db} from '../firebase';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "../firebase";
import { getStorage, ref, getDownloadURL, uploadString, UploadTask} from "firebase/storage";
import { useRouter } from 'next/router'
import MainPage from './MainPage.js'
import RegistrationPage from './RegistrationPage.js'

export default function Home() {
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  const user = auth.currentUser;
  if(user) return <MainPage/>

  return(
    <div>
    <Head>
      <title>The Lounge</title>
    </Head>
    <RegistrationPage/>
  </div>

  )
}
