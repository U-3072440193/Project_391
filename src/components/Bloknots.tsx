import React from 'react';
import { cubes } from '../data/cubesData';

const Bloknots = () => {
  interface Cube {
    bg: string;
  }
  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/blokn-modal/top-blokn.jpg" alt="Вкладыши и наклейки" />
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
      <h2>Блокноты</h2>
      <div className="modal-content-text">
        <p>Примеры дизайна обложек и внутреннего оформления блокнотов</p>
      </div>
    </div>
  );
};

export default Bloknots;