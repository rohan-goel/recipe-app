import React from 'react'

export default function Recipe({title,calories,img,ingredients}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Caloies : {calories}</p>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      
      <img src={img} alt=""/>
    </div>
  )
}
