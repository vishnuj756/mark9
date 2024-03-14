import Comp2 from "./Component/Comp2";
import Header from "./Component/Header";
import './App.css'
import Discount from '../src/Component/Discount';
import { Routes, Route } from "react-router-dom";
import Cart from "./Component/Cart";
import Footer from "./Component/Footer/Footer";
import AboutUs from "./Component/About _us";
import Contact from "./Component/Contact";
import Product from "./Component/Product";
import Checkout from "./Component/Checkout";
import Profile from "./Component/Profile";
import Pdtails from "./Component/Profiledata/Pdtails";
import Products from './Component/Products'
import Password from "./Component/Profiledata/Password";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Comp2/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/profile" element={<Profile/>}>
      <Route index element={<Pdtails />} />
      <Route path="/profile/pdatails" element={<Pdtails/>}/>
      <Route path="/profile/wishlist" element={<Cart/>}/>
      <Route path="/profile/change" element={<Password/>}/>

      </Route>
      </Routes>
      <Discount/>
      <Footer/>
    </div>
  );
}

export default App;
