import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from '../layouts/Banner';
import Meals from '../layouts/Meals';
import { getCategories, getRandomMeal } from '../../redux/actions';

const Home = ({
  getCategories,
  getRandomMeal,
  categories: catList,
  randomMeal: rMeal,
}) => {
  const [categories, setCategories] = useState([]);
  const [randomMeal, setRandomMeal] = useState({});

  useEffect(() => { getCategories(); getRandomMeal(); }, []);
  useEffect(() => { setCategories(catList); }, [catList]);
  useEffect(() => { setRandomMeal(rMeal); }, [rMeal]);

  return (
    <div>
      <Banner randomMeal={randomMeal} />
      <Meals categories={categories} />
    </div>
  );
};

Home.propTypes = {
  getRandomMeal: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  randomMeal: PropTypes.shape({}).isRequired,
};

const mapStateToProps = ({ meals: { mealsList, randomMeal }, categories }) => ({
  mealsList,
  randomMeal,
  categories,
});

const mapDispatchToProps = {
  getRandomMeal,
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
