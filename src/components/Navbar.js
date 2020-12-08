import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <div className="navbar navbar-dark bg-dark">
            <div className="container">
                <div class="navbar-brand mb-0 h1">pwReact</div>
                <ul className="nav">
                    <li className="px-1"><NavLink exact to="/">Home</NavLink></li>
                    <li className="px-1"><NavLink to="/image">Image</NavLink></li>
                    <li className="px-1"><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;