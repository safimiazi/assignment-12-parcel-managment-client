import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState()

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

    const  userUpdate= (name,photo) => {
        
      return  updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
    }


    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        userUpdate
    }

    // observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);    
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
    
};

export default AuthProvider;