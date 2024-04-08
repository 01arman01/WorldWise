import React from 'react';
import s from './CityItem.module.css'
// import flag from 'country-code-emoji';



function CityItem({city}) {

    const {cityName,emoji,} = city
    // console.log(flag(emoji))
    return (
        <li className={s.cityItem}>
            <span className={s.emoji}>{
                emoji
            }
            </span>
            <h3 className={s.name}>{cityName}</h3>
        </li>
    );
}
export default CityItem;