import { PlusCircleIcon } from "@heroicons/react/outline";
import {CameraIcon, UserAddIcon} from '@heroicons/react/solid';
import {doc,  collection, setDoc, addDoc, getDoc } from "firebase/firestore";
import React, {useRef, useState} from "react";
import {getAuth} from 'firebase/auth';
import {db} from '../firebase';
import "firebase/firestore";
import { getFirestore, serverTimestamp} from "firebase/firestore";

import "firebase/storage";
import "../firebase";
import { getStorage, ref, getDownloadURL, uploadBytesResumable, uploadString, UploadTask} from "firebase/storage";
import * as firebase from "firebase/app";
import SendIcon from '@material-ui/icons/Send';


function InputBox() {
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();
    const user = auth.currentUser;
    const inputRef = useRef(null);
    const filepickerRef = useRef(null); 
    const [imageToPost, setImageToPost] = useState(null);

    const [username, setUsername] = useState(user && (user.displayName));
        
    const setPageUsername = async () => {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        setUsername(docSnap.data().username)
    }
    
    setPageUsername()

    const sendPost = (e) => {
        e.preventDefault();
        if(!inputRef.current.value) {
            console.log("something went wrong");
            return
        };
        const auth = getAuth();
        const user = auth.currentUser;
        addDoc(collection(db, 'Posts'), {
            content: inputRef.current.value,
            uid: user.uid,
            username: user.displayName,
            timestamp: serverTimestamp(),
            
        }).then( doc2 =>{
            if(imageToPost){
                const storageRef = ref(storage, `Posts/${doc2.id}`);
                const uploadTask = uploadString(storageRef, imageToPost, 'data_url');

                removeImage();
               
                uploadTask.then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        setDoc(doc(db, "Posts", doc2.id), {
                            postImage: url
                        }, {merge: true})
                    })

                })
               /*
                const uploadTask = uploadBytesResumable (storageRef, imageToPost, 'data_url');

                removeImage();
               
                uploadTask.on('state_changed', null, (error) => console.error(error), () => {
                    //When the upload completes
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setDoc(doc(db, "Posts", doc2.id), {
                            postImage: url
                        }, {merge: true})
                    })
                })

                */
            }
            inputRef.current.value = "";
        });
        
        
        /*Upload Image to File
        
        .then( doc =>{
            if(imageToPost){
                const uploadTask = ref(storage, `Posts/${doc.id}`);
                uploadString(uploadTask, imageToPost, 'data_url');

                removeImage();

                uploadTask.on('state_changed', null, (error) => console.error(error), () => {
                    //When the upload completes
                    getDownloadURL(ref(storage, `Posts/${doc.id}`)).then(url => {
                        getDoc(collection(db,'Posts'), doc.id).set({
                            postImage: url
                        }, {merge: true})
                    })
                })
            }
            inputRef.current.value = "";
        });*/
        inputRef.current.value="";
    };

    const addImageToPost = (e)=>{
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    };

    const removeImage = () => {
        setImageToPost(null);
    }

    return(
        <div className="bg-white p-2 rounded-2xl shadow-md text-grey-500 font-medium
        mt-6">
            <div className="flex space-x-4 p-4 items-center">
              {/*  <PlusCircleIcon className="h-6 text-blue-600 rounded-full"/> */}
                <form className="flex flex-1">
                    <input type="text" placeholder={`What's on your mind ${username}?`}
                    ref={inputRef}
                    className="rounded-full h-12 bg-blue-100 flex-grow px-5 
                    focus:outline-none"></input>
                    
                    <button className = "pl-4" type="submit"  onClick={sendPost}>
                        <SendIcon className="h-6 text-blue-400 rounded-full"/>
                        
                     </button>

                    
                </form>
               
                
            </div>
            {imageToPost && (
                <div onClick={removeImage} className="py-2 flex items-center  flex-col filter 
                hover:brightness-110 transition duration-150 transform hover:scale-105
                cursor-pointer">
                    <img className="h-10" src={imageToPost}/>
                    <p className="text-xs text-red-500 text-center">Remove</p>
                </div>
            )}
            <div className="flex justify-evenly p-3 border-t">
                <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                <CameraIcon className="pr-1 h-7 text-blue-400" />
                <p className="text-xs sm:text-sm xl:test-base">Attach Photo to Post</p>
                <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden></input>
                </div>
            </div>
        </div>
    )
}

export default InputBox