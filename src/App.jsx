import { useEffect, useState } from "react"
import Count from "./components/Count"
import Coverphoto from "./components/Coverphoto"
import Navbar from "./components/Navbar"
import Recipes from "./components/Recipes"
import { data } from "autoprefixer"


// export const totalCount = 0;


function App() {
  const [recipes, setRecipes] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch ('recipes.json')
    .then ( res => res.json())
    .then ( data => setRecipes(data))
  }, [])

  const handleCount = (recipe) => {
    const isAdded = count.find(count => count.id === recipe.id);
    // console.log(isAdded);
    if(isAdded) return;
    // console.log(recipe);
    setCount([...count, recipe]);
  }


  return (
    <>
      <Navbar></Navbar>
      <Coverphoto></Coverphoto>
      <div className="recipe-container flex gap-5 max-w-7xl mx-auto">
        <Recipes recipes = {recipes} handleCount = {handleCount}></Recipes>
        <Count count = {count}></Count>
      </div>
    </>
  )
}

export default App
