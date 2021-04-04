import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Banner from '../layouts/Banner';
import Meals from '../layouts/Meals';

import {
  getCategories, getRandomMeal, getMeals,
} from '../../redux/actions';

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
  const [cCategory, setcCategory] = useState('');
  const history = useHistory();

  useEffect(() => { getCategories(); getRandomMeal(); getMeals(); }, []);
  useEffect(() => { setCategories(catList); }, [catList]);
  useEffect(() => { setRandomMeal(rMeal); }, [rMeal]);
  useEffect(() => { setMealsList(mList); }, [mList]);

  const handleSearch = ({ target: { value } }) => {
    const params = new URLSearchParams();
    params.append('name', value);
    if (value === '') { params.delete('name'); }
    history.push({ search: params.toString() });
    getMeals(value);
  };
  const handleFilterCategory = ({ target: { value } }) => {
    const params = new URLSearchParams();
    params.append('category', value);
    if (value === 'Select category') { params.delete('category'); }
    history.push({ search: params.toString() });
    setcCategory(value);
    getMeals(value);
  };

  return (
    <div className="home">
      <Banner randomMeal={randomMeal} />
      <Meals
        handleSearch={handleSearch}
        handleFilterCategory={handleFilterCategory}
        categories={categories}
        mealsList={mealsList}
        cCategory={cCategory}
      />
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
