import React, {useEffect, useState} from 'react';
import s from './Map.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";
import {MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents} from "react-leaflet";
import {useCties} from "../../contexts/CitiesContext.jsx";
import {useGeolocation} from "../../hooks/useGeolocation.js";
import Button from "../Button/Button.jsx";

function Map(props) {

    const [searchParams, setSearchParams] = useSearchParams()
    const [mapPosition,setMapPosition] = useState([40, 44])
    const{cities} = useCties()
    const {isLoading:isLoadingPosition,
        getPosition,
        position:geolocationPosition
    } = useGeolocation()

    //
    const mapLat = searchParams.get('lat')
    const mapLng = searchParams.get('lng')

    useEffect(() => {
   if(mapLng && mapLat) setMapPosition([mapLat,mapLng])
    }, [mapLat,mapLng]);

    useEffect(() => {
        if (geolocationPosition) setMapPosition([geolocationPosition.lat,geolocationPosition.lng])
    }, [geolocationPosition]);

    console.log(geolocationPosition)
    return (
        <div className={s.mapContainer} >
            {!geolocationPosition && <Button type='position' onClick={getPosition}>{isLoadingPosition?'...Loading':'Use your position'}</Button>}
            <MapContainer
                // center={[mapLat,mapLng]}
                center={mapPosition}
                zoom={6}
                scrollWheelZoom={true}
                className={s.map}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map(city=>{
                    return( <Marker position={[city.position.lat , city.position.lng] || mapPosition} key={city.id}>
                        <Popup>
                           <span>{city.emoji}</span> <span>{city.cityName}</span>
                        </Popup>
                    </Marker>)
                })}
             <ChangeCenter position={mapPosition} />
                <DetectClick />
            </MapContainer>

        </div>
    );
}

const ChangeCenter = ({position})=>{
    const map = useMap()
    map.setView(position)
    return null
}

function DetectClick() {
    const navigate = useNavigate()
    useMapEvents({
        click:e=> {
            navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
            console.log(e)
        }
    })
    return null
}

export default Map;





