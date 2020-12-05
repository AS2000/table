import { SET_USERS } from './constants';

const initialState = {
    users: [],
};

function rootReducer(state = initialState, action) {
    if (action.type === SET_USERS) {
        return { users: [...action.payload]};
    }
    return state;
}

export default rootReducer;
