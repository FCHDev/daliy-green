import React, {useState} from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardProduct = ({name, category, description, price, imgURL, stock}) => {
    const [heartColor, setHeartColor] = useState("gray")

    const handleChangeHeartColor = () => {
        heartColor === "gray" ? setHeartColor("#d7263d") : setHeartColor("gray")
    }

    return (
        <div className="card-product">
            <div className="product-pic">
                <img src={imgURL} alt={name}/>
            </div>
            <div className="product-description">
                <h2>{name}</h2>
                <h3>{category}</h3>
                <p>{description.substring(0, 210) + "..."}</p>
            </div>
            <div className="product-business">
                <h3 id="price">{price.toFixed(2)}€</h3>
                <span>Stock : {stock} produits</span>
                <div className="fav-cart">
                    <h3><FavoriteIcon
                        fontSize="large"
                        style={{color: `${heartColor}`}}
                        onClick={handleChangeHeartColor}
                        tag="Add to Fav"
                    /></h3>
                    <h3><AddShoppingCartIcon
                        fontSize="large"
                        className="addToCart-icon"
                    /></h3>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;