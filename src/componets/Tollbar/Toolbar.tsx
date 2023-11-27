import React from "react";
import {NavLink} from "react-router-dom";



const Toolbar: React.FC = () => {
    return (
        <>
            <nav>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/aboutUs">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contacts">Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Toolbar;
