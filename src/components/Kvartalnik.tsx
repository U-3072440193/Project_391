import React from 'react';
import { cubes } from '../data/cubesData';

const Kvartalnik = () => {
  interface Cube {
    bg: string;
  }

  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/kvart-modal/top-kvart.jpg" alt="Вкладыши и наклейки" />
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
      <h2>Календари</h2>
      <div className="modal-content-text">
        <p>Разработка дизайна квартальных календарей</p>
      </div>
    </div>
  );
};

export default Kvartalnik;