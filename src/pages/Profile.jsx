import React from "react";
import {Navigate} from "react-router-dom"

export const Profile = () => {

    if (!window.localStorage.getItem('token')) {
        return <Navigate to='/home' />
    }

    return (
        <h1>
            Это профиль
        </h1>
        
    )
}