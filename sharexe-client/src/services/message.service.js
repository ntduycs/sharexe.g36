import Axios from 'axios';

export function getRecentContacts() {
    return Axios.get(`/api/rooms/`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } });
}

export function getRoomMessages(roomId) {
    return Axios.get(`/api/rooms/${roomId}/messages`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } });
}