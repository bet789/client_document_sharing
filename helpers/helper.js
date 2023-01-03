import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();

export const getIP = () => api.get(url.API_GET_IP);
export const getFP = () => api.get(url.API_GET_FP);

//auth
export const login = (data) => {
  return api.post(url.API_LOGIN, data);
};

export const GAuth = (data) => {
  return api.post(url.API_GAUTH_AUTHENTICATE, data);
};

export const getAllCategory = (data) => {
  return api.get(`${url.API_CATEGORY_GET_ALL}`, data);
};

export const getMenu = (data) => {
  return api.get(`${url.API_MENU_GET_HIERARCHICAL}`, data);
};

//posts
export const getPostPaging = (data) => {
  return api.get(`${url.API_POST_GET_PAGING}`, data);
};

export const getPostById = (data) => {
  return api.get(`${url.API_POST_GET_BY_ID}`, data);
};
