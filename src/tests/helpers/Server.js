import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { categories, mealDetails, search } from '../../redux/actions/_api';

const server = setupServer(
  rest.get(categories, (req, res, ctx) => res(ctx.json({
    data: {
      meals: [
        {
          strCategory: 'ab',
        },
        {
          strCategory: 'ac',
        },
      ],
    },
  }))),
  rest.get(mealDetails('1'), (req, res, ctx) => res(ctx.json({
    data: {
      meals: [
        {
          idMeal: '364753',
          strMeal: 'abc',
          strInstructions: 'bc',
          strIngredient1: 'a',
          strIngredient2: 'a',
          strIngredient3: '',
        },
      ],
    },
  }))),
  rest.get(search('a'), (req, res, ctx) => res(ctx.json({
    data: {
      meals: [
        {
          idMeal: '343434',
          strMeal: 'abc',
          strInstructions: 'bc',
          strIngredient1: 'a',
          strIngredient2: 'a',
          strIngredient3: '',
        },
        {
          idMeal: '23232',
          strMeal: 'abc',
          strInstructions: 'bc',
          strIngredient1: 'a',
          strIngredient2: 'a',
          strIngredient3: '',
        },
        {
          idMeal: '3468',
          strMeal: 'abc',
          strInstructions: 'bc',
          strIngredient1: 'a',
          strIngredient2: 'a',
          strIngredient3: '',
        },
      ],
    },
  }))),
);

export default server;
