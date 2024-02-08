import { apiClient } from "../axios/api";

export const getallhotels = async () => {
  try {
    const response = await apiClient.get("/hotel/get-all-hotels");
    return response.data;
  } catch (error) {
    return error;
  }
};
