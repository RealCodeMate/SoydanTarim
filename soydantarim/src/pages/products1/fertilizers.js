import React, { useState } from "react";

import ProductList from "../../components/pagination/ProductList";
import Pagination from "../../components/pagination/Pagination";

import "../../sass/pages/_productsA.scss";
import fertilizersList from "../../utils/fertilizersList";

export default function Fertilizers() {
    const [productData, setProductData] = useState(fertilizersList);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = productData.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='productsA'>
            <h1>Gübreler</h1>
            <ProductList productData={currentPosts} />
            <Pagination
                totalPosts={productData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />
        </div>
    )
}