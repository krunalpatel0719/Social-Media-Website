import InputBox from "./InputBox"
import Posts from "./Posts";
import {collection, query, orderBy, where, updateDoc, doc, setDoc} from "firebase/firestore";
import { db, user, deleteUser} from "../firebase";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useCollection } from "react-firebase-hooks/firestore";

function AccountInfo({ posts }) {
    const auth = getAuth();
    const user = auth.currentUser;
    //where the real magic will happen//
    const [userInfo, loading, error] =  useCollection(
        query(collection(db, "Users"), where('email', "==", user.email))
     );
    let uid;
    let name;
    let email;
    let username;
    let bio;
    let age;
    let gender;
     userInfo?.docs.map((data) => (
       uid = data.id,
       name = data.data().first_name + " " + data.data().last_name,
       email = data.data().email,
       username = data.data().username,
       bio = data.data().bio,
       age = data.data().age,
       gender = data.data().gender
      ))

      if(!bio){
          bio = ""
      }
      if(!age){
          age = ""
      }
      if(!gender){
          gender = ""
      }

    const updateBio = (e) => {
        e.preventDefault();
        updateDoc(doc(db, "Users", uid), {
            bio: document.getElementById("bio").value
        })
    }

    const updateAge = (e) => {
        e.preventDefault();
        updateDoc(doc(db, "Users", uid), {
            age: document.getElementById("age").value
        })
    }

    const updateGender = (e) => {
        e.preventDefault();
        updateDoc(doc(db, "Users", uid), {
            gender: document.getElementById("gender").value
        })
    }

    const deleteAccount = () => {
        deleteUser(user);
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
                <form>
                    <input placeholder={bio} id="bio"></input>
                    <button type="submit" onClick={updateBio}>update bio</button>
                </form>
                
                <p>age (editable): </p>
                <form>
                    <input placeholder={age} id="age"></input>
                    <button type="submit" onClick={updateAge} >update age</button>
                </form>
                
                <p>gender (editable): </p>
                <form>
                    <input placeholder={gender} id="gender"></input>
                    <button type="submit" onClick={updateGender} >update gender</button>
                </form>
                
                <p>delete account button (require confirmation)</p>
                <button type="submit" /**onClick={deleteAccount} */>Yes</button>
            </div>
        </div>
    )
}

export default AccountInfo