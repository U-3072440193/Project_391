import React from 'react';
import { cubes } from '../data/cubesData';

const Listovki = () => {
  interface Cube {
    bg: string;
  }
  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/list-modal/top-list.jpg" alt="Вкладыши и наклейки" />
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
      <h2>Листовки</h2>
      <div className="modal-content-text">
        <p>Примеры дизайна листовок</p>
      </div>
    </div>
  );
};

export default Listovki;