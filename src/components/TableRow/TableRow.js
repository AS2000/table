import * as React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';

import './TableRow.css';

const TableRow = ({
    isHeader,
    data = [],
}) => {
    const users = useSelector(state => state.users);

    const renderHeaderTitle = (text) => (
        <div className="table-title">
            <h6>
                { text }
            </h6>
        </div>
    );

    const renderName = (nameId) => {
        const userName = users && users.find((el) => el.id === nameId);

        return (
            userName
                ? userName.name
                : <div>Unknown User</div>
        )
    };

    const renderLeftCols = () => (
        <Row style={{ height: '100%' }}>
            <Col className="border" style={ isHeader && {backgroundColor: '#4472c4'}}>
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
                        : renderName(data.userId)
                }
            </Col>
        </Row>
    );

    const renderRightCols = () => (
        <Row style={{ height: '100%' }}>
            <Col xs="3" className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('Start Date')
                        : <h6>{ data.startDate }</h6>
                }
            </Col>
            <Col xs="3" className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                        isHeader
                            ? renderHeaderTitle('End Date')
                            : <h6>{ data.endDate }</h6>
                }
            </Col>
            <Col xs="3" className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('Active')
                        : <div>status</div>
                }
            </Col>
            <Col xs="3" className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
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
            <div className="w-100"></div>
        </Row>
    );
};

export default TableRow;