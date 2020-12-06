import * as React from 'react';
import { useSelector } from 'react-redux';

import { filterCompaignsByDate } from '../../utils';

import TableRow from '../../components/TableRow/TableRow';
import { compaigns } from '../../mock/mock';

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
        <React.Fragment>
            { renderTableHeader() }
            { renderTableBody(
                filterCompaignsByDate({ compaigns, startDate, endDate, searchText })
            ) }
        </React.Fragment>
    );
};

export default Table;
