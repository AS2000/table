import * as React from 'react';
import { useSelector } from 'react-redux';
import { Row, Col } from 'reactstrap';

import { numberFormatter } from '../../utils/utils';
import {
    USD,
    TABLE_TITLE_BACKGROUND_COLOR,
    CAMPAIGN_STATE,
 } from '../../constants';

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
    const titleCellStyle = {
        backgroundColor: TABLE_TITLE_BACKGROUND_COLOR,
        border: "solid 1px",
        borderColor: 'white',
    };
    const rowStyle = {
        height: '100%',
        minHeight: '35px',
        alignItems: 'center',
    };

    const renderCell = (text) => (
        <div className={ isHeader && "table-title" } >
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
                : 'Unknown User'
        )
    };

    const renderLeftCols = () => (
        <Row style={ rowStyle }>
            <Col xs="6" style={ isHeader && titleCellStyle}>
                {
                    renderCell(
                        isHeader
                            ? 'Name'
                            : data.name
                    )
                }
            </Col>
            <Col xs="6" style={isHeader && titleCellStyle}>
                {
                    renderCell(
                        isHeader
                            ? 'User Name'
                            : renderName(data.userId)
                    )
                }
            </Col>
        </Row>
    );

    const renderState = (data) => {
        const isActive = checkIsActive(data);
        const dotColor = isActive
            ? CAMPAIGN_STATE.active.color
            : CAMPAIGN_STATE.inactive.color;
        const stateText = isActive
            ? CAMPAIGN_STATE.active.label
            : CAMPAIGN_STATE.inactive.label;

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
        <Row style={ rowStyle }>
            <Col xs="3" style={isHeader && titleCellStyle}>
                {
                    renderCell(
                        isHeader
                            ? 'Start Date'
                            : data.startDate
                    )
                }
            </Col>
            <Col xs="3" style={isHeader && titleCellStyle}>
                {
                    renderCell(
                        isHeader
                        ? 'End Date'
                        : data.endDate
                    )
                }
            </Col>
            <Col xs="3" style={isHeader && titleCellStyle}>
                {
                    isHeader
                        ? renderCell('Active')
                        : renderState(data)
                }
            </Col>
            <Col xs="3" style={isHeader && titleCellStyle}>
                {
                    renderCell(
                        isHeader
                            ? 'Budget'
                            : `${ numberFormatter(data.Budget) } ${USD}`
                    )
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
