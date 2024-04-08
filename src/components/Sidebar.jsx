import React from 'react';
import s from './Sidebar.module.css'
import Logo from "./Logo.jsx";
import AppNav from "./AppNav/AppNav.jsx";
import {Outlet} from "react-router-dom";
function Sidebar(props) {
    return (
        <div className={s.sidebar}>
            <Logo />
            <AppNav/>
            <Outlet />
            <footer className={s.footer}>
                 <p className={s.copyright}> &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
            </footer>
        </div>
    );
}

export default Sidebar;