import Home from './components/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './pages/navbar'
import Login from './Login';
import { ShopContextProvider } from './context/shop-context';
// import './App.css';

function App() {
  return (
    <ShopContextProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Shop" element = {<Shop/>}/>
        <Route path = "/Cart" element = {<Cart/>}/>
        <Route path = "/Login" element = {<Login/>}/>
        
      </Routes>
    </Router>
    </ShopContextProvider>
  );
}

export default App;
