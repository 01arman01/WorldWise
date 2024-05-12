import React from 'react';
import { NavLink} from "react-router-dom";
import  s from './PageNav.module.css'
import Logo from "../Logo/Logo.jsx";
function PageNav(props) {
    return (
        <nav className={s.nav}>
            <NavLink to={'/'}><Logo /></NavLink>
            <ul>
                <li>
                    <NavLink to='/' >Homepage</NavLink>
                </li>
                <li>
                    <NavLink to='/product'>Product</NavLink>
                </li>
                <li>
                    <NavLink to='/pricing'>Pricing</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;