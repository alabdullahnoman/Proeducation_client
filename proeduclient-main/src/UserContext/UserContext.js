import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.init';
export const AuthContext =createContext()

const auth=getAuth(app)
const googleProvider =new GoogleAuthProvider()
const githubProvider =new GithubAuthProvider()
const UserContext = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading ,setLoading]=useState(true)

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signup =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const google=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const github =()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    const logOut =()=>{
        setLoading(true)
        signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
                 setUser(currentUser)
                 setLoading(false)
         })
         return ()=>unSubscribe()
     },[])
 
    const authinfo ={user,login,logOut,signup,google,github,loading}
    return (
        <div>
            <AuthContext.Provider value={authinfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;