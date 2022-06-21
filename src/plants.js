import React from 'react';

export default function Plants({ name, order, family, genus, species, color }) {
  return (
    <div className="plant" style={{ background: color }}>
      <p>{name}</p>
      <p>{order}</p>
      <p>{family}</p>
      <p>{genus}</p>
      <p>{species}</p>
    </div>
  );

}
