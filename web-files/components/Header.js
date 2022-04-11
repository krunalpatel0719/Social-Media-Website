import {
  BellIcon,
  ChatIcon,
  LogoutIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
  CogIcon,
} from "@heroicons/react/solid";

import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
import Image from "next/image";
import { auth, db } from "../firebase";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function Header() {
  // Variables and states for the header 

  const user = auth.currentUser;
  const router = useRouter();

  // Header button functions 

  const handleLogOut = (e) => {
    signOut(auth);
  };

  const GoToAccount = () => {
    router.push("/SettingsPage");
  };

  const GoToFeed = () => {
    router.push("/MainPage");
  };

  const GoToShared = () => {
      router.push("/Shared");
  }

  const [username, setUsername] = React.useState(user && user.displayName);

  // Sets the username on the page 
  
  const setPageUsername = async () => {
   if (user) {
    const docRef = doc(db, "Users", user.uid);
    const docSnap = await getDoc(docRef);
    setUsername(docSnap.data().username);
   }
  };

  setPageUsername();

  return (
    <div
      role = 'header'
      className="sticky top-0 z-50 bg-white flex items-center
        p-2 lg:px-5 shadow-md"
    >
      {/* Left */}
      <div className="flex items-center">
        <div className="flex ml-2 items-center rounded-full bg-blue-100 p-2">
          <SearchIcon className="h-6 text-blue-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none
                     placeholder-blue-500 flex-shrink"
            type="text"
            placeholder="Search The Lounge"
          ></input>
        </div>
      </div>

      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <button type="button" onClick={GoToFeed}>
            {window.location.pathname == "/MainPage" ? (
              <HeaderIcon active Icon={HomeIcon} />
            ) : (
              <HeaderIcon Icon={HomeIcon} />
            )}
          </button>
          <HeaderIcon Icon={FlagIcon} />

          <button type="button" onClick={GoToShared}>
              {window.location.pathname == "/Shared" ? (
                  <HeaderIcon Icon={UserGroupIcon} />
            ) : (
                <HeaderIcon Icon={UserGroupIcon} />
            )}
          </button>
        </div>
      </div>

      {/* Right */}
      <div className=" flex items-center sm:space-x-2 justify-end">
        {/**Profile Pic 
                <Image //onClick= {} 
                className="rounded-full curosr-pointer"
                scr={user.image}
                width="40"
                height="40"
                layout="fixed"
                />*/}
        {/**{user.email}</p> */}
        <p className="flex whitespace-nowrap font-semibold pr-3">{username} </p>
        <ViewGridIcon className="icon" />
        <button data-testid='settings-button' type="button" onClick={GoToAccount}>
         <CogIcon  className="icon" />
        </button>
        <BellIcon className="icon" />
        <button type="button" onClick={handleLogOut}>
          <LogoutIcon className="icon" />
        </button>
      </div>
    </div>
  );
}

export default Header;
