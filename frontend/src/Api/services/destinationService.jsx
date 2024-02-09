import { apiClient } from "../axios/api";

//Get all destinations
export const getAlldestinations = async () => {
  try {
    const response = await apiClient.get("/destination/get-all-destinations");
    return response.data;
  } catch (error) {
    return error;
  }
};

//Get destination by id
export const getDestinationById = async (id) => {
  try {
    const response = await apiClient.get(`/destination/get-destination-by-id/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

//Update Rating
export const updatedestinationRating = async (id, rating) => {
  try {
    const response = await apiClient.patch(`/destination/update-rating/${id}`, { rating });
    return response.data;
  } catch (error) {
    return error;
  }
};
