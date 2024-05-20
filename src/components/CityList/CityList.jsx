import React from 'react';
import s from './CityList.module.css'
import Spinner from "../Spinner/Spinner.jsx";
import CityItem from "./CityItem/CityItem.jsx";
import Message from "../Message/Message.jsx";
import {useCties} from "../../contexts/CitiesContext.jsx";
function CityList() {
    const {cities,isLoading} = useCties()

    if(isLoading) return <Spinner/>
    if(!cities.length) return <Message message="add your firs city by clicking on a city on the map " />

    return (
        <ul className={s.cityList}>
            { cities.map(city=>{
                return <CityItem city={city} key={city.id} />
            })}
        </ul>
    )}
export default CityList;
