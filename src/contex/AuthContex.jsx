import React,{createContext,useContext,useEffect,useState} from 'react'
import {auth,db} from '../firebase'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword , signOut , onAuthStateChanged} from 'firebase/auth'
import {setDoc , doc } from 'firebase/firestore'

const AuthContext  = createContext() 

export const AuthContextProvider = ({children}) => {
const [user , setUser] = useState({})

const  signUpUser= (email , password) =>{
 createUserWithEmailAndPassword(auth,email,password)
setDoc(doc(db, 'users',email),{
    savedMovies: []
})
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