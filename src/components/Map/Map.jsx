import React from 'react';
import s from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";

function Map(props) {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')
    return (
        <div className={s.mapContainer}
             onClick={() => {
                 navigate("form")
             }
             }
            >
            <h1>Map</h1>
            <h1>Position: {lat}, {lng}</h1>
            <button onClick={() => {
                setSearchParams({
                    lat: 25,
                    lng: 35
                })
            }}>change pos
            </button>
        </div>
    );
}

export default Map;
