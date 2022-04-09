import InputBox from "./InputBox"
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import {collection, query, where, getDoc, doc, FieldPath, documentId, getDocs, docs} from "firebase/firestore";
import Request from "./Request";
import { DocumentDownloadIcon } from "@heroicons/react/solid";
import {useState, useEffect} from "react";


function Requests({ posts }) {
    const user = auth.currentUser;
    
    return(
        <div>
            
        </div>
        
    )
}

export default Requests