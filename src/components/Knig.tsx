import React from 'react';
import { cubes } from '../data/cubesData';

const Knig = () => {
  interface Cube {
    bg: string;
  }
  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/knig-modal/top-knig.jpg" alt="Прочая многостраничная продукция" />
        <div className="grid-overlay">
          {cubes.map((cube: Cube, index: number) => (
            <div
              key={index}
              className="grid-cell"
              style={{ background: cube.bg }}
            />
          ))}
        </div>
      </div>
      <h2>Прочая многостраничная продукция</h2>
      <div className="modal-content-text">
        <p>Разработка дизайна</p>
      </div>
    </div>
  );
};

export default Knig;