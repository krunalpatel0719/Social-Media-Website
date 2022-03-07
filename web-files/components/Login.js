import react from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth, db} from "../firebase";

function Login(props){
        return (
            
        <div className="container max-w-full mx-auto py-24 px-6">
            <div className="font-sans">
            <div className="max-w-sm mx-auto px-6">
                <div className="relative flex flex-wrap">
                <div className="w-full relative">
                    <div className="mt-6">
                    <div className="text-center font-semibold text-black">
                        Join The Lounge
                    </div>
                    <form  id = "login-form" className="mt-8">
                        <div className="mx-auto max-w-lg">
                        <div className="py-2">
                            <span className="px-1 text-sm text-gray-600">Email</span>
                            <input  id = "login-email" placeholder="email" type="email"
                            className="text-md block px-3 py-2  rounded-lg w-full 
                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                        </div>
                        <div className="py-2" x-data="{ show: true }">
                            <span className="px-1 text-sm text-gray-600">Password</span>
                            <div className="relative">
                            <input type="password" id="login-password" placeholder="Password" className="text-md block px-3 py-2 rounded-lg w-full 
                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                            focus:placeholder-gray-500
                            focus:bg-white 
                            focus:border-gray-600  
                            focus:outline-none"></input>

                            </div>
                            </div>
                        </div>
                                <button className="mt-3 text-lg font-semibold 
                            bg-gray-800 w-full text-white rounded-lg
                            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                            Login
                        </button>
                    </form>
                
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        );
    }

export default Login