import React from 'react';
import { cubes } from '../data/cubesData';

const Vkladysh = () => {
  
interface Cube {
  bg: string;
}

  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/vklad-modal/top-vkl.jpg" alt="Вкладыши и наклейки" />
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
      <h2>Вкладыши и наклейки</h2>
      <div className="modal-content-text">
        <p>Примеры дизайна вкладышей и наклеек</p>
      </div>
    </div>
  );
};

export default Vkladysh;