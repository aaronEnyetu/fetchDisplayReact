import React from 'react';


export default function FarmersList({ farmers }) {
  return (
    <div className='farmers-list'>
      {
        farmers.map((farmer, i) => <div className='farmer' key={farmer.name + farmer.id + i}>
          <p>Farmer Name:{farmer.name}</p>
          <p>List of crops</p>
          <ul>{farmer.crops.map((crops, i) => <li key={crops + i}> {crops}</li>)}</ul>
          <p>Region:{farmer.region}</p>
          <ul>{farmer.technique.map((technique, i) => <li key={technique + i}> {technique}</li>)}</ul>
        </div>)
                    
            
      }
    </div>

  );


}

