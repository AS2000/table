import * as React from 'react';
import { useDispatch } from 'react-redux';
import {
    setSearchText,
 } from '../../redux/actions';
import {  InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchField = () => {
    const dispatch = useDispatch();
    const inputStyle = { backgroundColor: 'white', color:'black', textAlign: 'center' };

    return (
        <InputGroup style={{ width: '30%'}}>
            <Input
                style={ inputStyle }
                placeholder="Search by name"
                onChange={ date=> dispatch(setSearchText(date.target.value)) }
            />
            <InputGroupAddon addonType="append">
                <InputGroupText>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    );
};

export default SearchField;
