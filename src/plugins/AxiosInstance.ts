import axios, { AxiosInstance } from "axios";

export const $axios: AxiosInstance = axios.create({ baseURL: process.env.BASE_URL });