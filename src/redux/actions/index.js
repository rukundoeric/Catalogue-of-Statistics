import axios from 'axios';
import r from 'randomstring';

import {
  randomMeal, categories, search, mealDetails,
} from './_api';

export const getRandomMeal = () => async dispatch => {
  const { data: { meals } } = await axios.get(randomMeal);
  dispatch({
    type: 'GET_RANDOM_MEAL',
    payload: meals[0],
  });
};

export const getCategories = () => async dispatch => {
  const { data: { meals: payload } } = await axios.get(categories);
  dispatch({
    type: 'GET_CATEGORIES',
    payload,
  });
};

export const getMeals = (query = r.generate(1)) => async dispatch => {
  const { data: { meals } } = await axios.get(search(query));
  dispatch({
    type: 'GET_MEALS',
    payload: meals.slice(0, 9),
  });
};

export const getMealDetails = id => async dispatch => {
  const { data: { meals } } = await axios.get(mealDetails(id));
  dispatch({
    type: 'GET_MEAL_DETAILS',
    payload: meals[0],
  });
};
