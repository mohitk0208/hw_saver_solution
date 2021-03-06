import React from 'react'
import { NavLink } from 'react-router-dom'

import "../../css/NavLinks.css"

export default function NavLinks() {
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
                <button >LOGOUT</button>
            </li>
        </ul>
    )
}
