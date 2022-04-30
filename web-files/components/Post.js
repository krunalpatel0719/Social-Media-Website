import {
  ChatAltIcon,
  ShareIcon,
  ThumbUpIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon
} from "@heroicons/react/outline";
import Image from "next/image";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { auth, db } from "../firebase";
import {
  doc,
  addDoc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  getDocs,
  getFirestore,
  deleteField,
  collection,
  query,
  where,
  increment,
} from "firebase/firestore";


import { getStorage, ref, deleteObject } from "firebase/storage";
import React, { useState, useEffect, useRef} from "react";

import { Popover, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";
import { useRouter } from 'next/router'

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchUserBox from "./SearchUserBox";
import ShareUserBox from "./ShareUserBox";
import { AddBusinessRounded } from "@mui/icons-material";


function Post({ key_id, name, message, uid, profile_picture, postImage, timestamp, likes, friends}) {
  const router = useRouter();
  const user = auth.currentUser;
  
  const wrapperRef = useRef(null);
  
  const [searchArray, setSearchArray] = useState([])
  //const [targetUser, setTargetUser] = useState("");
  
  // Creates the post content 
  
  // Redirects to comment page 

  const GoToComment = () => {
    router.push({
      pathname: `/CommentsPage`,
      query: { post_id: key_id }
    });
  }

  const GoToUser = () => {
    router.push({
      pathname: `/SearchedUserPage`,
      query: { user_id: uid }
    });
  }

  // Sends a friend request 

  const sendFriendRequest = () => {
    setDoc(doc(db, "FriendRequests", uid), {
      [user.uid]:true
    }, {merge: true})
  }

  // React states for the post 

  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let [newMessage, setNewMessage] = useState("");
  const [editState, setEditState] = useState(false);
  const [likeState, setLikeState] = useState(false);
  
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
  });

  // Handles when the message changes for the post 

  const handleMessageChange = (e) => {
    
    let target_value = e.target.value;
    setNewMessage(target_value);
  }

  // Deletes post 

  const deletePost = async (e) => {
    setEditState(false);
    await deleteDoc(doc(db, "Posts", key_id));

    const storage = getStorage();

    const postRef = ref(storage, 'Posts/' + key_id);

    // Delete the file
    deleteObject(postRef).then(() => {
      // File deleted successfully
    }).catch((error) => {
      console.log(error);
      // Uh-oh, an error occurred!
    });

  };

  // Edits, updates, and like post functions 

  const editPost = (e) => {
   
    setEditState(true);
  };

  
  const updatePost =  (e) => {
    e.preventDefault();
     updateDoc(doc(db, "Posts", key_id), {
      content: newMessage
    });
    setEditState(false);
  }
  const likePost =  (e) => {
    setLikeState(!likeState);
    if (key_id == null) {
     
      return false;
    }
    if (likeState) {
      
       updateDoc(doc(db, "LikedPosts", user.uid), {
          [key_id]: deleteField()
      });
      const doc_ref = doc(db, "Posts", key_id)
      
         updateDoc(doc(db, "Posts", key_id), {
        likes: increment(-1)
      });
    }
    else {
      
         setDoc(doc(db, "LikedPosts", user.uid), {
          [key_id]: true
          
        }, {merge: true});
      
        
         updateDoc(doc(db, "Posts", key_id), {
          likes: increment(1)
        });
    }
    
    
  }
  // Loads in the like state when the page renders 
  
  useEffect(async () => {
    if (user) {
    const docRef = doc(db, "LikedPosts", user.uid);
    const docSnap = await getDoc(docRef);
   
    if (docSnap.exists()) {
      if (docSnap.data()[key_id]) {
        setLikeState(true)
        
      }
      else (
        setLikeState(false)
      )
     
    }
    
  }
  })
  useEffect(async () => {
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
     
    

    //setSearchArray(tempArray)
  }, [])
  return (
    <div  role = 'post' className="flex flex-col ">
      <div  className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center justify-between space-x-2">
          <div className = 'flex  space-x-2 '>
            <div> 
                {profile_picture ? (
                  //<img className="rounded-full object-contain h-28 w-28" src={profile_picture}/>
                  <div onClick = {GoToUser} className=" cursor-pointer relative rounded-full border border-black h-12 w-12">
                    <Image src={profile_picture} className = "rounded-full" objectFit="contain" layout="fill" />
                  </div>
                ) : (
                  <AccountCircleIcon style={{ fontSize: 46 }} onClick = {GoToUser} className = "cursor-pointer text-blue-300 rounded-full"></AccountCircleIcon>
                )}
                
              {/* <img className="rounded-full" src={AccountCircleIcon} width={40} height={40} /> */}
            </div>
            {/*<img className="rounded-full" src={image} width={40} height={40} />*/}
            <div>
              <p className="flex-grow font-medium flex items-center pb-1">{name}
                {uid != user.uid && friends.includes(uid) == false && (<UserAddIcon onClick={sendFriendRequest} className="ml-2 h-5 w-5 hover:text-blue-400 cursor-pointer" /> )}
               
                
              </p>

              
              {timestamp ? (
                <p className="text-xs text-gray-400">
                  {new Date(timestamp?.toDate()).toLocaleString()}
                </p>
              ) : (
                <p className="text-xs text-gray-400">Loading</p>
              )}
            </div>
          </div> 
          {user && user.uid == uid && (
            <div className="text-right">
              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button  ref={setReferenceElement}>
                      <DotsHorizontalIcon className="font-medium h-6 hover:text-neutral-600" />
                    </Popover.Button>

                    <Popover.Panel
                    
                      className="rounded-md p-2 shadow-sm bg-white border flex flex-col "
                      ref={setPopperElement}
                      style={styles.popper}
                      {...attributes.popper}
                    >
                      <div className="flex items-center mb-1 text-yellow-500 hover:text-yellow-400">
                        <PencilAltIcon className="h-4 pr-1" />
                        <button
                          onClick={() => {
                            editPost();
                            close();
                          }}
                          className="text-sm "
                        >
                          {" "}
                          Edit Post{" "}
                        </button>
                      </div>
                      <div className="text-red-500 flex items-center hover:text-red-400">
                        <TrashIcon className="h-4 pr-1" />
                        <button
                          onClick={() => {
                            deletePost();
                            close();
                          }}
                          className="text-sm "
                        >
                          {" "}
                          Delete Post{" "}
                        </button>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>
            </div>
          )}
        </div>
        {editState ? (
          <div className = 'flex flex-col  justify-center '> 
            <form onSubmit={e => { e.preventDefault()}} className = 'pt-4 '>
              <input className = "w-full h-full border-2 border-blue-400 rounded focus:border-blue-500 focus:outline-none"
                type="text"
                onChange={handleMessageChange}
                defaultValue={message}
              />
            </form>
            <div className = "flex mt-3 py-2 ">
              <button
                          type="button"
                          onClick = {updatePost}
                          className="mx-1 text-md font-semibold text-centered text-white rounded-full  w-20  block shadow-xl
                                transition ease-in-out  bg-blue-500 hover:bg-blue-400 duration-400"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          onClick = {e => {e.preventDefault(); setEditState(false)}}
                          className="mx-1 text-md font-semibold text-centered text-white rounded-full  w-20  block shadow-xl
                                transition ease-in-out  bg-blue-500 hover:bg-blue-400 duration-400"
                        >
                          Cancel
                        </button>
              </div>
          </div>
          
          

        ) : (
          <p className="pt-4">{message}</p>
        )}
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96  bg-white">
          <Image src={postImage} className = "" objectFit="contain" layout="fill" />
        </div>
      )}

      {/* Post Footer */}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
      <div className="inputIcon p-3 rounded-none rounded-bl-2xl">
          <button role = "like-button" onClick={likePost} className="inputIcon p-3 rounded-none ">
            <ThumbUpIcon data-testid = "thumbs-icon" className={`${likeState ? "text-blue-400" : ""} h-4`} />
            <p className="text-xs sm:text-base">{likes}</p>
            </button>
        </div>

        <div className="inputIcon p-3 rounded-none">
        <button onClick={GoToComment} className="inputIcon p-3 rounded-none">
            <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
          </button>
        </div>

        <div className="inputIcon p-3 rounded-none rounded-br-2xl">
          <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button  ref={setReferenceElement}>
                      <div className="inline-flex">
                        <ShareIcon className="h-4 justify-center" />
                        <p className="justify-center">Share</p>
                      </div>
                      
                    </Popover.Button>

                    <Popover.Panel
                      className="rounded-md p-2 shadow-sm bg-white border flex flex-col "
                      ref={setPopperElement}
                      style={styles.popper}
                      {...attributes.popper}
                    >
                      <button onClick={() => {
                            close();
                            alert("Post successfully shared!");
                          }}>
                      <div ref={wrapperRef}  className="overflow-y-auto  flex-shrink w-36 h-36 md:w-42 md:h-42 lg:w-52 lg:h-52 flex flex-col justify-items-center">
                                  {searchArray.map((person) => (
                                    <ShareUserBox post_id = {key_id} profile_image = {person.profile_picture} username = {person.username} uid = {person.uid}/>
                                  ))}
                                    

                                  </div>
                            </button>
                      
                    </Popover.Panel>
                  </>
                )}
              </Popover>
        </div>
      </div>
    </div>
  );
}

export default Post