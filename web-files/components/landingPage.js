import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {auth, db} from "./firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import setupPosts from'./components/Post';

function loggedIn(){

}

function landingPage(){
    return(
        <div>
            
        </div>
    )
}

export default landingPage