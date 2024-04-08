import React from 'react';
import s from './AppNav.module.css'
import {NavLink} from "react-router-dom";
function AppNav(props) {
    return (
        <div className={s.nav}>
            <ul>
                <li>
                    <NavLink to='cities' className=''>Cities</NavLink>
                </li>
                <li>
                    <NavLink to='countries' className=''>Countries</NavLink>
                </li>
            </ul>
        </div>
    );
}
export default AppNav;