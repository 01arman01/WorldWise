import React from 'react';
import Spinner from "../Spinner/Spinner.jsx";
import Message from "../Message/Message.jsx";
import s from "./CountryList.module.css";
import CountryItem from "./CountryItem/CountryItem.jsx";
import {useCties} from "../../contexts/CitiesContext.jsx";

function CountryList() {
    const {cities,isLoading} = useCties()
    if(isLoading) return <Spinner/>
    if(!cities.length) return <Message message="add your firs city by clicking on a city on the map " />

    const countries =cities.reduce((arr,city)=>{
        if(!arr.map(el=>el.country ).includes(city.country)) {
            return [...arr,{country: city.country, emoji: city.emoji}]
        }else return arr
    },[])
    return (
        <ul className={s.countryList}>
            { countries.map(country=>{
                return <CountryItem country={country}  key={country.country}/>
            })}
        </ul>
    )
}
export default CountryList;
