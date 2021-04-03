const initialState = {
  randomMeal: {},
  mealsList: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'GET_MEALS':
      return {
        ...state,
        mealsList: payload,
      };

    case 'GET_RANDOM_MEAL':
      return {
        ...state,
        randomMeal: payload,
      };

    case 'GET_MEAL_DETAILS':
      return {
        ...state,
        mealDetails: payload,
      };

    default:
      return state;
  }
};
