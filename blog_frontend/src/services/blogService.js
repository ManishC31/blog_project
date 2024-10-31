import BACKEND_URL from "../config/backend";


export const getAllBlogs = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/blog/all`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        });
        return response.data;
    } catch (error) {
        console.log("loginUserCall error", error);
        return {
            success: false,
            message: "Something went wrong",
        };
    }
}