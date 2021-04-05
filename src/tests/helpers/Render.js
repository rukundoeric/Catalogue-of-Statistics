import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const Render = (
  ui,
  { initialState, ...renderOptions } = {},
) => {
  const store = mockStore({ ...initialState });
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );

  Wrapper.propTypes = {
    children: PropTypes.shape({}).isRequired,
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default Render;
