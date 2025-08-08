import axios from "axios";
import { endpoints } from "../api";


export const getAIReview = async (cvText) => {
  const response = await axios.post(endpoints.AI_REVIEW_CV, {
    extractedText: cvText,
  });
  return response.data;
};


