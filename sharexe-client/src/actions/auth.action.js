import * as actionTypes from '../constants/actionTypes';
import * as authServices from '../services/auth.service';
import * as socketEvents from '../constants/socketEvents'
import * as messageServices from '../services/message.service';

import Socket from '../socket';

export function logInUser(username, password) {
    return async function (dispatch) {
        try {
            const { data: { accessToken: token } } = await authServices.loginUser(username, password);
            localStorage.setItem('token', token);
            const { data: user } = await authServices.getMe();
            dispatch({ type: actionTypes.LOGIN_USER_SUCCESSFUL, payload: { user } });
            const { data: rooms } = await messageServices.getRecentContacts();
            Socket.getInstance().emit(socketEvents.THIS_USER_GOES_ONLINE, { rooms: rooms.map(room => room.roomId), userId: user.id });
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
                const { data: rooms } = await messageServices.getRecentContacts();
                Socket.getInstance().emit(socketEvents.THIS_USER_GOES_ONLINE, { rooms: rooms.map(room => room.roomId), userId: user.id });
            } catch (e) {
                console.log(e);
                dispatch({ type: actionTypes.LOGIN_USER_FAILED });
            }

        }
    }
}

export function logOutUser(userId, isClosed) {
    if (!isClosed) {
        localStorage.clear();
    }
    Socket.getInstance().emit(socketEvents.THIS_USER_GOES_OFFLINE, { userId });
    return { type: actionTypes.LOGOUT_USER };
}