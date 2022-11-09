import axios from "axios";

const API_URL = process.env.REACT_APP_MEDIA_ROOT_PROD;

export const todos = () => {
    return axios.get(`${API_URL}/todos/`);
}

export const create = (data) => {
    return axios.post(`${API_URL}/todos/create/`, data);
}