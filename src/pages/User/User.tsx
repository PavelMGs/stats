import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './User.module.scss';
import calendar from '../../assets/calendar.png';
import { OnDateRangeChangeProps } from 'react-date-range';
import { useState } from 'react';
import DataPicker from '../../components/DataPicker/DataPicker';
import { IStats, IUser } from '../../interfaces';
import Chart from '../../components/Chart/Chart';
import { months } from './months';

const User = () => {
    const {uid} = useParams<any>();
    const [isClosed, setIsClosed] = useState(true);
    const [selectionRange, setSelectionRange] = useState<any>({ startDate: new Date('2019-10-02'), endDate: new Date('2019-10-13') });
    const [data, setData] = useState <{ user: IUser, stats: IStats[] }>();
    const [fromTo, setFromTo] = useState('');
    const [clicks, setClicks] = useState<any>([]);
    const [views, setViews] = useState<any>([])

    useEffect(() => {
        fetch(`http://localhost:8000/user/${uid}/${selectionRange.startDate.getTime()}/${selectionRange.endDate.getTime()}`)
        .then(res => res.json())
            .then(res_data => setData(res_data))

        const date_text = `${months[selectionRange.startDate.getMonth()]} ${selectionRange.startDate.getDay()},${selectionRange.startDate.getFullYear()}
                            -${months[selectionRange.endDate.getMonth()]} ${selectionRange.endDate.getDay()},${selectionRange.endDate.getFullYear()}
        `
        setFromTo(date_text);
    }, [selectionRange])

    useEffect(() => {
        const clicks_data: any = [];
        data?.stats.map((item) => {
            const date = new Date(item.date)
            clicks_data.push({
                date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
                clicks: item.clicks
            })
        });
        
        setClicks(clicks_data)

        console.log(data);
        const views_data: any = [];
        data?.stats.map((item) => {
            const date = new Date(item.date)
            views_data.push({
                date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
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

    const handleSelect = (range: OnDateRangeChangeProps) => {
        setSelectionRange(range.range1);
    }
    
    const handleClose = () => {
        setIsClosed(true);
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
                    <div className={s.data_label} onClick={() => setIsClosed(!isClosed)}>
                        <div className={s.img_container}>
                            <img src={calendar} alt="" />
                        </div>
                        <div className={s.date_text_label}>
                            {fromTo}
                        </div>
                    </div>
                    <DataPicker handleSelect={handleSelect} handleClose={handleClose} isClosed={isClosed} selectionRange={selectionRange} />
                </div>
            </div>
            {
                clicks.length ? <div className={s.chart} style={{ marginBottom: "24px" }}><Chart data={clicks} type="clicks" /></div> : null
            }
            {
                views.length ? <div className={s.chart} style={{marginBottom: "105px"}} ><Chart data={views} type="views" /></div> : 'No such data'
            }
            <div></div>
        </div>
    )
}

export default User;
