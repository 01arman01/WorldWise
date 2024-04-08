import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PageNav from "./components/PageNav.jsx";
import AppLayout from "./pages/AppLayout.jsx";
import {useEffect, useState} from "react";
import CityList from "./components/CityList/CityList.jsx";
import CountryList from "./components/CountryList/CountryList.jsx";

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
                    <Route index element={<p>lIST of clients</p>}/>
                    <Route path='cities' element={<CityList cities={cities} isLoading={isLoading} />}/>
                    <Route path='countries' element={<CountryList isLoading={isLoading}  cities={cities} />}/>
                    <Route path='form' element={<p> Form</p>}/>
                </Route>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
