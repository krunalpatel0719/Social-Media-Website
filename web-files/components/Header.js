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
import SearchUserBox from "./SearchUserBox"

import { auth, db } from "../firebase";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  deleteUser,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { useCollection } from "react-firebase-hooks/firestore";
import {collection, query, getDoc, getDocs, doc} from "firebase/firestore";

import { Popover, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";

function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.username.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}


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
  };

  const [realtimeUsers, loading, error] =  useCollection(
      query(collection(db, "Users"))
  );

  const [searchArray, setSearchArray] = useState([])
 
 
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();


    
  

  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'offset',  options: {
      offset: [0, 8],
    }, }],
  });

  useEffect(async () => {
    if (user) {
    
      console.log("use effect run again")
      const querySnapshot = await getDocs(collection(db, "Users"));
      const tempArray = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
       
        
    //     setSearchArray( (searchArray) => [
    //       ...searchArray,
    //       {
    //         username: doc.data().username,
    //         profile_picture: doc.data().profile_picture
    //       }
    //  ])
        tempArray.push( {
          username: doc.data().username,
          profile_picture: doc.data().profile_picture,
          uid: doc.id
        })
      });
      setSearchArray(tempArray)
     
    }
    // realtimeUsers?.docs.map((users) => {
    //   console.log(users.data().username)
    // })
  
  }, [])
  
  
  const [username, setUsername] = React.useState(user && user.displayName);

  const [searchText, updateSearchText] = React.useState("");

  let [isOpen, setIsOpen] = useState(true)

 
   


  // Handles and sets the variables that correspond to the form input

  const handleSearchChange = (e) => {
    let target_value = e.target.value.trim();

    updateSearchText(target_value);
    setIsOpen(true)
    
  };

  // Sets the username on the page

  // const setPageUsername = async () => {
  //   if (user) {
  //     const docRef = doc(db, "Users", user.uid);
  //     const docSnap = await getDoc(docRef);
  //     setUsername(docSnap.data().username || "");
  //   }
  // };

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  
  useEffect(async () => {
    if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        setUsername(docSnap.data().username || "");
      }
  }, [])
  useEffect(() => {
    window.addEventListener('click', handleClickOutside);

    // cleanup this component
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const wrapperRef = useRef(null);
  // setPageUsername();

  return (
    <div
      role="header"
      className="sticky top-0 z-50 bg-white flex items-center
        p-2 lg:px-5 shadow-md"
    >
      {/* Left */}
      <div className="flex items-center">
        <div ref={setReferenceElement} className=" flex ml-2 items-center rounded-full bg-blue-100 p-2">
       
          <SearchIcon className="h-6 text-blue-600" />
          <input
            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none
                     placeholder-blue-500 flex-shrink"
            type="text"
            placeholder="Search The Lounge"
            onChange = {handleSearchChange}
          ></input>
        </div>
        {searchText != "" && (
           <div> 

            <Popover >
                            {({ open, close }) => (
                              <>
                             
                             {isOpen && (
                                <Popover.Panel 
                               
                                  className=" rounded-md  shadow-sm bg-white border flex flex-col "
                                  ref={setPopperElement}
                                  style={styles.popper}
                                  {...attributes.popper}
                                  static
                                >
                                 
                                  <div  ref={wrapperRef}  className="overflow-y-auto  flex-shrink w-36 h-36 md:w-42 md:h-42 lg:w-52 lg:h-52 flex flex-col justify-items-center">
                                  {filterItems(searchArray, searchText).map((person) => (
                                    <SearchUserBox  profile_image = {person.profile_picture} username = {person.username} uid = {person.uid}/>
                                      
                                  
                                  
                                  ))}
                                    

                                  </div>
                                </Popover.Panel>
                                 )}
                              </>
                            )}
                          </Popover>
                          
           </div>
          
         
      
           
       
       )}
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
              <HeaderIcon active Icon={UserGroupIcon} />
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
        <button
          data-testid="settings-button"
          type="button"
          onClick={GoToAccount}
        >
          <CogIcon className="icon" />
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
