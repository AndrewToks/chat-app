//create context

import { createContext, useContext } from "react";

const AuthContext = createContext();
//Provider Context

export const AuthProvider = ({children}) =>{
    const [currentUser,setCurrentUser] = useState(null);

    const value = {
        currentUser,
        setCurrentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}