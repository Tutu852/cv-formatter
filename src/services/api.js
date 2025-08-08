const BASE_URL = import.meta.env.VITE_BASE_URL; 

export const endpoints = {
  UPLOAD_CV: `${BASE_URL}/api/v1/file/upload`,
//   AI_REVIEW_CV: `${BASE_URL}/api/v1/ai/get-response`
AI_REVIEW_CV: `${BASE_URL}/api/v1/ai/checkCvFormatting`

};

