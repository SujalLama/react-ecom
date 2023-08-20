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
          <Route path="checkout" element={<Checkout />} />
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
