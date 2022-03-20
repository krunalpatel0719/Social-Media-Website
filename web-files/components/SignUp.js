
import React, { useState, useEffect } from 'react';


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

function SignUp({onClose}) {
  const initialFormData = Object.freeze({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const [formData, updateFormData] = React.useState(initialFormData);

  const [passwordShown, setPasswordShown] = React.useState({
    showPassword: false,
  });

  const [errorMessage, setErrorMessage] = React.useState({
    showError: false,
    value: "",
  });

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
  
  const signupSubmit = (e) => {
    
    e.preventDefault();
    if (formData.username.length <=0) {
      handleErrorMessage({visible:true, message:"Username can't be empty"})
      return false
    
    }
    else if  (formData.username.length <=6) {
      handleErrorMessage({visible:true, message:"Username can't be less than 6 characters"})
      return false
    
    } 
    else if (formData.first_name.length <=0) {
        handleErrorMessage({visible:true, message:"First name can't be empty"})
        return false
    }
    else if (formData.last_name.length <=0) {
        handleErrorMessage({visible:true, message:"Last name can't be empty"})
        return false
    }
    else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((cred) => {
          //call next function to display timeline for user
          handleErrorMessage({visible:false, message:""})
          
          
        })
        .catch((error) => {
          const errorCode = error.code;
      
          switch (errorCode) {
            case 'auth/weak-password':
              handleErrorMessage({visible:true, message:"Password is too weak please make it stronger"})
              break
            case 'auth/email-already-in-use':
              handleErrorMessage({visible:true, message:"Email already in use please try again"})
              break
            case 'auth/invalid-email':
              handleErrorMessage({visible:true, message:"Invalid email please include an @"})  
              break
            case 'auth/maximum-user-count-exceeded':
              handleErrorMessage({visible:true, message:"Maximum signup attempts exceeded please try again later"})  
              break
            case 'auth/too-many-requests':
              handleErrorMessage({visible:true, message:"Too many signup attempts please try again later"})  
              break
            default:
          }
        
          
        }
      );
    }
  };
  return (
   
   
    <div className="flex h-screen m-auto">
      <div className="font-sans m-auto flex-grow">
        <div className="shadow-md rounded-xl bg-white mx-auto py-12 pb-3 px-16 ">
          <div className="relative flex flex-wrap">
            <div className="">
                <div className="">
                <div className="font-bold font-poppins pb-6 text-center text-4xl text-black">
                  Create an Account
                </div>
                  <form id="signup-form" className="">
                  <div className="form-group mx-auto max-w-lg">
                    <span className="px-2 text-sm text-gray-600">First Name</span>

                    <div className="flex relative items-center">
                      
                      <input
                        name="first_name"
                        onChange={handleFormChange}
                        placeholder="Enter First Name"
                        type="text"
                        className="form-control pl-3 text-md  py-1   w-full 
                              bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                      ></input>
                    </div>
                      <div className="py-2 form-group">
                        <span className="px-2 text-sm text-gray-600">Last Name</span>
                          <div className="flex relative items-center">
                          
                          <input
                            name="last_name"
                            onChange={handleFormChange}
                            placeholder="Enter Last Name"
                            type="text"
                            className="form-control pl-3 text-md  py-1   w-full 
                                  bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                          ></input>
                        </div>
                   
                      </div>
                      <div className="py-2 form-group">
                        <span className="px-2 text-sm text-gray-600">Username</span>
                          <div className="flex relative items-center">
                          
                          <input
                            name="username"
                            onChange={handleFormChange}
                            placeholder="Enter Username"
                            type="text"
                           
                            className="form-control pl-3 text-md  py-1   w-full 
                                  bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                            required minLength={6}/
                          >
                        </div>
                   
                      </div>
                      <div className="py-2 form-group">
                        <span className="px-2 text-sm text-gray-600">Email</span>
                          <div className="flex relative items-center">
                          
                          <input
                            name="email"
                            onChange={handleFormChange}
                            placeholder="Enter Email"
                            type="email"
                            className="form-control pl-3 text-md  py-1   w-full 
                                  bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                          ></input>
                        </div>
                   
                      </div>
                      <div className="py-2 form-group">
                        <span className="px-2 text-sm text-gray-600">Password</span>
                          <div className="flex relative items-center">
                          
                          <input
                            name="password"
                            onChange={handleFormChange}
                            placeholder="Enter Password"
                            
                            type={passwordShown.showPassword ? "text" : "password"}
                            className="form-control pl-3 text-md  py-1   w-full 
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
                      <div className="flex flex-col h-48 justify-evenly ">
                        {/*<Link href="/MainPage"> */}
                        <button
                          type="submit"
                          onClick={signupSubmit}
                          className="text-lg font-semibold text-centered w-full text-white rounded-full px-6 py-3 block shadow-xl
                              transition ease-in-ou  bg-blue-600 hover:bg-blue-500 duration-400"
                        >
                          Register
                        </button>
                        <button
                          type="button"
                          onClick = {onClose}
                          className="text-lg font-semibold text-centered w-full text-white rounded-full px-6 py-3 block shadow-xl
                              transition ease-in-ou  bg-blue-600 hover:bg-blue-500 duration-400"
                        >
                          Close
                        </button>
                      </div>
                     
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  

  ); 
}

export default SignUp;
