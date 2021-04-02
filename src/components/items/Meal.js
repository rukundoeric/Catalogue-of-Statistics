import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal }) => (
  <div
    className="u-container-style u-image u-layout-cell u-left-cell u-size-20 u-image-1 item"
    style={{ backgroundImage: `url(${meal.strMealThumb})` }}
  >
    <div className="u-container-layout" />
  </div>
);

Meal.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default Meal;
