import React from 'react';
import styles from '../styles/CocktailCard.module.css';

const CocktailCard = ({ cocktail }) => {
  const img = <img className={styles.Image} src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />;

  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={styles.CocktailCard}>
      <div className={styles.CocktailImg}>{img}</div>
      <div className={styles.CocktailInfo}>
        <h3 className={styles.CocktailName}>{cocktail.strDrink}</h3>
        <div className={styles.Instructions}>{cocktail.strInstructions.substring(0, 50)}...</div>
        <div className={styles.Ingredients}>
          {nums.map((num) => {
            const ingredient = cocktail[`strIngredient${num}`];
            return ingredient ? <span key={num} className={styles.Ingredient}>{ingredient}</span> : null;
          })}
        </div>
        <div className={styles.Category}>Category: {cocktail.strCategory}</div>
      </div>
    </div>
  );
};

export default CocktailCard;