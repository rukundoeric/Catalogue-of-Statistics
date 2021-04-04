import React, { useState } from 'react';
import _ from 'lodash';
import key from 'uniqid';
import PropTypes from 'prop-types';
import Filter from './Filter';
import Meal from '../items/Meal';
import MealInfo from './MealInfo';
import { MealsPL } from '../placeholder';

const Meals = ({ mealsList, categories }) => {
  const [currentMeal, setCurrrentMeal] = useState(undefined);

  const position = (clientX, clientY) => {
    const mW = 400;
    const mH = 350;
    const sW = window.screen.width;
    const sH = window.screen.height;
    return {
      x: (sW - clientX) < mW ? clientX - mW : clientX,
      y: (sH - clientY) < mH ? clientY - (mH - 100) : clientY,
    };
  };

  const handleShowInfo = (e, id) => {
    setCurrrentMeal(_.find(mealsList, ({ idMeal }) => idMeal === id));
    document.querySelector('#mealInfo').style.display = 'block';
    if (window.screen.width > 768) {
      const pos = position(e.clientX, e.clientY);
      document.querySelector('#mealInfo').style.left = `${pos.x}px`;
      document.querySelector('#mealInfo').style.top = `${pos.y}px`;
    } else {
      document.querySelector('#mealInfo').style.width = '100%';
      document.querySelector('#mealInfo').style.height = '100vh';
    }
  };

  const handleGoToList = () => {
    window.scrollTo(0, 600);
  };

  const handleCloseInfo = () => {
    document.querySelector('#mealInfo').style.display = 'none';
  };

  return (
    <section className="u-clearfix u-section-2" id="sec-b0f8">
      <div className="u-clearfix u-sheet u-sheet-1 meals-container">
        <div id="scroll-to-top" className="mouse d-flex justify-content-center align-items-center">
          <buttton
            onClick={handleGoToList}
            className="mouse-icon"
          >
            <div className="mouse-wheel">
              <span className="fa fa-chevron-down" />
            </div>
          </buttton>
        </div>
        <Filter categories={categories} />
        <div
          onMouseLeave={handleCloseInfo}
          className="mt-3 u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1"
        >
          <MealInfo meal={currentMeal} />
          <div className="u-gutter-0 u-layout">
            <div className="u-layout-col">
              <div className="u-size-30">
                <div className="u-layout-row">
                  {mealsList ? (
                    mealsList.map(meal => (
                      <Meal
                        key={key()}
                        meal={meal}
                        handleShowInfo={handleShowInfo}
                        handleCloseInfo={handleCloseInfo}
                      />
                    ))
                  ) : (<MealsPL />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Meals.propTypes = {
  mealsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Meals;
