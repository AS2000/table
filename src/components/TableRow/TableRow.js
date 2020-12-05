import * as React from 'react';
import { Row, Col } from 'reactstrap';

import './TableRow.css';

const TableRow = ({
    isHeader,
    data = [],
}) => {
    const renderHeaderTitle = (text) => (
        <div className="table-title">
            <h6>
                { text }
            </h6>
        </div>
    );

    const renderLeftCols = () => (
        <Row>
            <Col className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('Name')
                        : <h6>{ `Compaign ${data.id}` }</h6>
                }
            </Col>
            <Col className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('User Name')
                        : <h6>{ `Name` }</h6>
                }
            </Col>
        </Row>
    );

    const renderRightCols = () => (
        <Row>
            <Col className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('Start Date')
                        : <h6>{ data.startDate }</h6>
                }
            </Col>
            <Col className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
            {
                    isHeader
                        ? renderHeaderTitle('End Date')
                        : <h6>{ data.endDate }</h6>
            }
            </Col>
            <Col className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('Active')
                        : <div>status</div>
                }
            </Col>
            <Col className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('Budget')
                        : <h6>{ `${data.Budget} USD` }</h6>
                }
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