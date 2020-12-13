/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { setUsers, addNewCampaigns } from '../../redux/actions';
import { Container } from 'reactstrap';

import { getUsers } from '../../api/api';

import Header from '../../modules/Header/Header';
import Table from '../../modules/Table/Table';
import Spinner from '../../components/Spinner/Spinner';

import './Main.css';

const Main = () => {
    const dispatch = useDispatch();
    const [isFetching, setIsFetching] = React.useState(false);

    React.useEffect(()=> {
        setIsFetching(true);

        getUsers()
            .then( (response) => {
                setIsFetching(false);
                dispatch(setUsers(response.data))
            })
            .catch ( (error) =>
            {
                setIsFetching(false);
                console.error(error);
            });
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
                <Spinner
                    isLoading={ isFetching }
                />
                {
                    !isFetching && (
                        <React.Fragment>
                            <Header />
                            <Table />
                        </React.Fragment>
                )}
            </Container>
        </div>
    );
};

export default Main;