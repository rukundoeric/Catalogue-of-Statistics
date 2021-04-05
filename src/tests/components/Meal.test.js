import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { screen, waitFor } from '@testing-library/react';
import Meal from '../../components/pages/Meal';
import Render from '../helpers/Render';

const state = {
  initialState: {
    meals: {
      randomMeal: {},
      mealDetails: {
        strMeal: 'ab',
        strInstructions: 'bc',
        strIngredient1: 'a',
        strIngredient2: 'a',
        strIngredient3: '',
      },
      mealsList: [],
    },
  },
};

const props = {
  match: {
    params: {
      id: '1',
    },
  },
};

describe('Meal Details :', () => {
  it('Should render Meal Details', async () => {
    Render(
      <BrowserRouter>
        <Meal match={props.match} />
      </BrowserRouter>, { ...state },
    );

    await waitFor(() => screen.getByTestId('meal-name'));

    expect(screen.getByTestId('meal-name')).toHaveTextContent('ab');
    expect(screen.getByTestId('meal-instruction')).toHaveTextContent('bc');
  });
});
