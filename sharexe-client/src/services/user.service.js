import Axios from "axios";

export function getUser(username) {
    return Axios.get(`/api/users/${username}`);
}