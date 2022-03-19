import "./App.css";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";

const API = " https://www.themealdb.com/api/json/v1/1/search.php?s=";
function App() {
  return (
    <div className="container">
      <h2>Recipe App</h2>
      <SearchBar />
      <RecipeCard />
    </div>
  );
}

export default App;
