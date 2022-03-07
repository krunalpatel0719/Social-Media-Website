import { PlusCircleIcon } from "@heroicons/react/outline";
import {CameraIcon, UserAddIcon} from '@heroicons/react/solid';
import { collection, addDoc, getDoc } from "firebase/firestore";
import {useRef, useState} from "react";
import {getAuth} from 'firebase/auth';
import {db} from '../firebase';
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import "../firebase";
import { getStorage, ref, getDownloadURL, uploadString, UploadTask} from "firebase/storage";


function InputBox() {
    const auth = getAuth();
    const db = getFirestore();
    const storage = getStorage();
    const user = auth.currentUser;
    const inputRef = useRef(null);
    const filepickerRef = useRef(null); 
    const [imageToPost, setImageToPost] = useState(null);

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
            userID: user.email
        })
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
                <PlusCircleIcon className="h-6 text-blue-600 rounded-full"/>
                <form className="flex flex-1">
                    <input type="text" placeholder="Make a Post" 
                    ref={inputRef}
                    className="rounded-full h-12 bg-blue-100 flex-grow px-5 
                    focus:outline-none"></input>
                    <button type="submit" hidden onClick={sendPost}>Post</button>

                </form>
                {imageToPost && (
                    <div onClick={removeImage} className="flex flex-col filter 
                    hover:brightness-110 transition duration-150 transform hover:scale-105
                    cursor-pointer">
                        <img className="h-10" src={imageToPost}/>
                        <p className="text-xs text-red-500 text-center">Remove</p>
                    </div>
                )}
            </div>
            <div className="flex justify-evenly p-3 border-t">
                <div onClick={() => filepickerRef.current.click()} className="inputIcon">
                <CameraIcon className="h-7 text-blue-400" />
                <p className="text-xs sm:text-sm xl:test-base">Attach Photo to Post</p>
                <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden></input>
                </div>
            </div>
        </div>
    )
}

export default InputBox