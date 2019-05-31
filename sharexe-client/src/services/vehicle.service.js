import Axios from 'axios';

export function addVehicle() {
  return Axios.post(`/api/vehicles`);
}

export function editVehicle(vehicleId) {
  return Axios.put(`api/vehicles/${vehicleId}`);
}

export function getAllVehicles() {
  return Axios.get(`api/vehicles`);
}

export function getVehilceById(vehicleId) {
  return Axios.get(`api/vehicles/${vehicleId}`);
}

export function deleteVehicle(vehicleId) {
  return Axios.delete(`api/vehicles/${vehicleId}`);
}

export function getAllVehicle() {
  return Axios.get(`api/vehicles/`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } });
}