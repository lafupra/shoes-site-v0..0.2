import Shoes from "./Pages/Shoes"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./Pages/ShoesComponent/Navbar/Navbar"
import Footer from "./Pages/ShoesComponent/Footer/Footer"
import Men from "./Pages/Mens/Men"
import SingleProduct from "./Pages/SingleProduct/SingleProduct"
import Cart from "./Pages/Cart/Cart"
import Checkout from "./Pages/Checkout/Checkout"
import ContactUs from "./Pages/ContactUs/ContactUs"
import Services from "./Pages/Services/Services"






function App() {



  return (
    <>
        
      <BrowserRouter  >
  

   <Navbar/>
    
    <Routes>
  

      <Route path="/" element={<Shoes/>}/>
      <Route path="/men" element={<Men/>}/>
      <Route path="/singleproduct" element={<SingleProduct/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/services" element={<Services/>}/>
     
     
    
   
      
  
    </Routes>
   
    <Footer/>

  


     
      </BrowserRouter>
     
    </>

    
   
  );
}

export default App;
