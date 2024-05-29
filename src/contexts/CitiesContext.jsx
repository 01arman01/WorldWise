import {createContext, useContext, useEffect, useState} from "react";

const CitiesContext = createContext()
const BASE_URL = 'http://localhost:9000'

export const CitiesProvider = ({ children }) => {

    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [currentCity, setCurrentCity] = useState({})

    useEffect(() => {
        async function fetchClients() {
            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities`)
                const data = await res.json()
                setCities(data)

            } catch {
                alert('there was an error loading data...')
            } finally {
                setIsLoading(false)
            }
        }
        fetchClients()
    }, []);

    async function  getCity (id){

            try {
                setIsLoading(true)
                const res = await fetch(`${BASE_URL}/cities/${id}`)
                const data = await res.json()
                setCurrentCity(data)

            } catch {
                alert('there was an error loading data...')
            } finally {
                setIsLoading(false)
            }



    }
    async function  createCity (newCity){

        try {
            setIsLoading(true)
            const res = await fetch(`${BASE_URL}/cities`,{
                method:'POST',
                body:JSON.stringify(newCity),
                headers:{
                    "Content-type":"Application/json",

                }
            })
            const data = await res.json()
            setCities(cities=>[...cities,newCity])
            console.log(data)
        } catch {
            alert('there was an error loading data...')
        } finally {
            setIsLoading(false)
        }



    }


     return <CitiesContext.Provider
     value={{
         cities: cities,
         isLoading: isLoading,
         currentCity,
         getCity,
         createCity
     }}
     >{children}</CitiesContext.Provider>;
}

export const useCties = ()=> {
   const context =  useContext(CitiesContext);
   if(context === undefined) throw new Error('useCties must be used within a CitiesProvider');
   return context
}