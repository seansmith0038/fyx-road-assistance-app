import axios from "axios";
import { BASE_URL } from "./baseApi";

axios.defaults.withCredentials = true;

export const getVehicles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/vehicles`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getVehicle = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/vehicles/${id}`);

    return response.data.data;
  } catch (error) {
    return error.response.data.data;
  }
};

export const createVehicle = async (vehicle) => {
  try {
    const response = await axios.post(`${BASE_URL}/vehicles`, vehicle);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateVehicle = async (vehicle) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/vehicles/${vehicle.id}`,
      vehicle,
    );

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteVehicle = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/vehicles/${id}`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};
