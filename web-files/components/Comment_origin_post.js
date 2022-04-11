import {
  ChatAltIcon,
  ShareIcon,
  ThumbUpIcon,
  PencilAltIcon,
  TrashIcon,
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
  collection,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, deleteObject } from "firebase/storage";
import React, { useState, useEffect } from "react";

import { Popover, Transition } from "@headlessui/react";
import { usePopper } from "react-popper";

import { useRouter } from 'next/router'


function Post({ key_id, name, message, uid, postImage, timestamp, likes }) {
  
  // Loads the original post for the comment 

  const router = useRouter();
  const user = auth.currentUser;
  const GoToComment = () => {
    router.push({
      pathname: `/Comment_InputBox`,
      query: { post_id: key_id }
    });
  }
  let [referenceElement, setReferenceElement] = useState();
  let [popperElement, setPopperElement] = useState();
  let [newMessage, setNewMessage] = useState("");
  let [editState, setEditState] = useState(false);
  let [likeState, setLikeState] = useState(false);
  let { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: "bottom-end",
  });

  

  const handleMessageChange = (e) => {

    let target_value = e.target.value;
    setNewMessage(target_value);
  }
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

  
  const editPost = (e) => {

    setEditState(true);
  };
  const updatePost = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "Posts", key_id), {
      content: newMessage
    });
    setEditState(false);
  }
  const likePost = (e) => {
    setLikeState(!likeState);
    if (likeState) {
      likes = 1;
    } else {
      likes = 0;
    }
  }
  return (
    <div className="flex flex-col ">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center justify-between space-x-2">
          {/*<img className="rounded-full" src={image} width={40} height={40} />*/}
          <div>
            <p className="font-medium">{name}</p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
          {user.uid == uid && (
            <div className="text-right">
              <Popover>
                {({ open, close }) => (
                  <>
                    <Popover.Button ref={setReferenceElement}>
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
          <div className='flex flex-col  justify-center '>
            <form onSubmit={e => { e.preventDefault() }} className='pt-4 '>
              <input className="w-full h-full border-2 border-blue-400 rounded focus:border-blue-500 focus:outline-none"
                type="text"
                onChange={handleMessageChange}
                defaultValue={message}
              />
            </form>
            <div className="flex mt-3 py-2 ">
              <button
                type="button"
                onClick={updatePost}
                className="mx-1 text-md font-semibold text-centered text-white rounded-full  w-20  block shadow-xl
                                transition ease-in-out  bg-blue-500 hover:bg-blue-400 duration-400"
              >
                Update
              </button>
              <button
                type="button"
                onClick={e => { e.preventDefault(); setEditState(false) }}
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
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="contain" layout="fill" />
        </div>
      )}

      
    </div>
  );
  
}

export default Post;
