import Axios from 'axios';

export function loginUser(usernameOrEmail, password) {
    return Axios.post(`/api/auth/login`, { usernameOrEmail, password });
}

export function getMe() {
    return Axios.get(`/api/auth/me`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } });
}