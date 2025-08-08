import axios from "axios";
import { endpoints } from "../api";

export const uploadCV = async (file) => {
  if (!file) throw new Error("No file selected");

  const formData = new FormData();
  formData.append("cv", file);

  const response = await axios.post(endpoints.UPLOAD_CV, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data; 
};
