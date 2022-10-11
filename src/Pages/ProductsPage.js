import React from 'react';
import CardProduct from "../Components/CardProduct";

const ProductsPage = ({filteredList}) => {

    return (
        <div className="products-page">
            {filteredList.map((item) => (<CardProduct {...item} key={item.id}/>))}
        </div>
    );
};

export default ProductsPage;