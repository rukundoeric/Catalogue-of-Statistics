export const categories = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const randomMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
export const searchByName = name => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
export const searchByCategory = category => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
export const meal = id => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
