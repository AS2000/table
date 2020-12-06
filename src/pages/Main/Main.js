/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setUsers, addNewCampaigns } from '../../redux/actions';
import { Container } from 'reactstrap';

import { getUsers } from '../../api/api';

import Header from '../../modules/Header/Header';
import Table from '../../modules/Table/Table';

import './Main.css';

const Main = () => {
    const dispatch = useDispatch();

    React.useEffect(()=> {
        getUsers()
            .then( response =>
                dispatch(setUsers(response.data))
            )
            .catch ( error =>
                console.error(error)
            );
        },[]
    );

    React.useEffect(() =>
        window.addCampaigns = (campaigns) => {
            campaigns && dispatch(addNewCampaigns(campaigns))
        },[]
    );

    return (
        <div className="main-page">
            <Container>
                <Header />
                <Table />
            </Container>
        </div>
    );
};

export default Main;