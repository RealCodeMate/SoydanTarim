import React, { useState } from "react";
import ProductList from "../../components/pagination/ProductList";
import Pagination from "../../components/pagination/Pagination";
import seedlingsList from "../../utils/seedlingsList";
import "../../sass/pages/_productsA.scss";

export default function Seedlings() {
    const [productData, setProductData] = useState(seedlingsList);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = productData.slice(firstPostIndex, lastPostIndex);
    return (
        <div className='productsA'>
            <h1>Fideler</h1>
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