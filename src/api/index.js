import axios from 'axios';
import { url } from '../constants/constants';

export const instance = axios.create({ baseURL: url });
