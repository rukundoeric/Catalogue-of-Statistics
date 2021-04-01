/* eslint-disable react/prop-types */
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Meal from '../../components/pages/Meal';
import rootReducer from '../../redux/reducers';

afterEach(cleanup);

const initialState = {
  meals: [],
};

const store = createStore(rootReducer, initialState);

const Wrapper = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

it('Should match snapshot', () => {
  const { asFragment } = render(<Meal />, { wrapper: Wrapper });
  expect(asFragment(<Meal />)).toMatchSnapshot();
});
