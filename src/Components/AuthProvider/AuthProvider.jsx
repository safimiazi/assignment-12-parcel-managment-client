import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()

    //create user with pass and email: 

    const createUser = (email,password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in existing users with pass and email:
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }

    //signIn with google:
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    //signIn with github: 
    const signInWithGithub = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)

    }

    const logOut = () => {
        setLoading(true)
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
        userUpdate,
        loading
    }

    // observation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser); 
            if(currentUser){
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    localStorage.setItem('access-token', res.data.token)
                    setLoading(false)
                })
            } else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
           
  
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