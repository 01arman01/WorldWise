import React from 'react';
import s from './CityItem.module.css'
import {Link} from "react-router-dom";
// import flag from 'country-code-emoji';


const formaDate = (date)=>{
  return ( new Intl.DateTimeFormat('en', {
        day:"numeric",
        month:"long",
        year:"numeric"
    }).format(new  Date(date)))
}


function CityItem({city}) {

    const {cityName,emoji,date,id, position} = city
    // console.log(flag(emoji))
    return (
        <li >
           <Link
               to={`${id}?lat=${position.lat}&lng=${position.lng}`}
                 className={s.cityItem}
           >
                <span className={s.emoji}>{
                    emoji
                }
            </span>
               <h3 className={s.name}>{cityName}</h3>
               <time className={s.date}>({formaDate(date)})</time>
               <button className={s.deleteBtn}>&times;</button>
           </Link>
        </li>
    );
}
export default CityItem;