import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setStartDate,
    setEndDate,
 } from '../../redux/actions';
import { Input } from 'reactstrap';

import './DatePicker.css';


const DatePicker = () => {
    const dispatch = useDispatch();
    const { startDate, endDate } = useSelector(state => state);

    const inputStyle = { backgroundColor: 'white', color:'black', textAlign: 'center' };

    return (
        <div className="date-picker">
            <Input
                type="date"
                name="input-start-date"
                varibale={ startDate }
                onChange={ (date) => dispatch(setStartDate(date.target.value)) }
                placeholder="Start-Date"
                style={ inputStyle }
                max={ endDate }
            />
            <div className="margin-left">
                <Input
                    type="date"
                    name="input-end-date"
                    varibale={ endDate }
                    onChange={ (date) => dispatch(setEndDate(date.target.value)) }
                    placeholder="End-Date"
                    style={ inputStyle }
                    min={ startDate }
                />
            </div>
        </div>
    );

};

export default DatePicker;