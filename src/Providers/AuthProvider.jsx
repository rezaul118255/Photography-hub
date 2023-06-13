import React, { createContext, useEffect, useState } from 'react';
// import React, { createContext, useEffect, useState } from 'react';

// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from '../Firebase/Firebase.Config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import axios from 'axios';
const auth = getAuth(app)
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);

        return createUserWithEmailAndPassword(auth, email, password);
    }
    const login = (email, password) => {
        setLoading(true);

        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            // console.log('logged in user inside auth state observer', loggedUser)
            setUser(loggedUser);
            // get and set token
            if (loggedUser) {
                axios.post('https://assignment-12-server-pi-pearl.vercel.app/jwt', { email: loggedUser.email })
                    .then(data => {
                        console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );

};

export default AuthProvider;