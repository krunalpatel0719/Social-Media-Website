import { PlusCircleIcon } from "@heroicons/react/outline";
import { CameraIcon, UserAddIcon } from '@heroicons/react/solid';
import { doc, collection, setDoc, addDoc, getDoc } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { getAuth } from 'firebase/auth';
import { db } from '../firebase';
import "firebase/firestore";
import { getFirestore, serverTimestamp } from "firebase/firestore";

import "firebase/storage";
import "../firebase";
import { getStorage, ref, getDownloadURL, uploadBytesResumable, uploadString, UploadTask } from "firebase/storage";
import * as firebase from "firebase/app";
import SendIcon from '@material-ui/icons/Send';
import { usePopper } from "react-popper";

function Comment_IputBox(props) {

    // Renders the input box for the comment page 
    
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();
    const user = auth.currentUser;
    const inputRef = useRef(null);
    const filepickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    let [referenceElement, setReferenceElement] = useState();
    let [popperElement, setPopperElement] = useState();
    let [newMessage, setNewMessage] = useState("");
    let [editState, setEditState] = useState(false);
    let [likeState, setLikeState] = useState(false);
    let { styles, attributes } = usePopper(referenceElement, popperElement, {placement: "bottom-end"} );


    const [username, setUsername] = useState(user && (user.displayName));
    const [profilePicture, setProfilePicture] = useState('');
    const setPageUsername = async () => {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        setUsername(docSnap.data().username)
        setProfilePicture(docSnap.data().profile_picture)
    }

    setPageUsername()

    const sendComment = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) {
            console.log("something went wrong");
            return
        };
        const auth = getAuth();
        const user = auth.currentUser;
        addDoc(collection(db, 'Comments'), {
            content: inputRef.current.value,
            uid: user.uid,
            username: user.displayName,
            timestamp: serverTimestamp(),
            origin_docID:props.post_originID,
            profile_picture: profilePicture
        }).then( doc2 =>{
            const storageRef = ref(storage, `Comments/${doc2.id}`);
            setDoc(doc(db, "Comments", doc2.id), {
                doc_id: doc2.id
            }, {merge: true});
            });
        inputRef.current.value = "";
        };

    return (

        <div className="bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium
        mt-6">
            <div className="flex space-x-4 p-4 items-center">
                {/*  <PlusCircleIcon className="h-6 text-blue-600 rounded-full"/> */}
                <form className="flex flex-1">
                    <input type="text" placeholder={`Type a comment`}
                        ref={inputRef}
                        className="rounded-full h-12 bg-blue-100 flex-grow px-5 
                    focus:outline-none"></input>

                    <button className="pl-4" type="submit" onClick={sendComment}>
                        <SendIcon className="h-6 text-blue-400 rounded-full" />

                    </button>


                </form>


            </div>
            {imageToPost && (
                <div onClick={removeImage} className="py-2 flex items-center  flex-col filter 
                hover:brightness-110 transition duration-150 transform hover:scale-105
                cursor-pointer">
                    <img className="h-10" src={imageToPost} />
                    <p className="text-xs text-red-500 text-center">Remove</p>
                </div>
            )}

        </div>
    )
}

export default Comment_IputBox