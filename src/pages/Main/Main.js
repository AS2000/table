import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setUsers, addCampaigns } from '../../redux/actions';
import axios from 'axios';
import { Container } from 'reactstrap';

import Header from '../../modules/Header/Header';
import Table from '../../modules/Table/Table';

import { campaigns } from '../../mock/mock';

import './Main.css';

const Main = () => {
    const dispatch = useDispatch();

    React.useEffect(()=> {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then( response =>
                    dispatch(setUsers(response.data))
                );
            dispatch(addCampaigns(campaigns));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
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