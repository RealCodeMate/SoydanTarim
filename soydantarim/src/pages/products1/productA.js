import React, { useState } from "react";

import ProductList from "../../components/pagination/ProductList";
import Pagination from "../../components/pagination/Pagination";

import "../../sass/pages/_productsA.scss";

const ProductA = () => {
  const [productData, setProductData] = useState([
    {
      "id": "ilac1",
      "name": "Lorem",
      "image": "https://i.picsum.photos/id/70/200/200.jpg?hmac=hRU7tEHltyLUTf0bCrAWFXlPRXOBTsvCcvL-dIUG2CE",
    },
    {
      "id": "ilac2",
      "name": "Ipsum",
      "image": "https://i.picsum.photos/id/432/200/200.jpg?hmac=b4-kxXh_oTpvCBH9hueJurvHDdhy0eYNNba-mO9Q8bU",
    },
    {
      "id": "ilac3",
      "name": "Dolor",
      "image": "https://i.picsum.photos/id/741/200/200.jpg?hmac=p1uKDNQ-F_iZNWuOa850lFxzcw_rXxy9gW_PbiMWriA",
    },
    {
      "id": "ilac4",
      "name": "Sit",
      "image": "https://i.picsum.photos/id/979/200/200.jpg?hmac=WcPMB8O2ujsPsQzJm14ISP-kXmQ59P6G82VPGNwql4I",
    },
    {
      "id": "ilac5",
      "name": "Amet",
      "image": "https://i.picsum.photos/id/639/200/200.jpg?hmac=us3unt6qN8__M3Xg5qmnoqGeKDyMlYUz0VgEANZ7wuo",
    },
    {
      "id": "ilac6",
      "name": "Consectetur",
      "image": "https://i.picsum.photos/id/696/200/200.jpg?hmac=JE4lFckorKxM41-eM1nTxXjpOeCf3aZkAxrLl3ZAYI0",
    },
    {
      "id": "ilac7",
      "name": "Adipiscing",
      "image": "https://i.picsum.photos/id/478/200/200.jpg?hmac=YfKBYcZHT991lmrKfB0pYNaztmUvQecXbVrc5V4mj8E",
    },
    {
      "id": "ilac8",
      "name": "Elit",
      "image": "https://i.picsum.photos/id/880/200/200.jpg?hmac=g5VV-eqqKk9TdTvkzKu6PzjRtzrqVhrj6v7H9ZT7PDo",
    },
    {
      "id": "ilac9",
      "name": "Nullam",
      "image": "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac9",
      "name": "Nullam",
      "image": "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac9",
      "name": "Nullam",
      "image": "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac9",
      "name": "Nullam",
      "image": "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac9",
      "name": "Nullam",
      "image": "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac9",
      "name": "Nullam",
      "image": "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },
    {
      "id": "ilac9",
      "name": "Nullam",
      "image": "https://i.picsum.photos/id/906/200/200.jpg?hmac=jQ-m5xgglMRMPvZhK3539qEkxPG1FVUae6AeV_HKQfg",
    },
    {
      "id": "ilac10",
      "name": "Nisl",
      "image": "https://i.picsum.photos/id/2/200/200.jpg?hmac=isSWZUpv7D1D156XcADPOCZlfCG9mmvb8OlXFdvLdK0",
    },

  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);


  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = productData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className='productsA'>
      <h1>İnsektisitler</h1>
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

export default ProductA;
