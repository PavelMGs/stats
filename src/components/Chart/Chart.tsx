import React from 'react';
import { Line } from '@ant-design/charts';
import s from './Charts.module.scss';

interface IChart {
    data: any
    style?: {
        [x:string]: string
    }
    type: string
    className?: string
}

const Chart: React.FC<IChart> = ({ data, type }) => {

    const config = {
        data,
        height: 400,
        xField: 'date',
        yField: type,
        point: {
            size: 5,
            shape: 'diamond',
        },
    };
    return (
        <div className={s.root}>
            <span>{type}</span>
            <Line style={{marginTop: "37px"}} {...config} />
        </div>
    );
};
export default Chart;