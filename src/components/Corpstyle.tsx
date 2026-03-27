import React from 'react';
import { cubes } from '../data/cubesData';

const Corpstyle = () => {
    interface Cube {
    bg: string;
  }
  return (
    <div className="project-modal">
          <div className="top-banner-modal">
            <img src="/src/assets/corp-modal/top-corp.jpg" alt="Корпоративный стиль" />
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
          <h2>Афиши и постеры</h2>
          <div className="modal-content-text">
            <p>Дизайн афиш и постеров</p>
          </div>
        </div>

  );
};

export default Corpstyle;