import axios from 'axios';
import { randomMeal, categories } from './_api';

export const getRandomMeal = async () => {
  const { data: payload } = await axios.get(randomMeal);
  return {
    type: 'GET_RANDOM_MEAL',
    payload,
  };
};

export const getCategories = async () => {
  const { data: payload } = await axios.get(categories);
  return {
    type: 'GET_CATEGORIES',
    payload,
  };
};
