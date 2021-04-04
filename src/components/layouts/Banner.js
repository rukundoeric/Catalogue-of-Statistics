import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BannerPL } from '../placeholder';

const Banner = ({ randomMeal: { idMeal, strMeal, strInstructions } }) => (
  <section className="u-clearfix u-image u-shading u-section-1" src="" id="sec-7b18">
    <div className="u-clearfix u-sheet u-valign-middle-md u-sheet-1">
      <div className="u-align-left u-container-style u-group u-group-1">
        <div className="u-container-layout u-valign-middle u-container-layout-1">
          {strMeal && strInstructions ? (
            <div>
              <h1 className="u-custom-font u-font-oswald u-text u-text-palette-3-base u-title u-text-1">{strMeal.substring(0, 30)}</h1>
              <p className="u-large-text u-text u-text-grey-50 u-text-variant u-text-2">{`${strInstructions.substring(0, 220)}...`}</p>
              <Link
                to={`/meal/${idMeal}`}
                className="u-border-2 u-border-palette-3-base u-btn u-btn-round u-button-style u-radius-50 u-text-grey-50"
              >
                Read more
              </Link>
            </div>
          ) : (<BannerPL />)}
        </div>
      </div>
    </div>
  </section>
);

Banner.propTypes = {
  randomMeal: PropTypes.shape({
    idMeal: PropTypes.string,
    strMeal: PropTypes.string,
    strInstructions: PropTypes.string,
  }),
};

Banner.defaultProps = {
  randomMeal: {},
};

export default Banner;
