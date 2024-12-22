// //create context

// import { createContext, useContext } from "react";

// const AuthContext = createContext();
// //Provider Context

// export const AuthProvider = ({children}) =>{
//     const [currentUser,setCurrentUser] = useState(null);

//     const value = {
//         currentUser,
//         setCurrentUser
//     }

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     )
// }

// export const UserAuth = () => {
//     return useContext(AuthContext)
// }

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the User type
interface User {
    name: string;
    email: string;
}

// Define the AuthContext type
interface AuthContextType {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
}

// Create Context
const AuthContext = createContext<AuthContextType | null>(null);

// Define Props for the Provider
interface AuthProviderProps {
    children: ReactNode;
}

// AuthProvider Component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook to Use AuthContext
export const UserAuth = () => {
    return useContext(AuthContext)
    }