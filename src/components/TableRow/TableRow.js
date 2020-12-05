import * as React from 'react';
import { Row, Col } from 'reactstrap';

import './TableRow.css';

const TableRow = ({ data }) => {
    console.log('data: ', data);

    const renderLeftCols = () => (
        <Row>
            <Col className="border">
                11
            </Col>
            <Col className="border">
                22
            </Col>
        </Row>
    );

    const renderRightCols = () => (
        <Row>
            <Col className="border">
                33
            </Col>
            <Col className="border">
                44
            </Col>
            <Col className="border">
                55
            </Col>
            <Col className="border">
                66
            </Col>
        </Row>
    );


    return (
        <Row>
            <Col xs="5">
                { renderLeftCols() }
            </Col>
            <Col xs="7">
                { renderRightCols() }
            </Col>
        </Row>
    );
};

export default TableRow;