import React from 'react';
import { cubes } from '../data/cubesData';

const Korobka = () => {
    interface Cube {
    bg: string;
  }
  return (
    <div className="project-modal">
          <div className="top-banner-modal">
            <img src="/src/assets/korob-modal/top-korob.jpg" alt="Сложные вырубные изделия" />
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
          <h2>Коробки и сложные вырубные изделия</h2>
          <div className="modal-content-text">
            <p>Дизайн упаковки и коробок любой сложности.</p>
          </div>
        </div>

  );
};

export default Korobka;