import React from 'react';
import {useNavigate} from "react-router-dom"
import {UserAuth} from "../Context/AuthContext"

import LogoutIcon from '@mui/icons-material/Logout';

const AccountPage = () => {
    const {user, logout, deleteCurrentUser} = UserAuth()
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logout()
            navigate('/')
            alert("Vous êtes bien déconnecté(e) 😢")
        } catch (e) {
            console.log(e.message)
        }
    }
    const handleDeleteUser = async () => {
        try {
            await deleteCurrentUser()
            navigate('/')
            alert("Compte supprimé 😫")
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className="account-page" style={{flexDirection: "column"}}>
            <h1>Mon compte</h1>
            <h2>Vous êtes le plus beau 🫅 / la plus belle 👸</h2>
            <p><strong>ID User :</strong> {user && user.uid}</p>
            <p><strong>Email :</strong> {user && user.email}</p>
            <p><strong>Nom :</strong> </p>
            <p><strong>Prénom :</strong> </p>
            <button className="logout-button" onClick={handleLogout}><LogoutIcon />Logout</button>
            <button className="delete-button" onClick={handleDeleteUser}><LogoutIcon />Supprimer compte</button>
        </div>
    );
};

export default AccountPage;