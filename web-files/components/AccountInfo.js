import { useState, useEffect, useRef } from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";

import Image from "next/image";

import {
  collection,
  query,
  orderBy,
  where,
  updateDoc,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { db, user } from "../firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  deleteUser,
} from "firebase/auth";
import {
  getStorage,
  ref,
  getDownloadURL,
  deleteObject,
  uploadBytesResumable,
  uploadString,
  UploadTask,
} from "firebase/storage";

import { useCollection } from "react-firebase-hooks/firestore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EditIcon from "@material-ui/icons/Edit";

import { UserCircleIcon } from "@heroicons/react/solid";
import { PencilIcon } from "@heroicons/react/solid";

import ClientOnlyPortal from "./ClientOnlyPortal";

function AccountInfo({ posts }) {
  const auth = getAuth();
  const user = auth.currentUser;
  const storage = getStorage();

  // States for all the settings info such as bio, username, age, email, gender, etc

  const [isOpen, setIsOpen] = useState(false);

  const [userInfo, loading, error] = useCollection(
    query(collection(db, "Users"), where("email", "==", user && user.email))
  );
  const [bio, setBio] = useState("Edit bio here");
  const [username, setUsername] = useState("");
  const [uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [localGender, setLocalGender] = useState("Male");
  const [localBio, setLocalBio] = useState("");
  const initialSettingsData = {
    bio: "Edit bio here",
    age: 18,
    gender: "Male",
  };

  const [settingsData, updateSettingsData] = useState(initialSettingsData);

  const filepickerRef = useRef(null);
  const [imageToProfile, setImageToProfile] = useState(null);
  // Updates the variables when the page mounts

  useEffect(async () => {
    if (user) {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      setLocalGender(docSnap.data().gender || "Male");
      setLocalBio(docSnap.data().bio);

      updateSettingsData({
        ...settingsData,

        // Trimming any whitespace
        ["bio"]: docSnap.data().bio,
        ["age"]: docSnap.data().age,
        ["gender"]: docSnap.data().gender,
      });
    }
  }, []);

  useEffect(() => {
    if (user) {
      userInfo?.docs.map((data) => {
        if (data.data()) {
          setUid(data.id);
          setName(data.data().first_name + " " + data.data().last_name);
          setEmail(data.data().email);
          setAge(data.data().age);
          setGender(data.data().gender);
          setUsername(data.data().username);
          setBio(data.data().bio);
          setImageToProfile(data.data().profile_picture);
        }
      });
    }
  });

  // Handlers for the input change and sets the variables to that

  const handleGenderChange = (e) => {
    let target_value = e.target.value.trim();
    setLocalGender(target_value);
    updateSettingsData({
      ...settingsData,

      // Trimming any whitespace
      [e.target.name]: target_value,
    });
  };

  const handleFormChange = (e) => {
    let target_value = e.target.value.trim();

    updateSettingsData({
      ...settingsData,

      // Trimming any whitespace
      [e.target.name]: target_value,
    });
  };

  // Updates the firebase to the input of the variables

  const updateBio = (e) => {
    e.preventDefault();
    updateDoc(doc(db, "Users", uid), {
      bio: settingsData.bio,
    });
  };

  const updateAge = (e) => {
    e.preventDefault();
    updateDoc(doc(db, "Users", uid), {
      age: settingsData.age,
    });
  };

  const updateGender = (e) => {
    e.preventDefault();
    updateDoc(doc(db, "Users", uid), {
      gender: settingsData.gender,
    });
  };

  const deleteAccount = () => {
    deleteUser(user);
  };

  const removeProfilePicture = () => {
     updateDoc(doc(db, "Users", uid), {
        profile_picture: null,
      });
  }

  const addImageToProfile = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToProfile(readerEvent.target.result);

      const storageRef = ref(storage, `ProfilePictures/${uid}`);

      // deleteObject(storageRef).then(() => {

      // }).catch((error) => {
      //   console.log(error);

      // });

      const uploadTask = uploadString(
        storageRef,
        readerEvent.target.result,
        "data_url"
      );
      uploadTask.then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          updateDoc(doc(db, "Users", uid), {
            profile_picture: url,
          });
        });
      });
    };
  };

  return (
    <div
      className={`${isOpen ? "blur-md" : ""} flex-grow  pb-12 pt-16 mr-4
        xl:mr-40 overflow-y-auto `}
    >
      <div className="pt-6 font-sans border bg-white rounded-xl shadow-xl mx-auto max-w-md md:max-w-lg lg:max-w-4xl ">
        <div
          role="account-form"
          className="flex flex-col items-center p-2 text-grey-500 font-medium
         "
        >
          <div className="relative w-28 h-28">
            {imageToProfile ? (
              <img
                className="rounded-full object-contain h-28 w-28"
                src={imageToProfile}
              />
            ) : (
              <AccountCircleIcon
                style={{ fontSize: 128 }}
                className="text-blue-300"
              ></AccountCircleIcon>
            )}

            <button onClick={() => filepickerRef.current.click()}>
              <PencilIcon
                className={`${
                  imageToProfile ? " mt-2" : "ml-2 mt-2"
                } absolute top-20 left-20  bg-blue-600 rounded-full p-1 text-white h-7 z-10 hover:bg-blue-500 `}
              ></PencilIcon>
            </button>
            <input
              ref={filepickerRef}
              onChange={addImageToProfile}
              type="file"
              hidden
            ></input>
          </div>
          <p className="pb-10 pt-2 font-large text-3xl ">{name}</p>
          <div className="w-full">
            <div className="pl-10 py-3 flex flex-col ">
              <span className=" text-sm text-gray-600">Username</span>
              <label
                className="  pr-4 pl-1 text-md  rounded-lg py-1 w-52
                              bg-white border-2 border-gray-300"
              >
                {username}
              </label>
            </div>
            <div className="pl-10 py-3 flex flex-col  ">
              <span className=" text-sm text-gray-600">Email</span>
              <label
                className=" pr-4 pl-1 text-md  py-1 rounded-lg  
                              bg-white border-2 border-gray-300 w-2/3"
              >
                {email}
              </label>
            </div>
            <div className="pl-10 py-3 flex flex-col  ">
              <span className="text-sm text-gray-600">Bio</span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex justify-between"
              >
                <input
                  defaultValue={localBio}
                  name="bio"
                  onChange={handleFormChange}
                  className=" font-medium pr-4 pl-1 text-md  py-1 rounded-lg  
                              bg-white border-2 border-gray-300 w-2/3 focus:border-blue-600 focus:outline-none"
                ></input>
                <button
                  type="button"
                  onClick={updateBio}
                  className="w-24 lg:w-28 h-auto text-md font-semibold text-centered  text-white rounded-full  lg:mr-20  block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                >
                  Update Bio
                </button>
              </form>
            </div>
            <div className="pl-10 py-3 flex flex-col  ">
              <span className="text-sm text-gray-600">Age</span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex justify-between"
              >
                <input
                  defaultValue={age}
                  name="age"
                  type="number"
                  role="age-input"
                  onChange={handleFormChange}
                  className=" font-medium pr-4 pl-1 text-md  py-1 rounded-lg  
                              bg-white border-2 border-gray-300 w-52 focus:border-blue-600 focus:outline-none"
                ></input>
                <button
                  type="button"
                  onClick={updateAge}
                  className="w-24 lg:w-28 h-auto text-md font-semibold text-centered  text-white rounded-full  lg:mr-20  block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                >
                  Update Age
                </button>
              </form>
            </div>
            <div className="pl-10 py-3 flex flex-col  ">
              <span className="text-sm text-gray-600">Gender</span>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex justify-between"
              >
                <select
                  onChange={handleGenderChange}
                  value={localGender}
                  name="gender"
                  className=" font-medium pr-4 pl-1 text-md  py-1 rounded-lg  
                              bg-white border-2 border-gray-300 w-52 focus:border-blue-600 focus:outline-none"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>

                <button
                  type="button"
                  onClick={updateGender}
                  className="w-24 lg:w-28 h-auto text-sm font-semibold text-centered  text-white rounded-full  lg:mr-20  block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400 "
                >
                  Update Gender
                </button>
              </form>
            </div>
            <div className="flex  flex-grow h-40 flex-col items-center justify-evenly mt-12">
             <button
                  type="button"
                 
                  onClick = {removeProfilePicture}
                  className="w-36 h-10 text-xs font-semibold text-centered  text-white rounded-full block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                >
                  Remove Profile Picture
                  
                </button>
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="w-36 h-10 text-md font-semibold text-centered  text-white rounded-full block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <ClientOnlyPortal selector="#deleteAccount-portal">
          <div className="flex h-screen m-auto">
            <div className="font-sans m-auto flex-grow">
              <div className="shadow-md rounded-xl bg-white mx-auto py-8 pb-3 px-10">
                <div className="relative flex flex-wrap">
                  <div className="">
                    <div className="">
                      <div className="font-bold font-poppins pb-6 text-center text-2xl text-black">
                        Delete Account
                      </div>
                      <p className="pb-5">
                        {" "}
                        Do you want to delete your account?{" "}
                      </p>
                      <div className="flex w-full">
                        <button
                          type="button"
                          onClick={deleteAccount}
                          className="mx-4 w-28 h-10 text-sm font-semibold text-centered  text-white rounded-full block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                        >
                          Delete Account
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsOpen(false)}
                          className="mx-4 w-28 h-10 text-sm font-semibold text-centered  text-white rounded-full block shadow-xl
                              transition ease-in-out bg-blue-600 hover:bg-blue-500 duration-400"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ClientOnlyPortal>
      )}
    </div>
  );
}

export default AccountInfo;
