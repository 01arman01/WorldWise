import React from 'react';
import Spinner from "../Spinner.jsx";
import Message from "../Message.jsx";
import s from "./CountryList.module.css";
import CountryItem from "./CountryItem/CountryItem.jsx";

function CountryList({isLoading,cities}) {

    if(isLoading) return <Spinner/>
    if(!cities.length) return <Message message="add your firs city by clicking on a city on the map " />

    const countries = []

    return (
        <ul className={s.countryList}>
            { countries.map(country=>{
                return <CountryItem country={country} />
            })}
        </ul>
    )
}

export default CountryList;