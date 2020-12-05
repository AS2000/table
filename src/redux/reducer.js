import {
    SET_USERS,
    SET_START_DATE,
    SET_END_DATE,
} from './constants';

const initialState = {
    users: [],
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERS:
            return { users: [...action.payload]};
        case SET_START_DATE:
            return { ...state, startDate: action.payload};
        case SET_END_DATE:
            return { ...state, endDate: action.payload};
        default:
            return state;
    };
};

export default rootReducer;
