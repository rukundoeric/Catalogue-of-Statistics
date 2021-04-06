import React from 'react';
import { Placeholder } from 'semantic-ui-react';

export const BannerPL = () => (
  <div className="d-block banner-pl">
    <div className="div-1 mt-4" />
    <div className="div-2 my-2" />
    <div className="div-3 my-2" />
  </div>
);

export const MealDetailsPL = () => (
  <div className="row mealDetailsPL">
    <div className="col-lg-6 col-sm-12">
      <div>
        <div className="div-1 mt-5" />
        <div className="div-2 my-3" />
      </div>
    </div>
    <div className="col-lg-6 col-sm-12">
      <div className="image-content pt-5 mt-5">
        <div className="div-3 my-2" />
      </div>
      <div className="ml-3">
        <div className="div-4 my-2" />
        <div className="div-5 my-2" />
      </div>
    </div>
  </div>
);

export const MealsPL = () => (
  <Placeholder>
    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
);
