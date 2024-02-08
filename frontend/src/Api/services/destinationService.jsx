import { apiClient } from "../axios/api";

export const getAlldestinations = async () => {
  try {
    const response = await apiClient.get("/destination/get-all-destinations");
    return response.data;
  } catch (error) {
    return error;
  }
};
