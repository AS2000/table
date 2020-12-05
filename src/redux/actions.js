import { SET_USERS } from './constants';

export function setUsers(payload) {
    return {
        type: SET_USERS,
        payload,
    };
};
