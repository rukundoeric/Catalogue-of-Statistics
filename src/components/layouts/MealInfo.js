/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Meal from '../items/Meal';
import { BannerPL } from '../placeholder';

const MealInfo = ({
  meal: {
    strMeal, strInstructions, strArea, strCategory,
  },
}) => {
  const loadInfo = () => { };
  return (
    <div className="mealInfo p-3">
      {strMeal && strInstructions ? (
        <div className="d-flex flex-column">
          <h6 className="title u-custom-font u-font-oswald u-text u-text-palette-3-base u-title u-text-1">{strMeal}</h6>
          <small className="u-text-grey-50 u-text-variant">{`${strInstructions.substring(0, 150)}...`}</small>
          <small className="mt-2 u-custom-font u-font-oswald u-text-palette-3-base">{`Category: ${strCategory}`}</small>
          <small className="u-custom-font u-font-oswald u-text u-text-palette-3-base">{`Country: ${strArea}`}</small>
          <a href="/home" className="u-border-2 u-border-palette-3-base u-btn u-btn-round u-button-style u-radius-50 u-text-grey-50">Read more</a>
        </div>
      ) : (<BannerPL />)}
    </div>
  );
};

MealInfo.propTypes = {
  meal: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strInstructions: PropTypes.string.isRequired,
    strArea: PropTypes.string.isRequired,
    strCategory: PropTypes.string.isRequired,
  }),
};

MealInfo.defaultProps = {
  meal: {},
};

export default MealInfo;
