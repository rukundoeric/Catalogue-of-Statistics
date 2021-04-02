import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from '../layouts/Banner';
import Meals from '../layouts/Meals';
import MealInfo from '../layouts/MealInfo';
import { getCategories, getRandomMeal, getMeals } from '../../redux/actions';

const Home = ({
  getCategories,
  getRandomMeal,
  getMeals,
  categories: catList,
  randomMeal: rMeal,
  mealsList: mList,
}) => {
  const [categories, setCategories] = useState([]);
  const [randomMeal, setRandomMeal] = useState(undefined);
  const [mealsList, setMealsList] = useState([]);

  useEffect(() => { getCategories(); getRandomMeal(); getMeals(); }, []);
  useEffect(() => { setCategories(catList); }, [catList]);
  useEffect(() => { setRandomMeal(rMeal); }, [rMeal]);
  useEffect(() => { setMealsList(mList); }, [mList]);

  return (
    <div>
      <Banner randomMeal={randomMeal} />
      <MealInfo meal={randomMeal} />
      <Meals categories={categories} mealsList={mealsList} />
    </div>
  );
};

Home.propTypes = {
  getRandomMeal: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  getMeals: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  randomMeal: PropTypes.shape({}).isRequired,
  mealsList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = ({ meals: { mealsList, randomMeal }, categories }) => ({
  mealsList,
  randomMeal,
  categories,
});

const mapDispatchToProps = {
  getRandomMeal,
  getCategories,
  getMeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
