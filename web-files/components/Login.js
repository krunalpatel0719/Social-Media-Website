
import React, { useState, useEffect } from 'react';
import ClientOnlyPortal from './ClientOnlyPortal'
import { 
  MailIcon,
  LockClosedIcon,
  EyeIcon,
  EyeOffIcon
} from "@heroicons/react/outline";

import {
  createUserWithEmailAndPassword,
  setPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useRouter } from 'next/router'
import SignUp from './SignUp';
function Login(props) {
  const router = useRouter()

  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const [showSignUp, setShowSignUp] = React.useState(false);

  const [passwordShown, setPasswordShown] = React.useState({
    showPassword: false,
  });

  const [errorMessage, setErrorMessage] = React.useState({
    showError: false,
    value: "",
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setPasswordShown({
      ...passwordShown,
      showPassword: !passwordShown.showPassword,
    });
  };
  const handleFormChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleErrorMessage = (e) => {
    setErrorMessage({
      showError: e.visible,
      value: e.message
    })
  }
  const loginSubmit = (e) => {
    
    e.preventDefault();
   
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((cred) => {
        //call next function to display timeline for user
        handleErrorMessage({visible:false, message:""})
        
        router.push("/MainPage")
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
        switch (errorCode) {
          case 'auth/wrong-password':
            handleErrorMessage({visible:true, message:"Invalid credentials please try again"})
            break
          case 'auth/user-not-found':
            handleErrorMessage({visible:true, message:"Email not found please try again"})  
            break
          case 'auth/invalid-email':
            handleErrorMessage({visible:true, message:"Invalid email please include an @"})  
            break
          case 'auth/maximum-user-count-exceeded':
            handleErrorMessage({visible:true, message:"Maximum login attempts exceeded please try again later"})  
            break
          case 'auth/too-many-requests':
            handleErrorMessage({visible:true, message:"Too many login attempts please try again later"})  
            break
          default:
        }
       
        
      });
  };

  useEffect(() => {
    
    router.prefetch('/MainPage')
  }, [])

  return (
    <div className="flex h-screen m-auto">
      <div className={`${showSignUp ? "blur-md" : ""} font-sans m-auto flex-grow `}>
        <div className="shadow-md rounded-xl bg-white mx-auto py-12 pb-11 px-16 ">
          <div className="relative flex flex-wrap">
            <div className="">
              <div className="font-bold font-poppins pb-6 text-center text-4xl text-black">
                Login to the Lounge
              </div>
              <form id="login-form" className="">
                <div className="mx-auto max-w-lg">
                  <span className="px-2 text-sm text-gray-600">Email</span>

                  <div className="flex relative items-center">
                    <span className="px-2 flex absolute">
                      <MailIcon className="text-gray-500 h-6"></MailIcon>
                    </span>
                    <input
                      name="email"
                      onChange={handleFormChange}
                      id="login-email"
                      placeholder="Type your email"
                      type="email"
                      className="form-control pl-10 text-md pr-10 py-2   w-full 
                            bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                    ></input>
                  </div>
                  <div className="py-2">
                    <span className="px-2 text-sm text-gray-600">Password</span>
                    <div className="flex relative items-center">
                      <span className="px-2 flex absolute">
                        <LockClosedIcon className="text-gray-500 h-6"></LockClosedIcon>
                      </span>
                      <input
                        name="password"
                        onChange={handleFormChange}
                        id="login-password"
                        placeholder="Type your password"
                        type={passwordShown.showPassword ? "text" : "password"}
                        className="form-control pl-10 text-md pr-10 py-2   w-full 
                                bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                      ></input>
                      <button
                        type="button"
                        onClick={handleClickShowPassword}
                        className="text-gray-500 left-80 absolute"
                      >
                        {passwordShown.showPassword ? (
                          <EyeOffIcon className="h-6"></EyeOffIcon>
                        ) : (
                          <EyeIcon className="h-6"></EyeIcon>
                        )}
                      </button>
                      
                    </div>
                  </div>
                  {errorMessage.showError &&
                    <div className="pl-1 mt-1 text-m text-red-500"> {errorMessage.value} </div>
                  }
                  <div className="pt-8">
                    {/*<Link href="/MainPage"> */}
                    <button
                      onClick={loginSubmit}
                      className="mt-3 text-lg font-semibold text-centered w-full text-white rounded-full px-6 py-3 block shadow-xl
                          transition ease-in-out  bg-blue-600 hover:bg-blue-500 duration-400"
                    >
                      Login
                    </button>
                  </div>
                  <div className="pt-10" id="signup-form">
                    <span className="flex justify-center items-center pb-2 text-m text-gray-600">
                      Don't have an account?
                    </span>
                    <button
                      type="button"
                      onClick = {() =>setShowSignUp(true)}
                      className="mt-3 text-lg font-semibold text-centered w-full text-white rounded-full px-6 py-3 block shadow-xl
                        transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {showSignUp && (
         <ClientOnlyPortal selector="#registration-portal">
            <SignUp  onClose = {() => setShowSignUp(false)} />
          </ClientOnlyPortal>  
    )}
    </div>
    
  );
}

export default Login;
