import { Navigation } from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Contact } from "./pages/Contact";
import { Product } from "./pages/Product";
import { Container } from "./style/Common";
import { ShopProvider } from "./context/ShopContaxt";

function App() {
    return (
        <ShopProvider>
            <Navigation />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Product/:productId" element={<Product />} />
                    <Route path="/Categories" element={<Categories />} />
                    <Route path="/Contact" element={<Contact />} />
                </Routes>
            </Container>
        </ShopProvider>
    );
}

export default App;
