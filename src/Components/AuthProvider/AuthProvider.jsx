import React, { createContext } from 'react';
import auth from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //create user with pass and email: 

    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in existing users with pass and email:
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }

    //signIn with google:
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    //signIn with github: 
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)

    }

    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
       
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
    
};

export default AuthProvider;