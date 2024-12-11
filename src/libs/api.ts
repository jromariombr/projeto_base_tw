import axios from "axios";

export const URL_BASE = import.meta.env.VITE_BASEAPI;
export const TOKEN_BASE = import.meta.env.VITE_TOKEN_RECOVER_PASSWORD;

export const api = axios.create({
  baseURL: `${URL_BASE}api_app/api/`
})