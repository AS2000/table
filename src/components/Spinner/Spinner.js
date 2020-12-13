import * as React from 'react';
import { Spinner } from 'reactstrap';

import './Spinner.css';

const SpinnerComponent = ({
    isLoading = false,
}) => {
    if (isLoading) {
        return (
            <div className="spinner">
                <Spinner color="info" />
            </div>
        );
    };

    return null;
};

export default SpinnerComponent;
