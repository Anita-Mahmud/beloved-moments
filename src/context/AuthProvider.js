import React from 'react';
import { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    // google
    const googleAuthProvider = (provider)=>{
        signInWithPopup(auth,provider);
    }
    const authInfo = {
        googleAuthProvider,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;