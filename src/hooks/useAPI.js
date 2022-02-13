import axios from 'axios';
import { API_URL } from '../config/constants';

export const CREATE_CO2C_START = 'CREATE_CO2C_START';
const createCo2cStart = () => ({ type: CREATE_CO2C_START });

export const CREATE_CO2C_SUCCESS = 'CREATE_CO2C_SUCCESS';
const createCo2cSuccess = data => ({ type: CREATE_CO2C_SUCCESS, data });

export const createCo2c = async (payload) => {
  const url = `${API_URL}api/co2c`;
  return await axios.post(url, payload);
};