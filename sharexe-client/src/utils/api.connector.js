import {API_URL, ACCESS_TOKEN, VEHICLE_LIST_SIZE, TRIP_LIST_SIZE} from '../constants/common';


const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization',
            'Bearer ' + localStorage.getItem(ACCESS_TOKEN));
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                return !response.ok ? Promise.reject(json) : json;
            })
        );
};

export function addVehicle(vehicleReq) {
    return request({
        url: API_URL + "/vehicles",
        method: 'POST',
        body: JSON.stringify(vehicleReq)
    });
}

export function getAllVehicles(page, size) {
    page = page || 0;
    size = size || VEHICLE_LIST_SIZE;

    return request({
        url: API_URL + `/vehicles?page=${page}&size=${size}`,
        method: 'GET'
    });
}

export function editVehicle(vehicleRequest, vehicleId) {
    return request({
        url: API_URL + "/vehicles/" + vehicleId,
        method: 'PUT',
        body: JSON.stringify(vehicleRequest)
    })
}

export function getVehicleById(vehicleId) {
    return request({
        url: API_URL + `/vehicles/${vehicleId}`,
        method: 'GET'
    })
}

export function deleteVehicle(vehicleId) {
    return request({
        url: API_URL + "/vehicles/" + vehicleId,
        method: 'DELETE'
    })
}
export function addTrip(tripReq) {
    return request({
        url: API_URL + "/trips/create",
        method: 'POST',
        body: JSON.stringify(tripReq)
    });
}

export function updateTripStatus(tripId,tripReq) {
    return request({
        url: API_URL + "/trips/trip-status/"+tripId,
        method: 'PUT',
        body: JSON.stringify(tripReq)
    });
}


export function editTrip(tripRequest, tripId) {
    return request({
        url: API_URL + "/trips/modify/" + tripId,
        method: 'PUT',
        body: JSON.stringify(tripRequest)
    })
}

export function sendJoinTrip(tripId) {
    return request({
        url: API_URL + "/trips/join/" + tripId,
        method: 'POST',
    })
}


export function getAllTrips(page, size) {
    page = page || 0;
    size = size || TRIP_LIST_SIZE;

    return request({
        url: API_URL + "/trips/all",
        method: 'GET'
    });
}

export function getAllCreateTrips(page, size) {
    page = page || 0;
    size = size || TRIP_LIST_SIZE;

    return request({
        url: API_URL + `/trips/my-tripsCreate?page=${page}&size=${size}`,
        method: 'GET'
    });
}


export function getAllJoinedTrips(page, size) {
    return request({
        url: API_URL + "/trips/my-trips" ,
        method: 'GET',

    })
}

export function getTripById(tripId) {
    return request({
        url: API_URL + `/trips/${tripId}`,
        method: 'GET'
    })
}

export function deleteTrip(tripId) {
    return request({
        url: API_URL + "/trips/" + tripId,
        method: 'DELETE'
    })
}


export function getUserInfo(username) {
    return request({
        url: API_URL + `/users/${username}`,
        method: 'GET'
    })
}

export function getMyTrips() {
    return request({
        url: API_URL + `/trips/my-trips`,
        method:'GET'
    })
}