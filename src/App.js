import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Registration from './components/Registration';
import Cart from './components/Cart';

/*
 PRECAUTION:- Do not go directly on the "/register" or "/cart" as validation is not yet applied on the inputs. Instead go in the sequence as mentioned in router and fill all the details wherever needs.
*/




function App() {
  return (
    <div className="App">
      <Router>
     <NavBar/>
     <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/register' element={<Registration/>} />
      <Route exact path="/cart" element={<Cart/>}/>
     </Routes>
      {/* <Cart/> */}
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
