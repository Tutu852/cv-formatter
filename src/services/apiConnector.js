import axios from "axios";

export const apiConnector = async (method, url, bodyData = null, ) => {
  try {
    const response = await axios({
      method,
      url,
      data: bodyData,
      
      withCredentials: true,
    });
    return response;
  } catch (error) {
    // Normalize error object
    console.error("API Error:", error);
    const err = error?.response?.data ?? { message: error.message ?? "API Error" };
    throw err;
  }
};
