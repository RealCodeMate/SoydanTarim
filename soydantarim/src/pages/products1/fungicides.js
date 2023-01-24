import React, { useState } from "react";

import ProductList from "../../components/pagination/ProductList";
import Pagination from "../../components/pagination/Pagination";

import "../../sass/pages/_productsA.scss";
import fungicidesList from "../../utils/fungicidesList";

const Fungicides = () => {
  const [productData, setProductData] = useState(fungicidesList);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = productData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='productsA'>
      <h1>Fungisitler</h1>
      <ProductList productData={currentPosts} />
      <Pagination
        totalPosts={productData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Fungicides;
