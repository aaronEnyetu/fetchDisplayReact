import React from 'react';

export default function Plants({ name, order, family, genus, species, color }) {
  return (
    <div className="plant" style={{ background: color }}>
      <p>Plant Name:{name}</p>
      <p>Plant Order:{order}</p>
      <p>Plant Family:{family}</p>
      <p>Plant Genus:{genus}</p>
      <p>Plant Species:{species}</p>
    </div>
  );

}
//testing plants 