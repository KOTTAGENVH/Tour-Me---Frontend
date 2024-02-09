import { apiClient } from "../axios/api";

//Get all hotels
export const getallhotels = async () => {
  try {
    const response = await apiClient.get("/hotel/get-all-hotels");
    return response.data;
  } catch (error) {
    return error;
  }
};

//Get hotel by id
export const getHotelById = async (id) => {
  try {
    const response = await apiClient.get(`/hotel/get-single-hotel/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

//Update Rating
export const updatehotelRating = async (id, rating) => {
  try {
    const response = await apiClient.patch(`/hotel/update-hotel-rating/${id}`, {
      rating,
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
