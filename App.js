import React, {useState, useEffect} from 'react'
import Recipe from './Recipe'
import './index.css'
export default function App() {

  const APP_ID = '';
  const APP_KEY = '';

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")


  useEffect(() => {
    const getrecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json();
      setRecipe(data.hits)
      console.log(data.hits)
    }
    getrecipes();
  }, [query])

  const updatesearch = e => {
    setSearch(e.target.value);
  }

  const getsearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className='App'>
      <form onSubmit={getsearch} className="search-form">
        <input type="text" className="search-bar" value={search} onChange={updatesearch} />
        <button className="search-button">Search </button>
      </form>
      <div className="recipes">
      {recipe.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          img={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
        />
      ))}
     </div>
    </div>
  )
}

