import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

interface IPagination {
    currentPage: number
    handleChandhePage: (nextPage: number) => void
    pagesCount: number
    className: string
}

const MyPagination: React.FC<IPagination> = ({ currentPage, handleChandhePage, pagesCount }) => {
    return (
            <Pagination count={10} shape="rounded" />
    )
}

export default MyPagination;
