import React from 'react';
import PropTypes from 'prop-types';
import { BannerPL } from '../placeholder';

const Banner = ({ randomMeal }) => (
  <section className="u-clearfix u-image u-shading u-section-1" src="" id="sec-7b18">
    <div className="u-clearfix u-sheet u-valign-middle-md u-sheet-1">
      <div className="u-align-left u-container-style u-group u-group-1">
        <div className="u-container-layout u-valign-middle u-container-layout-1">
          {randomMeal ? (
            <div>
              <h1 className="u-custom-font u-font-oswald u-text u-text-palette-3-base u-title u-text-1">{randomMeal.strMeal.substring(0, 30)}</h1>
              <p className="u-large-text u-text u-text-grey-50 u-text-variant u-text-2">{`${randomMeal.strInstructions.substring(0, 220)}...`}</p>
              <a href="/home" className="u-border-2 u-border-palette-3-base u-btn u-btn-round u-button-style u-radius-50 u-text-grey-50 u-btn-1" target="_blank">read more</a>
            </div>
          ) : (<BannerPL />)}
        </div>
      </div>
    </div>
  </section>
);

Banner.propTypes = {
  randomMeal: PropTypes.shape({
    strMeal: PropTypes.string,
    strInstructions: PropTypes.string,
  }),
};

Banner.defaultProps = {
  randomMeal: undefined,
};

export default Banner;
