import Axios from 'axios';

export function createChatRoom(partnerUsername) {
    return Axios.post('/api/rooms/', {partnerUsername}, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } });
}