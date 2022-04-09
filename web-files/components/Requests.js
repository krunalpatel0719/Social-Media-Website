import InputBox from "./InputBox"
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import {collection, query, where, getDoc, doc, FieldPath, documentId, getDocs, docs} from "firebase/firestore";
import Request from "./Request";
import { DocumentDownloadIcon } from "@heroicons/react/solid";
import {useState, useEffect} from "react";


function Requests({ posts }) {
    const user = auth.currentUser;
    var target = false;
    //let code = ``;
    const setTarget = (data) => {
        target = data;
    }
    useEffect(async () => {
    const requests = getDoc(doc(db, "FriendRequests", user.uid)).then(document => {
        console.log('1');
        setTarget(document.data());
        console.log(target);
        /*
        Object.keys(targets).forEach((usertags) => {
            /*
            code += `<Request key_id={${usertags}} />`
            console.log(usertags);
            console.log(code);
            *//*
           console.log(usertags);
           return(
            <Request key_id={usertags} />
           )
        })*/
        //const targets = getDoc(collection(db, "Users"), document.data().id).then(docu => {
        //    console.log(docu.data())
        //})
    })
})
   
    Object.keys(target).forEach((usertags) => {
        /*
        code += `<Request key_id={${usertags}} />`
        console.log(usertags);
        console.log(code);
        */
       console.log("nothing");
       console.log(usertags);
       
    })
    //cons
    
    
    /*
    requests?.docs.map((post) => {
        const targets = useCollection(query(collection(db, "Users"), where(documentId(), "==", post.id)));
    });
    */


    /*
    const requests = getDoc(doc(db, "FriendRequests", user.uid)).then(document => {
        console.log(document.data());
        let targets = document.data();
        const users = useCollection(query(collection(db, "Users"), where(FieldPath.documentId(), 'in', targets)))
    })
    /*
    /*
    let accounts = requests.data();
    accounts.forEach(username => {
        console.log(element);
    });

    */
    return(
        <div>
            
        </div>
        
    )
}

export default Requests



/*
<div className="flex-grow  pb-44 pt-6 mr-4
        xl:mr-40 overflow-y-auto ">

            <div className="inline-flex mx-auto max-w-md md:max-w-lg lg:max-w-2xl ">
                <button type="button">Accept</button>
            </div>
            <div className="inline-flex mx-auto max-w-md md:max-w-lg lg:max-w-2xl ">
                <button type="button">Reject</button>
            </div>
    </div>
*/
