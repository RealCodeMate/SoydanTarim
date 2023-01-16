import React from "react";

import "../../sass/components/pagination/_pagination.scss"

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    console.log(currentPage)
    console.log(Math.ceil(totalPosts / postsPerPage))
    return (
        <div className='pagination'>
            <button key='decrease' onClick={currentPage !== 1 ? () => setCurrentPage(currentPage - 1) : () => setCurrentPage(1)} >&#8810;</button>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? "active" : ""}>
                        {page}
                    </button>
                );
            })}
            <button key='increse' onClick={currentPage !== Math.ceil(totalPosts / postsPerPage) ? () => setCurrentPage(currentPage + 1) : null}  >&#8811;</button>
        </div>
    );
};

export default Pagination;
