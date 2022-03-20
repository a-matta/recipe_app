import { useEffect, useState } from "react";
import "./App.css";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

const API = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(API + query);
      const jsonData = await res.json();
      setRecipes(jsonData.meals);
    } catch (error) {
      console.log("Error,try again");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  return (
    <div className="container">
      <h2>Recipe App</h2>
      <div className="recipes">
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard key={recipe.idMeal} recipe={recipe} />
            ))
          : "No Recipes!"}
      </div>
    </div>
  );
}
export default App;
