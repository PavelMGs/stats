import React, { useState } from 'react'
import { DateRangePicker, OnDateRangeChangeProps } from 'react-date-range';
import './data_picker.scss';

interface IDataPicker {
    isClosed: boolean
    handleClose: () => void,
    handleSelect: (range: OnDateRangeChangeProps) => void
    selectionRange: {
        startDate: Date,
        endDate: Date
    }
}

const DataPicker: React.FC<IDataPicker> = ({ isClosed, handleClose, handleSelect, selectionRange }) => {

    return (
        <div className={`data_picker ${isClosed ? 'closed' : null}`}>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <button className='close_data' onClick={handleClose}>
                X
            </button>
        </div>
    )
}

export default DataPicker;
