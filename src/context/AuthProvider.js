import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // google
    const googleAuthProvider = (provider)=>{
        setLoading(true);
       return signInWithPopup(auth,provider);
    }
    // register
    const signUp = (email,password)=>{
        setLoading(true);
      return  createUserWithEmailAndPassword(auth,email,password);
    }
    // user profile
    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
        setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])
    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        googleAuthProvider,
        signUp,
        updateUserProfile,
        logOut,
        loading,
        user
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;