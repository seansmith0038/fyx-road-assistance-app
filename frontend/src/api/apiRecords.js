import axios from "axios";
import { BASE_URL } from "./baseApi";

axios.defaults.withCredentials = true;

export const getRecords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/records`);

    return response.data.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getRecord = async (id) => {
  try {
    const records = await axios.get(`${BASE_URL}/records`);

    const record = records.data.data.find((record) => record.id === id);

    return record;
  } catch (error) {
    return error.response.data;
  }
};

export const createRecord = async (record) => {
  try {
    const response = await axios.post(`${BASE_URL}/records`, record);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createEditRecord = async (record) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/records/${record.id}`,
      record,
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteRecord = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/records/${id}`);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
