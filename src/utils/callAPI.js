import axios from "axios";

const API_URL = "https://quote-garden.herokuapp.com/";
const API_VERSION = "api/v3/";

export const getRequest = (url) => {
    return axios.get(`${API_URL}${API_VERSION}${url}`);
};
