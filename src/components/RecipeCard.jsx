import React from "react";

const RecipeCard = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strMealThumb } = recipe;
  return (
    <div className="card">
      <img src={strMealThumb} alt={strMeal} className="card-image" />
      <div className="card-body">
        <div className="category">
          <span>{strCategory}</span>
          <h3>{strMeal}</h3>
          <a
            href={"https://www.themealdb.com/meal/" + idMeal}
            target="_blank"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
