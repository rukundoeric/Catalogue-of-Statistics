import React from 'react';

const Filter = () => (
  <div className="u-align-center u-container-style u-group u-group-1">
    <div className="u-container-layout u-valign-middle u-container-layout-1">
      <div className="d-flex justify-content-center">
        <input type="text" placeholder="Search" className="input-f mr-2 u-border-2 u-border-palette-3-base u-btn u-btn-round u-button-style u-radius-50 u-text-grey-50 u-btn-1" />
        <select
          placeholder="Filter by category"
          className="input-f ml-2 u-border-2 u-border-palette-3-base u-btn u-btn-round u-button-style u-radius-50 u-text-grey-50 u-btn-1 px-4"
        >
          <option defaultValue>Select category</option>
          <option value="nono">Nono</option>
        </select>
      </div>
    </div>
  </div>
);

export default Filter;
