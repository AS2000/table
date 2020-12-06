import {
    SET_USERS,
    SET_START_DATE,
    SET_END_DATE,
    SET_SEARCH_TEXT,
    ADD_NEW_CAMPAIGNS,
} from './constants';

export function setUsers(payload) {
    return {
        type: SET_USERS,
        payload,
    };
};
export function setStartDate(payload) {
    return {
        type: SET_START_DATE,
        payload,
    };
};

export function setEndDate(payload) {
    return {
        type: SET_END_DATE,
        payload,
    };
};

export function setSearchText(payload) {
    return {
        type: SET_SEARCH_TEXT,
        payload,
    };
};

export function addNewCampaigns(payload) {
    return {
        type: ADD_NEW_CAMPAIGNS,
        payload,
    };
};
