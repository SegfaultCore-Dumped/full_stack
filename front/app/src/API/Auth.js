import axios from 'axios';
import { API_URL } from '../Constants/Constants';

export const login = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const signIn = async (body) => {
  try {
    const response = await axios.post(`${API_URL}/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
