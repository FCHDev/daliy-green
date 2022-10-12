import {createContext, useContext, useEffect, useState} from "react"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    deleteUser
} from "firebase/auth";
import {auth} from "../services/firebase-config";


const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    // CREATION UTILISATEUR
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // SUPPRESSION UTILISATEUR
    const deleteCurrentUser = () => {
        const user = auth.currentUser;
        return deleteUser(user)
    }

    // LOGIN USER
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // DECONNEXION
    const logout = () => {
        return signOut(auth)
    }

    // CHANGEMENT DU STATUT D'AUTHENTIFICATION
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser)
            setUser(currentUser)
            // console.log(currentUser)
        })
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn, deleteCurrentUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}