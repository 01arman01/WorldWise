import React from 'react';
import AppNav from "../components/AppNav/AppNav.jsx";
import Sidebar from "../components/Sidebar.jsx";

import s from './AppLayout.module.css'
import Map from "../components/Map.jsx";

function AppLayout(props) {
    return (
        <div className={s.app}>
            <Sidebar />
            <Map />
        </div>
    );
}

export default AppLayout;