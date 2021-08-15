import React from 'react';
import s from './Benefit.module.scss';

interface IBenefit {
    title: string
    body: string
    img: string
}

const Benefit: React.FC<IBenefit> = ({ title, body, img }) => {
    return (
        <div className={s.root}>
            <img src={img} alt="" />
            <div className={s.title}>{ title }</div>
            <div className={s.body}>{ body }</div>
        </div>
    )
}

export default Benefit;
