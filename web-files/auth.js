import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {auth, db} from "./firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import setupPosts from'./components/Post';

let status = false;
//ensures that we are working on the browser
if (typeof window !== "undefined") {
    //gets data
    /*collection(db, 'Posts').getDoc.then(snapshot => {
        console.log(snapshot.docs);
    })
    */
    //listen for auth status changes

    onAuthStateChanged(auth, user=> {
        if(user){
            status = true;
            console.log('user logged in: ', user);
        } else{
            status = false;
            console.log('user logged out');
        }
        
    })

    //signup
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //get user info
        const email = signupForm['signup-email'].value;
        const password = signupForm['signup-password'].value;

        //signup user with email/password
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password).then(cred => {
            signupForm.reset();
        })
    })

    //logout
    const logout = document.querySelector('#logout');
    logout.addEventListener('click', (e)=>{
        e.preventDefault();
        signOut(auth);
    })

    //login - moved to login.js
    const loginForm = document.querySelector('#login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        //get user info
        const email = loginForm['login-email'].value;
        const password = loginForm['login-password'].value;

        signInWithEmailAndPassword(auth, email, password).then(cred => {
            //call next function to display timeline for user
            loginForm.reset();
        })
    })
}