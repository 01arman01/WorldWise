import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Product from "./pages/Product/Product.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PageNav from "./components/PageNav/PageNav.jsx";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
import {useEffect, useState} from "react";
import CityList from "./components/CityList/CityList.jsx";
import CountryList from "./components/CountryList/CountryList.jsx";
import City from "./components/City/City.jsx";
import Form from "./components/Form/Form.jsx";

const BASE_URL = 'http://localhost:9000'


function App() {
    // const x = 23
    //   let test

    const [cities, setCities] = useState([])
    const [isLoading, setIsLoading] = useState(false)



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
    console.log(cities)
    return (<BrowserRouter>
            <PageNav/>
            <Routes>
                <Route index element={<Homepage/>}/>
                <Route path='product' element={<Product/>}/>
                <Route path='pricing' element={<PricingPage/>}/>
                <Route path='app' element={<AppLayout/>}>
                    <Route index element={ <Navigate replace to="cities"/>}/>
                    <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />}/>
                    <Route path='cities/:id' element={<City />} />
                    <Route path='countries' element={<CountryList isLoading={isLoading}  cities={cities} />}/>
                    <Route path='form' element={<Form />}/>
                </Route>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
