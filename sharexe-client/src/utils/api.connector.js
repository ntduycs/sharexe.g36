import { API_URL, ACCESS_TOKEN, VEHICLE_LIST_SIZE } from '../constants/common';


const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
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