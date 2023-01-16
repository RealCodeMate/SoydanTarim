import React from "react";

import "../../sass/components/pagination/_productCard.scss"

const ProductCard = ({ image, name }) => {
    return (
        <div className='card'>
            <div className='card_image'>
                <img src={image} alt={name} />
            </div>
            <div className='card_info'>
                <h2>{name}</h2>
                <h3>Info</h3>
            </div>
        </div>
    );
};

export default ProductCard;
