import React from 'react'
import {recipeData} from './data'
import './recipe.css'

function Recipe(){
    return (
        <div>
            {recipeData.map((recipe) => {
                return (
                    <div key={recipe.id}>
                <h5>{recipe.recipe_name}</h5>
            <ul>{recipe.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
                
            })};
            </ul>
            <img
            src={recipe.img}
            alt ={recipe.recipe_name}
            className="recipe-image"
            />
            </div>
             )
        })}
        </div>
    );
}

export default Recipe;