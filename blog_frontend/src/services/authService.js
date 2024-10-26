import axios from "axios";
import BACKEND_URL from "../config/backend";
console.log(BACKEND_URL);

export let loginUserCall = async (data) => {
  try {
    const response = await axios.post(`${BACKEND_URL}/auth/login`, data);
    return response.data;
  } catch (error) {
    console.log("loginUserCall error", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
