import {BrowserRouter, Route, Routes} from "react-router-dom";
import Product from "./pages/Product.jsx";
import PricingPage from "./pages/PricingPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PageNav from "./components/PageNav.jsx";
import AppLayout from "./pages/AppLayout.jsx";

function App() {
  // const x = 23
  //   let test

    return (<BrowserRouter>
            <PageNav />
            <Routes>
                <Route path='/' element={<Homepage/>}/>
                <Route path='product' element={<Product/>}/>
                <Route path='pricing' element={<PricingPage/>}/>
                <Route path='app' element={<AppLayout/>}/>
                <Route path='*' exact={true} element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>

  )
}

export default App
