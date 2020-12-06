import * as React from 'react';
import { useSelector } from 'react-redux';

import { filterCampaignsByDate } from '../../utils';

import TableRow from '../../components/TableRow/TableRow';


const Table = () => {
    const {
        startDate,
        endDate,
        searchText,
        campaigns,
     } = useSelector(state => state);

    const renderTableHeader = () => (
        <TableRow isHeader />
    );

    const renderTableBody = (campaigns) => campaigns.map(
        (el, index) =>
            <TableRow data={el} key={`row-${index}`} />
    );

    return (
        <React.Fragment>
            { renderTableHeader() }
            { renderTableBody(
                filterCampaignsByDate({ campaigns, startDate, endDate, searchText })
            ) }
        </React.Fragment>
    );
};

export default Table;
