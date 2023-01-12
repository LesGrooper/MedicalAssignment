import {createContext, useState} from 'react'

const AuthHelper = createContext({});

export const AuthProvider = ({children}) => {
    const [ auth, setAuth] = useState({});

    return(
        <AuthHelper.Provider value={{auth, setAuth}}>
            {children}
        </AuthHelper.Provider>
    )
}

export default AuthHelper;