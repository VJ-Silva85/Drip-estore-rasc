import { BrowserRouter, Route, Routes,  } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import ProductsList from "../pages/ProductListingPage/ProdutcsList";
import BuyBox from "../components/BuyBox/BuyBox";
import Pagelayout from "../pages/Layout/PageLayout";
import Notfound from "../components/Notfound/Notfound";

const Paths = () => {
    return ( 
        <>
            <BrowserRouter>
               
                <Routes>
                    <Route path="/" element={<Pagelayout/>}>
                        <Route  index element={<Home />} />
                        <Route path="/produtos" element={<ProductsList/>} />
                        <Route path="*" element={<Notfound/>}/>
                    </Route>
                   
                </Routes>
                
            </BrowserRouter>
        </>
     );
}
 
export default Paths;