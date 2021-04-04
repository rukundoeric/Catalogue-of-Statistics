import React from 'react';
import key from 'uniqid';
import PropTypes from 'prop-types';

const Filter = ({
  handleSearch, handleFilterCategory, categories, cCategory,
}) => (
  <div className="u-align-center mt-5">
    <div className="d-grid gap-2 d-md-block d-lg-flex justify-content-center">
      <input
        type="text"
        placeholder="Search"
        className="my-2 input-f u-border-1 u-border-palette-3-base u-btn u-btn-round u-button-style  u-text-grey-50 u-btn-1"
        onChange={handleSearch}
      />
      <select
        onChange={handleFilterCategory}
        placeholder="Filter by category"
        className="my-2 input-f u-border-1 u-border-palette-3-base u-btn u-btn-round u-button-style u-text-grey-50 u-btn-1 px-4"
      >
        {categories.map(({ strCategory }) => (
          <option
            key={key()}
            selected={strCategory === cCategory}
            value={strCategory}
          >
            {strCategory}
          </option>
        ))}
      </select>
    </div>
  </div>
);

Filter.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleFilterCategory: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  cCategory: PropTypes.string.isRequired,
};

export default Filter;
