import { APIClient } from "./api_helper";
import { site } from "./config";
import * as url from "./url_helper";

const api = new APIClient();

export const getIP = () => api.get(url.API_GET_IP);
export const getFP = () => api.get(url.API_GET_FP);
