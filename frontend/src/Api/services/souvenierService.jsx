import { apiClient } from "../axios/api";

export const getAllsouveniers = async () => {
  try {
    const response = await apiClient.get("/souvenier/get-all-souveniers");
    return response.data;
  } catch (error) {
    return error;
  }
};
