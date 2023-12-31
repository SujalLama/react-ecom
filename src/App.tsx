import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './pages/Layout';
import Product from './pages/Product';
import NotFound from './pages/404';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './ components/PrivateRoute';
import Profile from './pages/Profile';
import Orders from './pages/Orders';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="profile" element={<Profile />} />
                <Route path="orders" element={<Orders />} />
            </Route>
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
