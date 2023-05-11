
import './App.css';
import {BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import { Navbar } from "./components/Navbar"; 
import { Cart } from './pages/Cart/Cart';
import { Shop } from './pages/Shop/Shop';
import { ShopContextProvider } from './context/shop-context';
import { LoginPage } from './pages/Login/LoginPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { UserSection } from './pages/AdminPage/User-Section/UserSection';
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
      </Routes>
      </Router>
      </ShopContextProvider>
       </div>
  );
}

export default App;
