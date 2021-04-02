/* eslint-disable max-len */
import React from 'react';
import key from 'uniqid';
import Filter from './Filter';
import Meal from '../items/Meal';

const Meals = () => (
  <section className="u-clearfix u-section-2" id="sec-b0f8">
    <div className="u-clearfix u-sheet u-sheet-1 meals-container">
      <Filter />
      <div className="u-clearfix u-expanded-width u-gutter-10 u-layout-wrap u-layout-wrap-1">
        <div className="u-gutter-0 u-layout">
          <div className="u-layout-col">
            <div className="u-size-30">
              <div className="u-layout-row">
                { [1, 2, 3].map(() => (<Meal key={key()} />)) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Meals;
