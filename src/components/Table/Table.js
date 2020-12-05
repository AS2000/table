import * as React from 'react';
import { useSelector } from 'react-redux';

import TableRow from '../TableRow/TableRow';
import { compaigns } from '../../mock/mock';

const filterCompaignsWithWrongPeriod = (compaigns) => compaigns.filter(
    (el) => new Date(el.startDate) < new Date(el.endDate)
);

const filterCompaignsBySearchText = (compaigns, searchText) => {
    console.log('searchText: ', searchText);
    console.log('compaigns: ', compaigns);
   return compaigns.filter((el) =>
        el.name
        && searchText
        && el.name.toLowerCase().includes( searchText.toLowerCase())
    );
};

const filterCompaignsByDate = ({ compaigns, startDate, endDate, searchText }) => {
    const filteredComaings = filterCompaignsWithWrongPeriod(compaigns);
    const filteredComaingsBySearch = searchText
        ? filterCompaignsBySearchText(filteredComaings, searchText)
        : filteredComaings;

    return filteredComaingsBySearch.filter(
        (el) => {
            if (
                startDate
                && endDate
                && new Date(el.startDate) >= new Date(startDate)
                && new Date(el.endDate) <= new Date(endDate)
            ) {
                return el;
            };

            if (
                startDate
                && !endDate
                && new Date(el.startDate) >= new Date(startDate)
            ) {
                return el;
            };

            if (
                endDate
                && !startDate
                && new Date(el.endDate) <= new Date(endDate)
            ) {
                return el;
            };

            if (
                !startDate
                && !endDate
            ) {
                return el;
            };

            return null;
        }
    );
};

const Table = () => {
    const {
        startDate,
        endDate,
        searchText,
     } = useSelector(state => state);

    const renderTableHeader = () => (
             <TableRow isHeader />
    );

    const renderTableBody = (compaigns) => compaigns.map(
        (el, index) =>
            <TableRow data={el} key={`row-${index}`} />
    );

    return (
        <div>
            { renderTableHeader() }
            { renderTableBody(
                filterCompaignsByDate({ compaigns, startDate, endDate, searchText })
            ) }
        </div>
    );
};

export default Table;
