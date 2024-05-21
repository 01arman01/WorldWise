import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Product from "./pages/Product/Product.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PageNav from "./components/PageNav/PageNav.jsx";
import AppLayout from "./pages/AppLayout/AppLayout.jsx";
// import {useEffect, useState} from "react";
import CityList from "./components/CityList/CityList.jsx";
import CountryList from "./components/CountryList/CountryList.jsx";
import City from "./components/City/City.jsx";
import Form from "./components/Form/Form.jsx";
import {CitiesProvider} from "./contexts/CitiesContext.jsx";




function App() {

    return (<BrowserRouter>
            <CitiesProvider>
                <PageNav/>
                <Routes>
                    <Route index element={<Homepage/>}/>
                    <Route path='product' element={<Product/>}/>
                    <Route path='pricing' element={<PricingPage/>}/>
                    <Route path='app' element={<AppLayout/>}>
                        <Route index element={<Navigate replace to="cities"/>}/>
                        <Route path='cities' element={<CityList />}/>
                        <Route path='cities/:id' element={<City/>}/>
                        <Route path='countries' element={<CountryList />}/>
                        <Route path='form' element={<Form/>}/>
                    </Route>
                    <Route path='*' element={<PageNotFound/>}/>
                </Routes>
            </CitiesProvider>
        </BrowserRouter>
    )
}
export default App
