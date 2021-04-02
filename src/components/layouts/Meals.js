/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable max-len */
import React from 'react';
import key from 'uniqid';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Meal from '../items/Meal';
import { MealsPL } from '../placeholder';

const Meals = ({ mealsList }) => (
  <section className="u-clearfix u-section-2" id="sec-b0f8">
    <div className="u-clearfix u-sheet u-sheet-1 meals-container">
      <div id="scroll-to-top" className="mouse d-flex justify-content-center align-items-center">
        <a href="#" className="mouse-icon">
          <div className="mouse-wheel">
            <span className="fa fa-chevron-down" />
          </div>
        </a>
      </div>
      <Filter />
      <div className="mt-3 u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-col">
            <div className="u-size-30">
              <div className="u-layout-row">
                {mealsList ? (
                  mealsList.map(meal => (<Meal key={key()} meal={meal} />))
                ) : (<MealsPL />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

Meals.propTypes = {
  mealsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Meals;
