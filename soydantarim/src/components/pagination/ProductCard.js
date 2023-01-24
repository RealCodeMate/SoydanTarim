import React from "react";

import "../../sass/components/pagination/_productCard.scss"

const ProductCard = ({ image, name, info }) => {
    return (
        <div className='cardProduct'>
            <div className='cardProduct_image'>
                <img src={image} alt={name} />
            </div>
            <div className='cardProduct_info'>
                <h2>{name}</h2>
                <h3>{info}</h3>
            </div>
        </div>
    );
};

export default ProductCard;
