import React from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './User.module.scss';
import calendar from '../../assets/calendar.png';

const User = () => {
    const {uid} = useParams<any>();

    useEffect(() => {
        console.log(uid)
    }, [])

    return (
        <div className={s.root}>
            <nav className={s.navigation}>
                <Link to="/" className={s.to_main}>Main page</Link>
                <span className={s.greater}> &gt; </span>
                <Link to="/statistic" className={s.to_main}>User statistics</Link>
                <span className={s.greater}> &gt; </span>
                <span className={s.current}>Samuel Frost</span>
            </nav>
            <div className={s.container}>
                <h2>Samuel Frost</h2>
                <div className={s.data_picker}>
                    <span>Select date range</span>
                    <div>
                        <div>
                            <img src={calendar} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;
