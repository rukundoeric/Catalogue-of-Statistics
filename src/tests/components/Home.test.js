import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { screen, waitFor, fireEvent } from '@testing-library/react';
import server from '../helpers/Server';
import Home from '../../components/pages/Home';
import Render from '../helpers/Render';

const state = {
  initialState: {
    meals: {
      randomMeal: {
        strMeal: 'ab',
        strInstructions: 'bc',
        strIngredient1: 'a',
        strIngredient2: 'a',
        strIngredient3: '',
      },
      mealDetails: {},
      mealsList: [{
        strMeal: 'ab',
        strInstructions: 'bc',
        strIngredient1: 'a',
        strIngredient2: 'a',
        strIngredient3: '',
      }, {
        strMeal: 'ab',
        strInstructions: 'bc',
        strIngredient1: 'a',
        strIngredient2: 'a',
        strIngredient3: '',
      }],
    },
    categories: [
      {
        strCategory: 'Select category',
      },
      {
        strCategory: 'ab',
      },
      {
        strCategory: 'ac',
      },
    ],
  },
};

describe('Home :', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Should render Home page', async () => {
    Render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>, { ...state },
    );

    await waitFor(() => screen.getByTestId('meal-name'));

    expect(screen.getByTestId('meal-name')).toHaveTextContent('ab');
    expect(screen.getByTestId('meal-instruction')).toHaveTextContent('bc');
  });

  it('Should search meal', async () => {
    Render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>, { ...state },
    );

    await waitFor(() => screen.getByTestId('search-input'));

    fireEvent.change(screen.getByTestId('search-input'), { target: { value: 'a' } });
    expect(screen.getByTestId('search-input')).toHaveValue('a');
    fireEvent.change(screen.getByTestId('search-input'), { target: { value: '' } });
    expect(screen.getByTestId('search-input')).toHaveValue('');
  });

  it('Should filter by category', async () => {
    Render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>, { ...state },
    );

    await waitFor(() => screen.getByTestId('filter-select'));

    fireEvent.change(screen.getByTestId('filter-select'), { target: { value: 'ab' } });
    expect(screen.getByTestId('filter-select')).toHaveValue('ab');
    fireEvent.change(screen.getByTestId('filter-select'), { target: { value: 'Select category' } });
    expect(screen.getByTestId('filter-select')).toHaveValue('Select category');
  });
});
