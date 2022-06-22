import React from 'react';

export default function FoodsList({ foods = [] }) {
  return (
    <div className='foods-list'>
      {
        foods.map((food, i) => <div className='food' key={food.name + food.id + i}>
          <h2>{food.name}</h2>
          <p>List of Nutrients</p>
          <ul>{food.nutrients.map((nutrient, i) => <li key={nutrient + i}> {nutrient}</li>)}</ul>
        </div>)
      }
    </div>
  );
}
