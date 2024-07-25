import Home from '@/pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Checkout from './pages/Checkout/Checkout';
import ProductPage from './pages/ProductPage/ProductPage';
import Settings from './pages/Settings/Settings';
import ShopingCart from './pages/ShopingCart/ShopingCart';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Shop" element={<></>} />
                <Route path="/Shop/:id" element={<ProductPage />} />
                <Route path="/Shop/shoping_cart" element={<ShopingCart />} />
                <Route path="/Shop/checkout" element={<Checkout />} />
                <Route path="/settings/*" element={<Settings />} />
            </Routes>
        </Layout>
    );
}

export default App;
