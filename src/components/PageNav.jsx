import React from 'react';
import {Link} from "react-router-dom";
import  s from './PageNav.module.css'
function PageNav(props) {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <Link to='/'>Homepage</Link>
                </li>
                <li>
                    <Link to='/product'>Product</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricing</Link>
                </li>
            </ul>
        </nav>
    );
}

export default PageNav;