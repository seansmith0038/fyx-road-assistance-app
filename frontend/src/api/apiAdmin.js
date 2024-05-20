import axios from "axios";
import { BASE_URL } from "./baseApi";

axios.defaults.withCredentials = true;

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/users`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getVehicles = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/vehicles`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getRecords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/records`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteRecord = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/admin/records/${id}`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};
