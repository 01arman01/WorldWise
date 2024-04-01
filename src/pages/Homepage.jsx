import React from 'react';
import {Link} from "react-router-dom";

function Homepage(props) {
    return (

        <div>
            <h1>WorldWise</h1>
            <Link to="/app" > Go to app</Link>
        </div>
    );
}

export default Homepage;