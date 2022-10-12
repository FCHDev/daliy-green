import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {onValue, ref} from "firebase/database";
import {db} from "../services/firebase-config";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";

const ItemPage = () => {

    const {id} = useParams();
    // eslint-disable-next-line
    const [products, setProducts] = useState()
    const [name, setName] = useState()
    const [category, setCategory] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const [stock, setStock] = useState()
    const [imgURL, setImgURL] = useState()


    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            const data = snapshot.val();
            if (data !== null) {
                // eslint-disable-next-line
                Object.values([data]).map((product) => {
                    setProducts(data[id]);
                    setName(product[id].name)
                    setCategory(product[id].category)
                    setPrice(product[id].price)
                    setDescription(product[id].description)
                    setStock(product[id].stock)
                    setImgURL(product[id].imgURL)
                    // console.log(product[id].name);
                });
            }
        });
    }, [id]);

    return (
        // <div className="item-page">
        <div className="item-page">
            <Grid container spacing={2} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                <Grid item xs={6} md={4}>
                        <img
                            src={imgURL}
                            alt={name}
                        />
                </Grid>
                <Grid item xs={6} md={8}>
                    <Box className="item-presentation">
                        <h1>{name}</h1>
                        <h3>{category}</h3>
                        <h2>{price} €</h2>
                        <h4 style={{marginTop: "1vh"}}>Description du produit </h4>
                        <p>{description}</p>
                        <h4 style={{marginTop: "1vh"}}>Caractéristiques du produit </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam
                            asperiores consequuntur cupiditate debitis illo, ipsa itaque magnam minima, nesciunt
                            obcaecati
                            possimus quidem ratione reprehenderit similique tenetur ut vero voluptas.</p>
                        <h4 style={{marginTop: "1vh"}}>Avis</h4>
                        <p>******</p>
                        <Box className="item-product-business">
                            <span><strong>{stock}</strong> produits restants</span>
                            <div className="fav-cart">
                                <FavoriteIcon style={{marginRight: "1vw"}} tag="Add to Fav"/>
                                <AddShoppingCartIcon/>
                            </div>
                        </Box>
                    </Box>

                </Grid>
            </Grid>
            {/*<div className="item-pic-presentation">*/}
            {/*    <img*/}
            {/*        src={imgURL}*/}
            {/*        alt={name}/>*/}
            {/*</div>*/}
            {/*<div className="item-presentation">*/}
            {/*    <h1>{name}</h1>*/}
            {/*    <h3>{category}</h3>*/}
            {/*    <h2>{price} €</h2>*/}
            {/*    <h4 style={{marginTop: "1vh"}}>Description du produit </h4>*/}
            {/*    <p>{description}</p>*/}
            {/*    <h4 style={{marginTop: "1vh"}}>Caractéristiques du produit </h4>*/}
            {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam*/}
            {/*        asperiores consequuntur cupiditate debitis illo, ipsa itaque magnam minima, nesciunt obcaecati*/}
            {/*        possimus quidem ratione reprehenderit similique tenetur ut vero voluptas.</p>*/}
            {/*    <h4 style={{marginTop: "1vh"}}>Avis</h4>*/}
            {/*    <p>******</p>*/}

            {/*    <div className="item-product-business">*/}
            {/*        <span><strong>{stock}</strong> produits restants</span>*/}
            {/*        <div className="fav-cart">*/}
            {/*            <FavoriteIcon style={{marginRight: "1vw"}} tag="Add to Fav"/>*/}
            {/*            <AddShoppingCartIcon/>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*</div>*/}
            {/*// </div>*/}
        </div>
    )
        ;
};

export default ItemPage;