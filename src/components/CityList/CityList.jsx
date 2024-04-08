import React from 'react';
import s from './CityList.module.css'
import Spinner from "../Spinner.jsx";
import CityItem from "./CityItem/CityItem.jsx";
import Message from "../Message.jsx";
function CityList({cities,isLoading}) {
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
