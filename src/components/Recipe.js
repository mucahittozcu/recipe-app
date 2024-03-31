
"use client"
import axios from "axios"
import { useEffect, useState } from "react"


const Recipe = ({ YOURAPP_ID, YOURAPP_KEY }) => {
const [input,setInput] = useState("")
const [recipes, setRecipes] = useState([])


const handleChange = (event) => {
 setInput(event.target.value)
}

const fetchData = async () => {
    try {
        const response = await axios.get(
            `https://api.edamam.com/search?q=${input}&app_id=${YOURAPP_ID}&app_key=${YOURAPP_KEY}`
        )
        
        setRecipes(response.data.hits)
        console.log(response.data.hits)
    } catch (err) {
        console.error(`Tarif alınırken bir sorun yaşandı ${err.message}`)
    }
}

useEffect(() => {
    fetchData()
}, []) 


const handleSubmit = (e) => {
    e.preventDefault();
    fetchData() // Veriyi yeniden çağır
}






return (
    <div>
        <h1 className="header">Recipe App</h1>
        <form onSubmit={handleSubmit}>
            <input
                className="input"
                type="text"
                placeholder="Tarifler burada"
                value={input}
                onChange={handleChange}
            />
            <button type="submit" className="btn">
                Ara
            </button>
        </form>
        <div className="recipes">
            
        {recipes.map((recipe,index)=> (
            <div className="recipe" key={index} > 
                  <h2>{recipe.recipe.label} Recipe</h2>
                  <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                  <h3>{recipe.recipe.calories.toFixed(3)} kcal</h3>       
                  <ul>
                  {recipe.recipe.ingredientLines.map((ingredient, i) => (
                         <li key={i}>{ingredient}</li>
                     ))}
                  </ul>          
                
            </div>
        ))}
        </div>
    </div>
)
}
export default Recipe
