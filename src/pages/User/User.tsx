import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './User.module.scss';
import { useState } from 'react';
import { IStats, IUser } from '../../interfaces';
import Chart from '../../components/Chart/Chart';
import { months } from './months';
import { host } from '../../utils/host';
import DataRP from '../../components/DataRP/DataRP';
import { dateToString } from '../../utils/dateToString';

const User = () => {
    const {uid} = useParams<any>();
    const [selectionRange, setSelectionRange] = useState<any>([new Date('2019-10-02'), new Date('2019-10-13')] );
    const [data, setData] = useState <{ user: IUser, stats: IStats[] }>();
    const [fromTo, setFromTo] = useState('');
    const [clicks, setClicks] = useState<any>([]);
    const [views, setViews] = useState<any>([])

    useEffect(() => {
        const start = dateToString(selectionRange[0]);
        const end = dateToString(selectionRange[1]);
        fetch(`${host}user/${uid}/${start}/${end}`)
        .then(res => res.json())
            .then(res_data => setData(res_data))

        const date_text = `${months[selectionRange[0].getMonth()]} ${selectionRange[0].getDate()},${selectionRange[0].getFullYear()}
                            -${months[selectionRange[1].getMonth()]} ${selectionRange[1].getDate()},${selectionRange[1].getFullYear()}
        `
        setFromTo(date_text);
    }, [selectionRange, uid])

    useEffect(() => {
        const clicks_data: any = [];
        data?.stats.forEach((item) => {
            const date = new Date(item.date)
            clicks_data.push({
                date: dateToString(date),
                clicks: item.clicks
            })
        });
        
        setClicks(clicks_data)

        const views_data: any = [];
        data?.stats.map((item) => {
            const date = new Date(item.date)
            views_data.push({
                date: dateToString(date),
                views: item.page_views
            })
        });

        if(!views_data.length) {
            views_data.push({
                date: 'no such data',
                views: 0
            })
        }
        if (!clicks_data.length) {
            clicks_data.push({
                date: 'no such data',
                clicks: 0
            })
        }

        setViews(views_data)

    }, [data])

    const handleSelect = (value: Array<Date>) => {
        setSelectionRange(value);
    }
    

    return (
        <div className={s.root}>
            <nav className={s.navigation}>
                <Link to="/" className={s.to_main}>Main page</Link>
                <span className={s.greater}> &gt; </span>
                <Link to="/statistic" className={s.to_main}>User statistics</Link>
                <span className={s.greater}> &gt; </span>
                <span className={s.current}>{data?.user.first_name} {data?.user.last_name}</span>
            </nav>
            <div className={s.container}>
                <h2>{data?.user.first_name} {data?.user.last_name}</h2>
                <div className={s.data_container}>
                    <span>Select date range</span>
                    <DataRP handleSelect={handleSelect} current={selectionRange} fromTo={fromTo} />
                </div>
            </div>
            {
                clicks.length ? <div className={s.chart} style={{ marginBottom: "24px" }}><Chart data={clicks} type="clicks" /></div> : null
            }
            {
                views.length ? <div className={s.chart} style={{marginBottom: "105px"}} ><Chart data={views} type="views" /></div> : 'No such data'
            }
        </div>
    )
}

export default User;
