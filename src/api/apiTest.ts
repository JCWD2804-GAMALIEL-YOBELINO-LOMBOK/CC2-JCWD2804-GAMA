import axios from "axios";
export const BASE_URL = "https://randomuser.me/api/?results=10";

export const getUsers = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    return error;
  }
};
