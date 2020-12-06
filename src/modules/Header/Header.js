import * as React from 'react';

import DatePicker from '../../components/DatePicker/DatePicker';
import SearchField from '../../components/SearchField/SearchField';

import './Header.css';

const Header = () =>  (
        <div className="header-row">
            <DatePicker />
            <SearchField />
        </div>
    );

export default Header;
