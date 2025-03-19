import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const apiKey = "a_g5AqXbhQySR50wkXMQycmnUb-pQ783dLS1F7yN6gY";
const encodedCredentials = btoa(`${apiKey}:`);

const config: AxiosRequestConfig = {
  baseURL: "https://server.lobby.tech/",
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: `Basic ${encodedCredentials}`,
  },
};

const api: AxiosInstance = axios.create(config);

export default api;
