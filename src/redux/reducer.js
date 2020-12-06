import {
    SET_USERS,
    SET_START_DATE,
    SET_END_DATE,
    SET_SEARCH_TEXT,
    ADD_NEW_CAMPAIGNS,
} from './constants';

const initialState = {
    users: [],
    campaigns: [],
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SET_USERS:
            return { ...state, users: [...action.payload] };
        case SET_START_DATE:
            return { ...state, startDate: action.payload };
        case SET_END_DATE:
            return { ...state, endDate: action.payload };
        case SET_SEARCH_TEXT:
            return { ...state, searchText: action.payload };
        case ADD_NEW_CAMPAIGNS:
            return { ...state, campaigns: [...state.campaigns, ...action.payload] };
        default:
            return state;
    };
};

export default rootReducer;
