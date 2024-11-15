import axios from "axios";

const API_URL = "http://localhost:8080/api/users";
const API_URL1 = "http://localhost:8080/api/getusers";
const API_URL2 = "http://localhost:8080/api/getusers";
const API_URL3 = "http://localhost:8080/api/updateusers";
const API_URL4 = "http://localhost:8080/api/deleteusers";

export const createUser = (userData) => axios.post(`${API_URL}/`, userData);
export const getUser = (id) => axios.get(`${API_URL1}/${id}`);
export const getUsers = () => axios.get(`${API_URL2}/`);
export const updateUser = (id, userData) =>
  axios.put(`${API_URL3}/${id}`, userData);
export const deleteUser = (id) => axios.delete(`${API_URL4}/${id}`);
