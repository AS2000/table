import {
    SET_USERS,
    SET_START_DATE,
    SET_END_DATE,
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
