import React, { useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import key from 'uniqid';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BannerPL } from '../placeholder';
import { getMealDetails } from '../../redux/actions';
import Ingredient from '../items/Ingredient';

const Meal = ({ mealDetails, getMealDetails, match: { params: { id } } }) => {
  useEffect(() => { getMealDetails(id); }, []);

  const { strMeal, strInstructions, strMealThumb } = mealDetails;
  const Ingrdients = _.compact(
    _.filter(_.keys(mealDetails), v => v.startsWith('strIngredient'))
      .map(v => mealDetails[v]),
  );

  return (
    <section className="u-clearfix u-image u-shading u-section-1" src="" id="sec-7b18">
      <div className="mt-5 u-clearfix u-sheet u-valign-middle-md u-sheet-1">
        {strMeal && strInstructions ? (
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div>
                <Link
                  to="/"
                  className="iconBack d-flex justify-content-center align-items-center"
                >
                  <span>
                    <i className="fa fa-chevron-left" />
                  </span>
                </Link>
                <h1 className="mt-5 u-custom-font u-font-oswald u-text u-text-palette-3-base u-title u-text-1">{strMeal}</h1>
                <p className="u-large-text u-text u-text-grey-50 u-text-variant u-text-2">{strInstructions}</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="image-content pt-5 mt-5">
                <div className="image-shadow" />
                <img
                  src={strMealThumb}
                  alt={strMeal}
                />
              </div>
              <div className="ml-3">
                <h6 className="mt-5 u-custom-font u-font-oswald u-text u-text-palette-3-base">Ingredients</h6>
                <div className="d-flex flex-wrap">
                  { Ingrdients.map(v => (<Ingredient key={key()} value={v} />)) }
                </div>
              </div>
            </div>
          </div>
        ) : (<BannerPL />)}
      </div>
    </section>
  );
};

Meal.propTypes = {
  mealDetails: PropTypes.shape({
    strMeal: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  getMealDetails: PropTypes.func.isRequired,
};

const mapStateToProps = ({ meals: { mealDetails } }) => ({
  mealDetails,
});

const mapDispatchToProps = {
  getMealDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(Meal);
