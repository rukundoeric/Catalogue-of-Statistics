import React from 'react';
import key from 'uniqid';
import PropTypes from 'prop-types';

const Filter = ({ categories }) => (
  <div className="u-align-center mt-5">
    <div className="d-grid gap-2 d-md-block d-lg-flex justify-content-center">
      <input type="text" placeholder="Search" className="my-2 input-f u-border-1 u-border-palette-3-base u-btn u-btn-round u-button-style  u-text-grey-50 u-btn-1" />
      <select
        placeholder="Filter by category"
        className="my-2 input-f u-border-1 u-border-palette-3-base u-btn u-btn-round u-button-style u-text-grey-50 u-btn-1 px-4"
      >
        <option defaultValue>Select category</option>
        {categories.map(({ strCategory }) => (
          <option key={key()} value={strCategory}>{strCategory}</option>
        ))}
      </select>
    </div>
  </div>
);

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Filter;
