import * as actionTypes from '../constants/actionTypes';
import * as authServices from '../services/auth.service';

export function logInUser(username, password) {
    return async function (dispatch) {
        try {
            const { data: { accessToken: token } } = await authServices.loginUser(username, password);
            localStorage.setItem('token', token);
            const { data: user } = await authServices.getMe();
            dispatch({ type: actionTypes.LOGIN_USER_SUCCESSFUL, payload: { user } });
        } catch (e) {
            console.log(e);
            dispatch({ type: actionTypes.LOGIN_USER_FAILED });
        }
    }
}

export function getMe() {
    return async function (dispatch) {
        const token = localStorage.getItem('token');
        if (token) {

            try {
                const { data: user } = await authServices.getMe(token);
                dispatch({ type: actionTypes.LOGIN_USER_SUCCESSFUL, payload: { user } });
            } catch (e) {
                console.log(e);
                dispatch({ type: actionTypes.LOGIN_USER_FAILED });
            }

        }
    }
}

export function logOutUser() {
    localStorage.clear();
    return { type: actionTypes.LOGOUT_USER };
}