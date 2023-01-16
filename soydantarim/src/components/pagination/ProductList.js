import React from "react";

import ProductCard from "./ProductCard";
import "../../sass/components/pagination/_productList.scss"

const ProductList = ({ productData }) => {
    return (
        <div className='products_list'>
            {productData.map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        image={product.image}
                        name={product.name}
                        price={product.current_price}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;
