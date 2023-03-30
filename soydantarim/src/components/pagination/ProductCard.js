import React from "react";

import "../../sass/components/pagination/_productCard.scss"
import messi from "../../assets/soydanTarimLogo.png";

const ProductCard = ({ image, name, info }) => {
    return (
        <div className='cardProduct'>
            <div className='cardProduct_image'>
                {image != '' ?
                    <img src={image} alt={name} />
                    :
                    <img src={messi} alt={name} style={{  objectFit:'contain' }} />
                }

            </div>
            <div className='cardProduct_info'>
                <h2>{name}</h2>
                <h3>{info}</h3>
            </div>
        </div>
    );
};

export default ProductCard;
