import apiClient from "../apiClient.js";

export const getCategoryes = () => {
  return apiClient.get(`/category`);
};
