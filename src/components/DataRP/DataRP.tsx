import React from 'react';
//@ts-ignore
import { DateRangePicker } from 'rsuite';

interface IDataRP {
    handleSelect: (value: Array<Date>) => void
    current: Array<Date>
    fromTo: string
}

const DataRP: React.FC<IDataRP> = ({ handleSelect, current, fromTo }) => {
    const handle = (value: any) => {
        console.log(value);
    }
    return (
        <div>
            {/* @ts-ignore */}
            <DateRangePicker placeholder={fromTo} onChange={handleSelect} defaultCalendarValue={current} />
        </div>
    )
}

export default DataRP
