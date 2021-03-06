import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home/Home';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Notfound from './Components/Notfound/Notfound';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import RequiredAuth from './Components/Login/RequiedAuth/RequiredAuth';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
