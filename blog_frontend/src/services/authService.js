import axios from "axios";
import BACKEND_URL from "../config/backend";

export let loginUserCall = async (data) => {
  try {
    const response = await axios.post(`http://localhost:7000/api/auth/login
`, data);
    return response.data;
  } catch (error) {
    console.log("loginUserCall error", error);
    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
