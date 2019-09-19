import React from 'react';

interface IPaginationProps {
    postsPerPage: any;
    totalPosts: any;
    paginate: (number: number) => void;

}
const Pagination = ({ postsPerPage, totalPosts, paginate }: IPaginationProps) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => <li key={number} className="page-item"> <a href="!#" onClick={() => paginate(number)} className="page-link">{number}</a></li>)}
            </ul>
        </nav>
    )
}

export default Pagination
