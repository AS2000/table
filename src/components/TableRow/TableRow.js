import * as React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { numberFormatter } from '../../utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './TableRow.css';

const checkIsActive = ({
    startDate,
    endDate,
}) => {
    const today = new Date('2017-12-12'); // TODO remove before PROD

    return (
        startDate
        && endDate
        && new Date(startDate) <= today
        && new Date(endDate) >= today
    );
};

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
                : <h6>Unknown User</h6>
        )
    };

    const renderLeftCols = () => (
        <Row style={{ height: '100%' }}>
            <Col className="border" style={ isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('Name')
                        : <h6>{ data.name }</h6>
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

    const renderState = (data) => {
        const isActive = checkIsActive(data);
        const dotColor = isActive
            ? "green"
            : "red";
        const stateText = isActive
            ? "Active"
            : "Inactive";

        return (
            <div className="state-cell">
                <FontAwesomeIcon icon={ faCircle } color={ dotColor } size="sm"/>
                <div className="margin-left">
                    { stateText }
                </div>
            </div>
        );

    };

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
                        : renderState(data)
                }
            </Col>
            <Col xs="3" className="border" style={isHeader && {backgroundColor: '#4472c4'}}>
                {
                    isHeader
                        ? renderHeaderTitle('Budget')
                        : <h6>{ `${ numberFormatter(data.Budget) } USD` }</h6>
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