import React from 'react';
import s from './CityList.module.css'
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
function CityList({cities,isLoading}) {
    if(isLoading) return <Spinner/>

    return (
        <ul className={s.cityList}>
            { cities.map(city=>{
                return <CityItem city={city} key={city.id} />
            })}
        </ul>
    )}
export default CityList;
