import React from 'react';
import { cubes } from '../data/cubesData';

const Katalogs = () => {
  interface Cube {
    bg: string;
  }
  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/katal-modal/top-katal.jpg" alt="Лифлеты и простые буклеты" />
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
      <h2>Каталоги</h2>
      <div className="modal-content-text">
        <p>Разработка дизайна</p>
      </div>
    </div>
  );
};

export default Katalogs;