import InputBox from "./InputBox"
import Posts from "./Posts";
import {collection, query, orderBy, where} from "firebase/firestore";
import { db, user } from "../firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

function AccountInfo({ posts }) {
    const auth = getAuth();
    const user = auth.currentUser;
    //where the real magic will happen//
    const [userInfo, loading, error] =  useCollection(
        query(collection(db, "Users"), where('email', "==", user.email))
     );
    let name;
    let email;
    let username;
     userInfo?.docs.map((data) => (
       name = data.data().first_name + " " + data.data().last_name,
       email = data.data().email,
       username = data.data().username
      ))

    const updateBio = () => {
        
    }

    const updateAge = () => {

    }

    const updateGender = () => {

    }

    const deleteAccount = () => {

    }

    return(
        <div className="flex-grow  pb-44 pt-6 mr-4
        xl:mr-40 overflow-y-auto ">
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl ">
                <p className="font-large h-8">{name}</p>
                <p>{username}</p>
                <p>profilepic? (maybe who knows?)</p>
                <p className="font-medium">email: {email}</p>
                <p>bio (editable):</p>
                <input placeholder="Tell us a little about yourself "></input>
                <button type="submit" /*onClick={updateBio}*/>update bio</button>
                <p>age (editable): </p>
                <input placeholder="Enter Age"></input>
                <button type="submit" /**onClick={updateAge} */>update age</button>
                <p>gender (editable): </p>
                <input placeholder="Enter gender"></input>
                <button type="submit" /**onClick={updateGender} */>update gender</button>
                <p>delete account button (require confirmation)</p>
                <button type="submit" /**onClick={deleteAccount} */>Yes</button>
            </div>
        </div>
    )
}

export default AccountInfo