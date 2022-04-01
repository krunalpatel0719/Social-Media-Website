import React, { useState, useEffect } from "react";

import {
  MailIcon,
  LockClosedIcon,
  EyeIcon,
  EyeOffIcon,
} from "@heroicons/react/outline";

import {
  createUserWithEmailAndPassword,
  setPersistence,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth, db} from "../firebase";
import { useRouter } from "next/router";

import { doc, addDoc, setDoc, getDoc, getDocs, getFirestore, collection, query, where} from "firebase/firestore";


function SignUp({ onClose }) {
 
  // Variables and hooks 

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

  // Password show/hide handler 

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setPasswordShown({
      ...passwordShown,
      showPassword: !passwordShown.showPassword,
    });
  };

  // Handles and sets the variables that correspond to the form input 

  const handleFormChange = (e) => {
    let target_value = e.target.value.trim();
    if (e.target.name == "username") {
      target_value = target_value.replace(/\s+/g, "");
    } else if (e.target.name == "first_name") {
      target_value =
        target_value.charAt(0).toUpperCase() + target_value.slice(1);
    } else if (e.target.name == "last_name") {
      target_value = target_value.replace(/\s+/g, "");
      target_value =
        target_value.charAt(0).toUpperCase() + target_value.slice(1);
    }
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: target_value,
    });
  };

  // Sets Users in the database and adds in user's info

  const setDocument = async (cred) => {
    await setDoc(doc(db, "Users", cred.user.uid), {
      first_name: formData.first_name,
      last_name: formData.last_name,
      username: formData.username,
      email: formData.email,
      
    });
  };

  const handleErrorMessage = (e) => {
    setErrorMessage({
      showError: e.visible,
      value: e.message,
    });
  };

  // Signup submition function 

  const signupSubmit = async (e) => {
    e.preventDefault();
    

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    let usernameTaken = false;

    // Username already exists check

    const docRef = collection(db, "Users");
    const q = query(docRef, where("username", "==", formData.username));
    await getDocs(q).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.data()) {
          usernameTaken = true;
        
        }
      });

    });
    
    // Basic validation checks and create account with firebase function

    if (usernameTaken == true) {
      handleErrorMessage({visible: true, message: "Username already exists please choose a new one"});
      return false;
    }
  
    if (formData.username.length <= 0) {
      handleErrorMessage({ visible: true, message: "Username can't be empty" });
      return false;
    } else if (formData.username.length <= 6) {
      handleErrorMessage({
        visible: true,
        message: "Username can't be less than 6 characters",
      });
      return false;
      
    } else if (usernameRegex.test(formData.username) == false) {
      handleErrorMessage({
        visible: true,
        message: "Username has invalid character must only contain letters and numbers",
      });
     
    } 
    else if (formData.first_name.length <= 0) {
      handleErrorMessage({
        visible: true,
        message: "First name can't be empty",
      });
      return false;
    } else if (formData.last_name.length <= 0) {
      handleErrorMessage({
        visible: true,
        message: "Last name can't be empty",
      });
      return false;
    } else {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((cred) => {
          setDocument(cred)
            .then(() => {
              handleErrorMessage({ visible: false, message: "" });
              updateProfile(cred.user, {
                displayName: formData.username
              }).then(() => {}).catch((err) => {console.log(err)})
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          const errorCode = error.code;

          switch (errorCode) {
            case "auth/weak-password":
              handleErrorMessage({
                visible: true,
                message: "Password is too weak please make it stronger",
              });
              break;
            case "auth/email-already-in-use":
              handleErrorMessage({
                visible: true,
                message: "Email already in use please try again",
              });
              break;
            case "auth/invalid-email":
              handleErrorMessage({
                visible: true,
                message: "Invalid email please include an @",
              });
              break;
            case "auth/maximum-user-count-exceeded":
              handleErrorMessage({
                visible: true,
                message:
                  "Maximum signup attempts exceeded please try again later",
              });
              break;
            case "auth/too-many-requests":
              handleErrorMessage({
                visible: true,
                message: "Too many signup attempts please try again later",
              });
              break;
            default:
          }
        });
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
                    <span className=" text-sm text-gray-600">First Name</span>

                    <div className="flex relative items-center">
                      <input
                        name="first_name"
                        onChange={handleFormChange}
                        placeholder="Enter First Name"
                        type="text"
                        className="capitalize form-control pl-1 text-md  py-1   w-full 
                              bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                      ></input>
                    </div>
                    <div className="py-2 form-group">
                      <span className="text-sm text-gray-600">Last Name</span>
                      <div className="flex relative items-center">
                        <input
                          name="last_name"
                          onChange={handleFormChange}
                          placeholder="Enter Last Name"
                          type="text"
                          className="capitalize form-control pl-1 text-md  py-1   w-full 
                                  bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                        ></input>
                      </div>
                    </div>
                    <div className="py-2 form-group">
                      <span className="text-sm text-gray-600">Username</span>
                      <div className="flex relative items-center">
                        <input
                          name="username"
                          onChange={handleFormChange}
                          placeholder="Enter Username"
                          type="text"
                          className="form-control pl-1 text-md  py-1   w-full 
                                  bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                          required
                          minLength={6}
                        />
                      </div>
                    </div>
                    <div className="py-2 form-group">
                      <span className="text-sm text-gray-600">Email</span>
                      <div className="flex relative items-center">
                        <input
                          name="email"
                          onChange={handleFormChange}
                          placeholder="Enter Email"
                          type="email"
                          className="form-control pl-1 text-md  py-1   w-full 
                                  bg-white border-b-2 border-gray-300 placeholder-gray-600  focus:placeholder-gray-500 focus:bg-white focus:border-blue-600 focus:outline-none"
                        ></input>
                      </div>
                    </div>
                    <div className="py-2 form-group">
                      <span className="text-sm text-gray-600">Password</span>
                      <div className="flex relative items-center">
                        <input
                          name="password"
                          onChange={handleFormChange}
                          placeholder="Enter Password"
                          type={
                            passwordShown.showPassword ? "text" : "password"
                          }
                          className="form-control pl-1 text-md  py-1   w-full 
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
                    {errorMessage.showError && (
                      <div className="pl-1 w-80 mt-1 text-m text-red-500">
                      
                        {errorMessage.value}
                        
                      </div>
                    )}
                    <div className="flex flex-col h-48 justify-evenly ">
                     
                      <button
                        type="submit"
                        onClick={signupSubmit}
                        className="text-lg font-semibold text-centered w-full text-white rounded-full px-6 py-3 block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                      >
                        Register
                      </button>
                      <button
                        type="button"
                        onClick={onClose}
                        className="text-lg font-semibold text-centered w-full text-white rounded-full px-6 py-3 block shadow-xl
                              transition ease-in-out  bg-blue-600 hover:bg-blue-500 duration-400"
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