import * as actionTypes from '../constants/actionTypes';

const initialState = {
    isAuthenticated: false,
    user: undefined
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN_USER_SUCCESSFUL:
            return { ...state, isAuthenticated: true, ...action.payload };

        case actionTypes.LOGIN_USER_FAILED:
            return { ...state, isAuthenticated: false, user: undefined };
        
        case actionTypes.LOGOUT_USER:
            return { ...state, isAuthenticated: false, user: undefined };
        
        default:
            return initialState;
    }
}