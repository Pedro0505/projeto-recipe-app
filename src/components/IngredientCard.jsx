import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import styles from '../styles/IngredientCard.module.css';

const IngredientCard = ({ meal, index, name, type, img, ingredientId }) => {
  const { handleMeals, handleDrinks, handleIngredient } = useContext(RecipeContext);
  const { location: { pathname } } = useHistory();

  function ingredientsFilter(mealName) {
    handleIngredient(true);
    if (pathname.includes('comidas')) handleMeals('INGREDIENT', mealName);
    handleDrinks('INGREDIENT', mealName);
  }

  return (
    <Link
      to={ `/${type}` }
      onClick={ () => ingredientsFilter(meal[name]) }
      data-testid={ ingredientId }
    >
      <img
        data-testid={ `${index}-card-img` }
        src={ `https://www.${img}db.com/images/ingredients/${meal[name]}-Small.png` }
        alt="Ingredient Pic"
        className={ styles.imageIngredient }
      />
      <h1
        data-testid={ `${index}-card-name` }
        className={ styles.title }
      >
        {meal[name]}
      </h1>
    </Link>
  );
};

IngredientCard.propTypes = {
  meal: PropTypes.objectOf(PropTypes.string).isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  ingredientId: PropTypes.string.isRequired,
};

export default IngredientCard;
