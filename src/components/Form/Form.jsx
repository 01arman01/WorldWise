// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import {useEffect, useState} from "react";

import styles from "./Form.module.css";
import "react-datepicker/dist/react-datepicker.css";

import Button from "../Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import BackButton from "../BackButton.jsx";
import {useURLPosition} from "../../hooks/useURLPosition.js";
import Message from "../Message/Message.jsx";
import DatePicker from "react-datepicker";

export function convertToEmoji(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

function Form() {

    const  [isLoadingGeocoding,setIsLoadingGeoCoding] = useState(false)
    const [lat,lng] = useURLPosition()

    const [cityName, setCityName] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState(new Date());
    const [notes, setNotes] = useState("");
    const[emoji,setEmoji] = useState()
    const [geocodingError,setGeocodingError] = useState()


    useEffect(() => {
        // if(!lat && !lng) return
        const fetchCityData =  async ()=>{
            try {
                setIsLoadingGeoCoding(true)
                setGeocodingError('')
                const res =await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`)
                const data = await res.json()
                if (!data.countryCode) throw new Error(`that doesn't seem to be a city. click someware else 😉 `)

                console.log(data)
                setCityName(data.city || data.locality || "")
                setCountry(data.countryName)
                setEmoji(convertToEmoji(data.countryCode))
            }catch (e) {
                setGeocodingError(e.message)
            }finally {
                setIsLoadingGeoCoding(false)
            }

        }
        fetchCityData()
     }, [lat,lng]);
   const  handleSubmitFunction = (e)=>{
       e.preventDefault()

   }

   if (geocodingError) return <Message message={geocodingError} />
   if(!lat &&  !lng) return  <Message message='Start by clicking somewhere on the map' />
    return (
        <form className={styles.form} onSubmit={handleSubmitFunction}>
            <div className={styles.row}>
                <label htmlFor="cityName">City name</label>
                <input
                    id="cityName"
                    onChange={(e) => setCityName(e.target.value)}
                    value={cityName}
                />
                 <span className={styles.flag}>{emoji}</span>
            </div>

            <div className={styles.row}>
                <label htmlFor="date">When did you go to {cityName}?</label>
                {/*<input*/}
                {/*    id="date"*/}
                {/*    onChange={(e) => setDate(e.target.value)}*/}
                {/*    value={date}*/}
                {/*/>*/}
                <DatePicker selected={date} onChange={(date) => setDate(date)} />
            </div>

            <div className={styles.row}>
                <label htmlFor="notes">Notes about your trip to {cityName}</label>
                <textarea
                    id="notes"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                />
            </div>

            <div className={styles.buttons}>
                <Button type='primary'>Add</Button>
                <BackButton/>

            </div>
        </form>
    );
}

export default Form;
