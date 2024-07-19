import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const RAPIDAPI_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

export const fetchRestaurants = async (locationId: string) => {
  const options = {
    method: "GET",
    url: API_URL,
    params: { locationId },
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
    console.log("API Response:", response.data.data);
    return response.data.data.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
