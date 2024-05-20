import React from 'react';
import Sidebar from "../../components/Sidebar/Sidebar.jsx";

import s from './AppLayout.module.css'
import Map from "../../components/Map/Map.jsx";

function AppLayout(props) {
    return (
        <div className={s.app}>
            <Sidebar />
            <Map />
        </div>
    );
}

export default AppLayout;