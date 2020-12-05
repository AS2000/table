import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStartDate, setEndDate } from '../../redux/actions';
import { Form, FormGroup, Label, InputGroup, Input, FormText, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './Header.css';

const Header = () => {
    const dispatch = useDispatch();

    const { startDate, endDate } = useSelector(state => state);
    console.log('startDate: ', startDate);
    console.log('endDate: ', endDate);

    const inputStyle = { backgroundColor: 'white', color:'black', textAlign: 'center' };

    const renderDateGroup = () => (
        <div className="left-side">
            <Input
                type="date"
                name="date"
                varibale={ startDate }
                onChange={ date=> dispatch(setStartDate(date.target.value)) }
                placeholder="Start-Date"
                style={ inputStyle }
            />
            <div className="margin-left">
                <Input
                    type="date"
                    name="date"
                    varibale={ endDate }
                    onChange={ date=> dispatch(setEndDate(date.target.value)) }
                    placeholder="End-Date"
                    style={ inputStyle }
                />
            </div>
        </div>
    );

    const renderSearch = () => (
        <InputGroup style={{ width: '30%'}}>
            <Input
                style={ inputStyle }
                placeholder="Search by name"
            />
            <InputGroupAddon addonType="append">
                <InputGroupText>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    );

    return (
        <div className="header-row">
            { renderDateGroup() }
            { renderSearch() }
        </div>
    );
};

export default Header;
