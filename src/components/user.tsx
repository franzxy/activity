import React, { useState } from 'react';
import { signInWithRedirect, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Link } from "react-router-dom";

import { auth, provider } from '../services/firebase';
import Loading from './loading';

const User = () => {

    const [user, loading, error] = useAuthState(auth);

    const userButton = () => {
        if (user) {
            signOut(auth)
        } else {
            signInWithRedirect(auth, provider)
        }
    }

    return (
        <div className="user">
            {loading ? <Loading /> : user && <>
                <Link to="/activities" className="link">
                    <p className="user-name">Hello, <b>{user.displayName}</b></p>
                    <img className="user-img" src={user.photoURL} />
                </Link>
            </>}
            <button className={"button "+(loading ? "inactive" : "active")} onClick={() => userButton()}>
                {loading ? <Loading /> : (user ? <i>Sign Out</i> : <i>Sign In</i>)}
            </button>
        </div>
    )
}

export default User;