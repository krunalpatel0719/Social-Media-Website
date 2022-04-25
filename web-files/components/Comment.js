import {
    ChatAltIcon,
    ShareIcon,
    ThumbUpIcon,
    PencilAltIcon,
    TrashIcon,
} from "@heroicons/react/outline";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import { auth, db } from "../firebase";
import Image from "next/image";
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

import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Comment({ doc_id, origin_DocID, username, profile_picture, content, uid, timestamp }) {

    // Renders a comment and it's functions

    // Sets the state and variables of the comment component
    const router = useRouter();
    const user = auth.currentUser;

    let [referenceElement, setReferenceElement] = useState();
    let [popperElement, setPopperElement] = useState();
    let [newMessage, setNewMessage] = useState("");
    let [editState, setEditState] = useState(false);
    let { styles, attributes } = usePopper(referenceElement, popperElement, {
        placement: "bottom-end",
    });

    // Handles the edit of a comment 

    const handleMessageChange = (e) => {

        let target_value = e.target.value;
        setNewMessage(target_value);
    }
    // Delete/Update/Edit functions for the comment 
    const deleteComment = async (e) => {
        setEditState(false);
        await deleteDoc(doc(db, "Comments",  doc_id));

        const storage = getStorage();

        const postRef = ref(storage, 'Comments/' +  doc_id);

        // Delete the file
        deleteObject(postRef).then(() => {
            // File deleted successfully
        }).catch((error) => {
            console.log(error);
            // Uh-oh, an error occurred!
        });

    };
    const editComment = (e) => {

        setEditState(true);
    };
    const updateComment = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, "Comments",  doc_id), {
            content: newMessage
        });
        setEditState(false);
    }
    return (
        <div className="flex flex-col ">
            <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
                <div className="flex items-center justify-between space-x-2">
                <div className = 'flex  space-x-2'>
                    {/*<img className="rounded-full" src={image} width={40} height={40} />*/}
                        <div> 
                            {profile_picture ? (
                            //<img className="rounded-full object-contain h-28 w-28" src={profile_picture}/>
                            <div className=" relative rounded-full border border-black h-12 w-12">
                                <Image src={profile_picture} className = "rounded-full" objectFit="contain" layout="fill" />
                            </div>
                            ) : (
                            <AccountCircleIcon style={{ fontSize: 46 }} className = "text-blue-300 rounded-full"></AccountCircleIcon>
                            )}
                            
                        {/* <img className="rounded-full" src={AccountCircleIcon} width={40} height={40} /> */}
                        </div>
                        <div>
                            <p className="font-medium">{username}</p>
                            {timestamp ? (
                                <p className="text-xs text-gray-400">
                                    {new Date(timestamp?.toDate()).toLocaleString()}
                                </p>
                            ) : (
                                <p className="text-xs text-gray-400">Loading</p>
                            )}
                        </div>
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
                                                        editComment();
                                                        close();
                                                    }}
                                                    className="text-sm "
                                                >
                                                    {" "}
                                                    Edit Commnet{" "}
                                                </button>
                                            </div>
                                            <div className="text-red-500 flex items-center hover:text-red-400">
                                                <TrashIcon className="h-4 pr-1" />
                                                <button
                                                    onClick={() => {
                                                        deleteComment();
                                                        close();
                                                    }}
                                                    className="text-sm "
                                                >
                                                    {" "}
                                                    Delete Comment{" "}
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
                                defaultValue={content}
                            />
                        </form>
                        <div className="flex mt-3 py-2 ">
                            <button
                                type="button"
                                onClick={updateComment}
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
                    <p className="pt-4">{content}</p>
                )}
            </div>

        </div>
    );

}

export default Comment;
