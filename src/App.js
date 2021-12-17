// import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Context from './Context/Context';
import Login from './components/LoginOrRegister/Login/Login';
import Register from './components/LoginOrRegister/Register/Register';
import OrderPlace from './components/OrderPlace/OrderPlace';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Dashboard from './components/Dashboard/Dashboard';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import Pay from './components/Dashboard/Pay/Pay';
import AddReview from './components/Dashboard/AddReview/AddReview';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import SuccessMessage from './components/Dashboard/MyOrders/SuccessMessage';
import AddProducts from './components/Dashboard/DashboardHome/AddProducts/AddProducts';
import Explores from './components/Explores/Explores';
import ManageAllProducts from './components/Dashboard/ManageAllProducts/ManageAllProducts';
import ManageAllOrders from './components/Dashboard/DashboardHome/ManageAllOrders/ManageAllOrders';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';

AOS.init();
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


           <Route path='/dashboard' element={<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}>
            <Route exact path='/dashboard' element={<DashboardHome></DashboardHome>}></Route>
            <Route path='/dashboard/MyOrders' element={<MyOrders></MyOrders>}></Route>
            <Route path='/dashboard/Pay' element={<Pay></Pay>}></Route>
            <Route path='/dashboard/Review' element={<AddReview></AddReview>}></Route>
            <Route path='/dashboard/makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
            <Route path='/dashboard/addProduct' element={<AddProducts></AddProducts>}></Route>
            <Route path='/dashboard/mAllProducts' element={<ManageAllProducts></ManageAllProducts>}></Route>
            <Route path='/dashboard/mAllOrders' element={<ManageAllOrders></ManageAllOrders>}></Route>

           </Route>

           <Route path='/success' element={<SuccessMessage></SuccessMessage>} />
           <Route path='/explore' element={<Explores></Explores>} />
           <Route path='/about' element={<About></About>} />
           <Route path='/blog' element={<Blog></Blog>} />
           <Route path='/contact' element={<Contact></Contact>} />




       </Routes>
       </BrowserRouter>
       </Context>
    </div>
  );
}

export default App;
