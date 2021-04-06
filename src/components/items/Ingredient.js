import React from 'react';
import PropTypes from 'prop-types';

const Ingredient = ({ value }) => (
  <div
    className="u-border-2 px-3 py-1 m-1  u-border-palette-3-base u-btn-round u-button-style u-radius-50 u-text-grey-50"
  >
    {value}
  </div>
);

Ingredient.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Ingredient;
