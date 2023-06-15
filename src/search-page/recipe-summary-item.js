import React from 'react'
import './recipe-summary-item.css';
import { Link } from 'react-router-dom';

const RecipeSummaryItem = (
  {
    recipe = {
      "id": 1,
      "topic": "Rosemary Foccia",
      "tags": ["bread", "italian"],
      "directions": ["1...", "2...", "3..."],
      "image": "rosemary_foccacia.jpeg",
      "ingredients": ["flour", "oil", "rosemary", "sugar", "salt", "yeast"],
      "difficulty": 4,
      "rating": 7,
      "prep_time": 5,
      "cook_time": 40,
      "serving": "7-10"

    }
  }
) => {
  return (
      <li className="list-group-item border wd-recipe-summary">
            <Link className='wd-recipe-link' to={`/details/${recipe.id}`} >

        <div className="row align-items-center">
          <div className="col-10">
            <div className="fw-bolder container fs-5">{recipe.title}</div>

          </div>
          <div className="col-2">
            <img height={100} width={80} className="float-end rounded-3" src={recipe.image} alt="" />
          </div>
        </div>
        </Link>
      </li>
  )
}

export default RecipeSummaryItem