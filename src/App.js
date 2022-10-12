import {Routes, Route} from "react-router-dom";
import Header from "./Components/Header";
import ProductsPage from "./Pages/ProductsPage";
import OurTeam from "./Pages/OurTeam";
import About from "./Pages/About";
import {Container} from "@mui/material";
import CartPage from "./Pages/CartPage";
import {useEffect, useMemo, useState} from "react";
import {AuthContextProvider} from "./Context/AuthContext";

import {onValue, ref} from "firebase/database";
import {db} from "./services/firebase-config";
import AdminPage from "./Pages/AdminPage";
import Footer from "./Components/Footer";
import ItemPage from "./Pages/ItemPage";
import AccountPage from "./Pages/AccountPage";
import ProtectedRoute from "./Components/ProtectedRoute";


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
            <Container maxWidth={false} disableGutters={true}>
                <AuthContextProvider>
                    <Header handleCategoryChange={handleCategoryChange} setSelectedCategory={setSelectedCategory}
                            productsList={productsList}/>
                    <Routes>
                        <Route path="/" element={<ProductsPage filteredList={filteredList}/>}/>
                        <Route path="/notreequipe" element={<OurTeam/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/cart" element={<CartPage productsList={productsList}/>}/>
                        <Route path="/account" element={
                            <ProtectedRoute>
                                <AccountPage/>
                            </ProtectedRoute>}/>
                        <Route path="/admin" element={<AdminPage productsList={productsList}/>}/>
                        <Route path="item/:id" element={<ItemPage productsList={productsList}/>}/>
                    </Routes>
                    <Footer/>
                </AuthContextProvider>
            </Container>
        </>
    );
}

export default App;
