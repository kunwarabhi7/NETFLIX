import React,{createContext,useContext,useEffect,useState} from 'react'
import {auth} from '../firebase'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , onAuthStateChanged} from 'firebase/auth'


const AuthContext  = createContext() 

export const AuthContextProvider = ({children}) => {
const [user , setUser] = useState({})

const  signUpUser= (email , password) =>{
return createUserWithEmailAndPassword(auth,email,password)
}

const signInUser  = (email,password ) => {
return signInWithEmailAndPassword(auth,email,password)
}

const signOutUser = () =>{
    return signOut(auth)
}

useEffect(()=>{
    const unsubsribe = onAuthStateChanged(auth , (currentUser)=> {
        setUser(currentUser)
    })  
    return () => unsubsribe()
})

    return ( 
        <AuthContext.Provider value={{signUpUser , signInUser , signOutUser , user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return (
        useContext(AuthContext)
    )
}