/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setUsers, addNewCampaigns } from '../../redux/actions';
import axios from 'axios';
import { Container } from 'reactstrap';

import Header from '../../modules/Header/Header';
import Table from '../../modules/Table/Table';

import './Main.css';

const Main = () => {
    const dispatch = useDispatch();

    React.useEffect(()=> {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
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