import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks() {
    return (
        <ul className="">
            <li>
                <NavLink to="/" exact >HOME</NavLink>
            </li>
            <li>
                <NavLink to="/posts" >POSTS</NavLink>
            </li>
            <li>
                <NavLink to="/images">IMAGES</NavLink>
            </li>
            <li>
                <NavLink to="/albums" >ALBUMS</NavLink>
            </li>
            <li>
                <button >LOGOUT</button>
            </li>
        </ul>
    )
}
