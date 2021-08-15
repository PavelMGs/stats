import React from 'react';
import { useHistory } from 'react-router-dom';
import { IData } from '../../interfaces';
import s from './Table.module.scss';

interface ITable {
    data: IData
}

const Table: React.FC<ITable> = ({ data }) => {
    const history = useHistory();
    return (
        <table className={s.root}>
            <thead className={s.head}>
                <tr className={s.headline}>
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>IP address</th>
                    <th>Total clicks</th>
                    <th>Total page views</th>
                </tr>
            </thead>
            <tbody className={s.body}>
                {
                    data.users.map((item) => (
                        <tr className={s.bodyline} onClick={() => history.push(`/user/${item.id}`)}>
                            <th>{item.id}</th>
                            <th>{item.first_name}</th>
                            <th>{item.last_name}</th>
                            <th>{item.email}</th>
                            <th>{item.gender}</th>
                            <th>{item.ip_address}</th>
                            <th>{data.statistic.find(stat => stat.user_id === item.id)?.clicks}</th>
                            <th>{data.statistic.find(stat => stat.user_id === item.id)?.page_views}</th>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;
