import * as React from 'react';
import { Container } from 'reactstrap';

import TableRow from '../TableRow/TableRow';
import { compaigns} from '../../mock/mock';

const Table = () => {


    const renderTableHeader = () => (
             <TableRow isHeader />
    );

    const renderTableBody = () => compaigns.map(
                    (el, index) =>
                        <TableRow data={el} key={`row-${index}`} />
    );

    return (
        <div>
            <Container>
                { renderTableHeader() }
                { renderTableBody() }
            </Container>
        </div>
    );
};


export default Table;
