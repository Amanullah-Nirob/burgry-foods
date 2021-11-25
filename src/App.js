// import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Context from './Context/Context';
import Login from './components/LoginOrRegister/Login/Login';
import Register from './components/LoginOrRegister/Register/Register';
import OrderPlace from './components/OrderPlace/OrderPlace';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Context>
       <BrowserRouter>
       <Header></Header>
       <Routes>
           <Route path='/' element={<Home></Home>} />
           <Route path='/home' element={<Home></Home>} />
           <Route path='/login' element={<Login></Login>} />
           <Route path='/register' element={<Register></Register>} />
           <Route path='/ServiceCard1/:kam' element={<PrivateRoute><OrderPlace></OrderPlace></PrivateRoute>} />


       </Routes>
       </BrowserRouter>
       </Context>
    </div>
  );
}

export default App;
