import React, {useState} from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from "react-router-dom";

const CardProduct = ({name, category, description, price, imgURL, stock, id}) => {
    const [heartColor, setHeartColor] = useState("gray")

    const handleChangeHeartColor = () => {
        heartColor === "gray" ? setHeartColor("#d7263d") : setHeartColor("gray")
    }

    return (
        <div className="card-product">
            <Link style={{textDecoration: 'none'}} to={`/item/${id}`}>
                <div className="product-pic">
                    <img src={imgURL} alt={name}/>
                </div>
                <div className="product-description">
                    <h2><strong>{name}</strong></h2>
                    <h4>{category}</h4>
                    <p>{description.substring(0, 180) + "..."}</p>
                </div>
            </Link>
            <div className="product-business">
                <h3 id="prix">{parseFloat(price).toFixed(2)}€</h3>
                <span style={{fontSize: "0.7rem"}}><strong>{stock}</strong> produits restants</span>
                <div className="fav-cart">
                    <h3><FavoriteIcon
                        style={{color: `${heartColor}`}}
                        onClick={handleChangeHeartColor}
                        tag="Add to Fav"
                    /></h3>
                    <h3><AddShoppingCartIcon
                        className="addToCart-icon"
                    /></h3>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;