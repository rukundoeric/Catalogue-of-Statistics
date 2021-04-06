import React from 'react';
import PropTypes from 'prop-types';

const Meal = ({ meal, handleShowInfo }) => (
  <div
    id={meal.idMeal}
    className="u-container-style u-image u-layout-cell u-left-cell u-size-20 u-image-1 item"
    style={{ backgroundImage: `url(${meal.strMealThumb})` }}
    onMouseEnter={e => { handleShowInfo(e, meal.idMeal); }}
  >
    <div className="u-container-layout" />
  </div>
);

Meal.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    idMeal: PropTypes.string,
  }).isRequired,
  handleShowInfo: PropTypes.func.isRequired,
};

export default Meal;
