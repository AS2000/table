import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../../redux/actions';
import axios from 'axios';
import { Container } from 'reactstrap';

import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';

const Main = () => {
    const dispatch = useDispatch();

    React.useEffect(()=> {
            axios.get(`https://jsonplaceholder.typicode.com/users`)
                .then( response =>
                    dispatch(setUsers(response.data))
                );
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    return (
        <div>
            <Container>
                <Header />
                <Table />
            </Container>
        </div>
    );
};

export default Main;