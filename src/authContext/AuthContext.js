import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase.config/Firebase.config';

export const UserContext = createContext()
export { getAuth } from 'firebase/auth'

const auth = getAuth(app)

const fbProvidr = new FacebookAuthProvider()
const gitProvider = new GithubAuthProvider()

const AuthContext = ({ children }) => {
    const [user, setUser] = useState('')
    const [loader, setLoader] = useState(true)

    const createUser = (email, pass) => {

        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, pass)


    }

    const verification = () => {

        setLoader(true)
        return sendEmailVerification(auth.currentUser)

    }

    const signInWithEmail = (email, pass) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, pass)


    }


    const forgetPass = email => {

        setLoader(true)
        return sendPasswordResetEmail(auth, email)


    }


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoader(false)



        })

        return () => unSubscribe()


    }, [])

    const logOut = () => {

        setLoader(true)

        return signOut(auth)


    }


    const googleSignIn = provider => {

        setLoader(true)
        return signInWithPopup(auth, provider)


    }

    const SignInFacebook = () => {

        setLoader(true)
        return signInWithPopup(auth, fbProvidr)


    }

    const githubSignIin = () => {

        setLoader(true)
        return signInWithPopup(auth, gitProvider)



    }


    const contextData = { user, createUser, verification, signInWithEmail, forgetPass, logOut, loader, googleSignIn, SignInFacebook, githubSignIin }

    return (
        <div>
            <UserContext.Provider value={contextData}>
                {children}
            </UserContext.Provider>
        </div>
    );
};

export default AuthContext;