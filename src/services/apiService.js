// apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your server's URL

export const submitForm = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/api/submit-form`, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
};
