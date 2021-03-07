import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

import "../../css/NavLinks.css"

export default function NavLinks() {

    const [error,setError] = useState("");

    const {logout}  = useAuth();
    const history = useHistory()

    async function handleLogout() {

        setError('')
        try {
            await logout()
            history.push("/login")
        }catch {
            setError("Failed to logout.")
        }

    }

    return (
        <ul className="navlinks">
            <li className="navlink-item">
                <NavLink to="/" exact >HOME</NavLink>
            </li>
            <li className="navlink-item">
                <NavLink to="/posts" >POSTS</NavLink>
            </li>
            <li className="navlink-item">
                <NavLink to="/images">IMAGES</NavLink>
            </li>
            <li className="navlink-item">
                <NavLink to="/albums" >ALBUMS</NavLink>
            </li>
            <li className="navlink-item">
                <button onClick={handleLogout} >LOGOUT</button>
            </li>
        </ul>
    )
}
