import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
    currentUser: any;
    setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
    signinWithGoogle: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<any>(null);

    const signinWithGoogle = (): void => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    //signout

    const logout = () => signOut(auth)

    const value = {
        currentUser,
        setCurrentUser,
        signinWithGoogle,
        logout
    };

    //set currentUser

    useEffect(()=>{
        const unsubscribe =onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        });

        return unsubscribe

    },[])
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};