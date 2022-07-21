import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import './content/css/App.css'

import Home from './pages/Home';
import NoPage from './pages/NoPage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/productPage';
import NewProductPage from './pages/newProductPage';
import AddToCart from './pages/AddToCart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import MyProfile from './pages/DashBoardComponent/MyProfile';
import MyOrder from './pages/DashBoardComponent/MyOrder';
import MyAddress from './pages/DashBoardComponent/MyAddress';
import NewAddress from './pages/DashBoardComponent/NewAddress';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<><Home /> <title>Teabox: Buy Delicious Indian Teas Online - Delivered Fresh &ndash; Teabox IN</title></>} />
          <Route path="/shop_page" element={<><ShopPage /> <title>Buy First Flush Spring Darjeeling Tea online from Teabox. Shop First Flush Spring Tea online &amp; get it shipped, straight from the source. Enjoy a great cup of Tea.</title></>} />
          <Route path="/product_page" element={<><NewProductPage /> <title>Buy First Flush Spring Darjeeling Tea online from Teabox. Shop First Flush Spring Tea online &amp; get it shipped, straight from the source. Enjoy a great cup of Tea.</title></>} />
          <Route path="/old_product_page" element={<><ProductPage /> <title>Buy First Flush Spring Darjeeling Tea online from Teabox. Shop First Flush Spring Tea online &amp; get it shipped, straight from the source. Enjoy a great cup of Tea.</title></>} />
          <Route path="/add_to_cart" element={<><AddToCart /> <title>Buy First Flush Spring Darjeeling Tea online from Teabox. Shop First Flush Spring Tea online &amp; get it shipped, straight from the source. Enjoy a great cup of Tea.</title></>} />
          <Route path="/login" element={<><Login /><title>Log In- Teabox IN</title></>} />
          <Route path="/signup" element={<><Signup /><title>Enter Code</title></>} />
          <Route path="/dashboard" element={<><Dashboard x={<MyProfile />} /><title>Customer Dashboard- My Profile</title></>} />
          <Route path="/my_order" element={<><Dashboard x={<MyOrder />} /><title>Customer Dashboard- My Order</title></>} />
          <Route path="/my_address" element={<><Dashboard x={<MyAddress />} /><title>Customer Dashboard- My Address</title></>} />
          <Route path="/add_new_address" element={<><Dashboard x={<NewAddress />} /><title>Customer Dashboard- Add New Address</title></>} />
          <Route path="*" element={<><NoPage /> <title>Error 404</title></>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
