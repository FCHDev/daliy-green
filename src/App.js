import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import ProductsPage from "./Pages/ProductsPage";
import OurTeam from "./Pages/OurTeam";
import About from "./Pages/About";
import {Container} from "@mui/material";
import CartPage from "./Pages/CartPage";
import {useEffect, useMemo, useState} from "react";

import {onValue, ref} from "firebase/database";
import {db} from "./services/firebase-config";


function App() {
    const [productsList, setProductsList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()


    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                // eslint-disable-next-line
                Object.values([data]).map((product) => {
                    setProductsList(product)

                });
            }
        });
    }, []);

    function getFilteredList() {
        if (!selectedCategory) {
            return productsList
        }
        return productsList.filter((item) => item.category === selectedCategory)
    }

    const filteredList = useMemo(getFilteredList, [selectedCategory, productsList])

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.id)
    }


    return (
        <>
            {/*<CssBaseline />*/}
            <Container maxWidth="xl" disableGutters={true}>
                <Header handleCategoryChange={handleCategoryChange} setSelectedCategory={setSelectedCategory}/>
                <Routes>
                    <Route path="/" element={<ProductsPage filteredList={filteredList}/>}/>
                    <Route path="/notreequipe" element={<OurTeam/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/cart" element={<CartPage/>}/>
                </Routes>
            </Container>
        </>
    );
}

export default App;
