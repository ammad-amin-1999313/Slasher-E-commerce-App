import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "../src/Components/Assets/Assets/Frontend_Assets/banner_mens.png"
import women_banner from "../src/Components/Assets/Assets/Frontend_Assets/banner_women.png"
import kid_banner  from "../src/Components/Assets/Assets/Frontend_Assets/banner_kids.png"
import dropdown_icon from "../src/Components/Assets/Assets/Frontend_Assets/dropdown_icon.png" 


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory icon={dropdown_icon} category="men" banner={men_banner} />} />
          <Route path="/women" element={<ShopCategory category="women" banner={women_banner} />} />
          <Route path="/kids" element={<ShopCategory  category="kid" banner={kid_banner} />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
