import { Navigation } from "./components/Header/Nav/Navigation";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Header/Home";
import { Categories } from "./components/Categories/Categories";
import { Contact } from "./components/Contact/Contact";
import { Product } from "./components/Product/Product";
import { Container } from "./style/Global.style";
import { ShopProvider } from "./context/ShopContext";
import { Cart } from "./components/Cart/Cart";
import { Helmet } from "react-helmet";

function App() {
    return (
        <ShopProvider>
                    <Helmet>
                    <title>React Shop</title>
                    <meta name="ReactShop" content="React e commerce application" />
                </Helmet>

            <Navigation />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Product/:productId" element={<Product />} />
                    <Route path="/Categories" element={<Categories />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>
            </Container>
        </ShopProvider>
    );
}

export default App;
