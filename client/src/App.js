import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import NAVBAR from './components/NAVBAR'
import Home from './pages/Home'
import SignupPage from './pages/signup';
import LoginPage from './pages/login';
import AdminDashboard from './pages/AdminDashboard';
import AddProduct from './pages/AddNewProduct';
import AdminDiscount from './pages/adminDiscount';
import { AdminCoupons } from './pages/AdminCoupons';
import AdminCategory from './pages/adminCategory';


function App() {
  return (

    <BrowserRouter>
      <div style={{ backgroundColor: '#F3FDE8' }}>
        <NAVBAR />
        <div>
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<LoginPage/>}></Route>
          <Route path='/signup' element={<SignupPage/>}></Route>
          {/* <Route path='/review' element={<Review/>}></Route> */}
          {/* <Route path='/product' element={<Product/>}></Route> */}
          {/* <Route path='/admin/category' element={<AdminCategory/>}></Route> */}
          {/* <Route path='/admin/discount' element={<AdminDiscount/>}></Route> */}
          <Route path='/admin/add-product' element={<AddProduct/>}></Route>
          <Route path='/admin' element={<AdminDashboard/ >}></Route>
          {/* <Route path='/category/:categoryName' element={<CategoryPage/>}></Route> */}
          {/* <Route path='/cart' element={<ShoppingCart/>}></Route> */}
          <Route path='/admin/view-inventory' element={<AdminCategory/>}></Route>
          <Route path='/admin/manage-discount' element={<AdminDiscount/>}></Route>
          {/* <Route path='/adminShowProducts' element={<AdminCategoryProduct/>}></Route> */}
          <Route path='/AdminCoupons' element={<AdminCoupons/>}></Route>
          {/* <Route path='/viewOrderHistory' element={<ViewOrderHistory/>}></Route> */}
          {/* <Route path='/viewOrderDetails' element={<ViewOrderDetails/>}></Route> */}
          {/* <Route path='checkout' element={<Checkout/>}></Route> */}
          {/* <Route path='addAddress' element={<AddNewAddresses/>}></Route> */}
          </Routes>
        </div>
        {/* <ToastContainer/> */}
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
