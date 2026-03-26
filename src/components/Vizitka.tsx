import { cubes } from '../data/cubesData';

interface Cube {
  bg: string;
}

const Vizitka = () => {
  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/viz-modal/top-viz.jpg" alt="Визитки" />
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
      <h2>Визитки</h2>
      <div className="modal-content-text">
        <p>Примеры дизайна визиток</p>
      </div>
    </div>
  );
};

export default Vizitka;