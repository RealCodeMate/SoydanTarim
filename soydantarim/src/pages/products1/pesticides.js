import React, { useState } from "react";
import ProductList from "../../components/pagination/ProductList";
import Pagination from "../../components/pagination/Pagination";
import pesticidesList from "../../utils/pesticidesList";
import "../../sass/pages/_productsA.scss";

export default function Pesticides() {
    const [productData, setProductData] = useState(pesticidesList);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(8);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = productData.slice(firstPostIndex, lastPostIndex);
    return (
        <div className='productsA'>
            <h1>Haşare İlaçları</h1>
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