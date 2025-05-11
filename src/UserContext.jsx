import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from './Firebase';

const UserContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, displayName) => {
        try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          const newUser = userCredential.user;
      
          // Update display name
          await updateProfile(newUser, { displayName });
      
          // refresh the user state with updated displayName
          setUser({ ...newUser, displayName });
      
          return newUser;
        } catch (error) {
          console.error("Error creating user:", error);
          throw error;
        }
      };
      

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value= {{ user, loading, createUser, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};