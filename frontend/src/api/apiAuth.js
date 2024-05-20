import axios from "axios";
import { BASE_URL } from "./baseApi";

axios.defaults.withCredentials = true;

export const apiLogin = async (name, password) => {
  const response = await axios.post(`${BASE_URL}/users/login`, {
    name,
    password,
  });

  if (response.status === 200) {
    return response.data;
  }

  return response.data;
};

export const apiLogout = async () => {
  const response = await axios.get(`${BASE_URL}/users/logout`);
  return response.data;
};

export const apiCheckAuth = async () => {
  const response = await axios.get(`${BASE_URL}/users/isLoggedIn`);

  return response.data;
};

export const apiRegister = async (name, password) => {
  const response = await axios.post(`${BASE_URL}/users/signup`, {
    name,
    password,
  });

  if (response.status === 200) {
    return response.data;
  }

  return response.data;
};
