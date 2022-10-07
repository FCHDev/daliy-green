import {Routes, Route} from "react-router-dom";
import ProductsPage from "./Pages/ProductsPage";
import OurTeam from "./Pages/OurTeam";
import About from "./Pages/About";
import {Container} from "@mui/material";
import CartPage from "./Pages/CartPage";

function App() {

    return (
        <Container>
            <Routes>
                <Route path="/" element={<ProductsPage/>}/>
                <Route path="/notreequipe" element={<OurTeam/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </Container>
    );
}

export default App;
