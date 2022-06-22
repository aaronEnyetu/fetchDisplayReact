
import React from 'react';
import Plants from './Plants';


export default function PlantsList({
    //plants has a default value of []
  plants = [],
}) {
  return (
    <div className='plants-list'>
      {
        plants.map((plant, i) => {
          return <Plants
            {...plant}


            key={plant.name + i + plant.id} />;
        })
      }
    </div>
  );
}