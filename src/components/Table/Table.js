import * as React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'reactstrap';

import TableRow from '../TableRow/TableRow';

const Table = () => {
    const users = useSelector(state => state.users);

    const renderTableHeader = () => (
        <div>
            Header
        </div>
    );

    const renderTableBody = () => (
        <div>
            <Container>
                { users.map(
                    (el, index) => (
                        <TableRow data={el} key={`row-${index}`} />
                    )
                )}
            </Container>
        </div>
    )

    return (
        <div>
            { renderTableHeader() }
            { renderTableBody() }
        </div>
    );
};


export default Table;
