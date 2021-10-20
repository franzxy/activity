import React, { useState } from 'react';
import { signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";

import User from './user';

const Navigation = () => {

    return (
        <div className="navigation">
            <Link className="link" to="/">
                <i className="logo">Time</i>
            </Link>
            <User />
        </div>
    )
}

export default Navigation;