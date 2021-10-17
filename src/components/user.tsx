import React, { useState } from 'react';
import { signInWithRedirect, getRedirectResult, onAuthStateChanged, signOut } from "firebase/auth";
import { Redirect } from "react-router-dom";

import { auth, provider } from '../services/firebase';

const User = () => {

    getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;

            // The signed-in user info.
            // const user = result.user;
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    const [currentUser, setCurrentUser] = useState(Object);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user)
        } else {
            setCurrentUser(undefined)
        }
    });

    if (currentUser) return (
        <>
            <Redirect to="/activities" />
            <div className="user">
                <img className="user-img" src={currentUser.photoURL} />
                <p className="user-name">Hello, <b>{currentUser.displayName}</b></p>
                <button className="button" onClick={() => signOut(auth)}>Sign Out</button>
            </div>
        </>
    )
    
    return (
        <div>
            <Redirect to="/" />
            <div className="user">
                <button className="button" onClick={() =>  signInWithRedirect(auth, provider)}>Sign In</button>
            </div>
        </div>
    )
}

export default User;