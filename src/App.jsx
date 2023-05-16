
import './App.css';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { Navbar } from "./components/Navbar"; 
import { Cart } from './pages/Cart/Cart';
import { Shop } from './pages/Shop/Shop';
import { ShopContextProvider } from './context/shop-context';
import { LoginPage } from './pages/Login/LoginPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { UserSection } from './pages/AdminPage/User-Section/UserSection';
import { UserInfo } from './pages/AdminPage/User-Section/UserSection-items';
import { ProductsManage } from './pages/AdminPage/Product-Management/Products-manage';
import { MenPage } from './pages/MEN/menPage';
import { WomenPage } from './pages/WOMEN/WomenPage';
import { AddProduct } from './pages/AdminPage/AddProduct/AddProduct';
import { EditProduct } from './pages/AdminPage/Product-Management/EditProduct';


function App() {
  return (
    <div className="App">
      
      <ShopContextProvider>
     <Router>
      
     <Navbar/> 
     
      <Routes>
      <Route path="/" element={<Shop/>} />
      <Route path='/cart' element={<Cart/>}/>
       <Route path='/LoginPage' element={<LoginPage/>}/>
       <Route path='/signup' element={<SignUpPage/>}></Route>
       <Route path='/admin' element={<UserSection/>}/>
       <Route path='/user' element={<UserInfo/>} />
       <Route path='/productManagement' element={< ProductsManage/>}/>
       <Route path='/menPage' element={< MenPage />} />
       <Route path='/womenPage' element={<WomenPage/>} />
       <Route path='/addproduct' element={<AddProduct/>}  />
       <Route path='/editpage/:paramid' element={<EditProduct/>} />
      </Routes>
      </Router>
      </ShopContextProvider>
       </div>
  );
}

export default App;
