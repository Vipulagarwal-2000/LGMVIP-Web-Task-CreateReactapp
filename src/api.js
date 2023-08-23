import axios from "axios";

const API_URL = "https://reqres.in/api/users?page=2";

export const getUsers = async (page) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}`);
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
