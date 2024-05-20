import React from 'react';
import Button from "./Button/Button.jsx";
import {useNavigate} from "react-router-dom";

function BackButton(props) {
    const navigate = useNavigate()
    return (
        <div>
            <Button
                type='back'
                onClick={
                    (e) => {
                        e.preventDefault()
                        navigate(-1)
                    }
                }>&larr; Back</Button>
        </div>
    );
}

export default BackButton;