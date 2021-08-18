import React, { useEffect, useState } from 'react';
//@ts-ignore
import { DateRangePicker } from 'rsuite';
import UAParser from 'ua-parser-js';

interface IDataRP {
    handleSelect: (value: Array<Date>) => void
    current: Array<Date>
    fromTo: string
}

const DataRP: React.FC<IDataRP> = ({ handleSelect, current, fromTo }) => {
    const [device, setDevice] = useState('');
    
    useEffect(() => {
        let deviceL = UAParser(navigator.userAgent).device.type;
        setDevice(deviceL as string)
    })
    return (
        <div>
            {/* @ts-ignore */}
            <DateRangePicker placeholder={fromTo} showOneCalendar={device === 'mobile' ? true: false} onChange={handleSelect} defaultCalendarValue={current} />
        </div>
    )
}

export default DataRP
