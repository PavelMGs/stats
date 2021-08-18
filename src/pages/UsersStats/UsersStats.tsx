import Pagination from '@material-ui/lab/Pagination';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pag.scss';
import Table from '../../components/Table/Table';
import { IData } from '../../interfaces';
import s from './UsersStats.module.scss';
import { host } from '../../utils/host';
import { CircularProgress } from '@material-ui/core';

const UsersStats = () => {
    const [data, setData] = useState<IData>();
    const [page, setPage] = useState(1);
    const [pagesCount, setPagesCount] = useState(1);

    useEffect(() => {
        fetch(`${host}${page}`)
        .then(res => res.json())
        .then((json: any) => {
            const users = json.users;
            const statistic = json.statistic;
            const pages = json.pagesCount;
            setPagesCount(pages)
            setData({ users, statistic })
            console.log(statistic)
        })
    }, [page])

    const handleChandhePage = (nextPage: number) => {
        setPage(nextPage)
    } 

    if(!data) {
        return <div className={s.loading} ><CircularProgress /></div>
    }

    return (
        <div className={s.root}>
            <nav className={s.navigation}>
                <Link to="/" className={s.to_main}>Main page</Link>
                <span className={s.greater}> &gt; </span>
                <span className={s.current}>User statistics</span>
            </nav>
            <h2>Users statistics</h2>
            {
                data ? <Table data={data} /> : null
            }
            <div className={s.pag}>
                <Pagination count={pagesCount} shape="rounded" className={s.pagination} onChange={(e, page) => handleChandhePage(page)} />
            </div>
        </div>
    )
}

export default UsersStats
