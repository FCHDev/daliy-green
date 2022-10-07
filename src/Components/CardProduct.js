import React from 'react';

const CardProduct = () => {
    return (
        <div className="card-product">
            <div className="product-pic">
                <img src="https://www.yebacosmetiques.com/40-large_default/savon-naturel-amande-douce-biologique.jpg" alt="savon"/>
            </div>
            <div className="product-description">
                <h1>Super savon</h1>
                <h3>Produits de beauté</h3>
                <p>Les huiles végétales issues de l'agriculture biologique (Olive, karité, Colza et coco) sont douces et nourrissantes pour la peau.
                    Les huiles (olive, colza, coco et karité) issues de l'agriculture biologiques sont nourrissantes.
                    L'huile de sésame douce a une action apaisante et assouplissante.</p>
            </div>
        </div>
    );
};

export default CardProduct;