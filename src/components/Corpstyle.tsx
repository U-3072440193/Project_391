import React from 'react';

const Corpstyle = () => {
  return (
    <div className="project-modal">
      <h2>Корпоративный стиль</h2>
      <div className="modal-content">
        <p>Примеры разработки корпоративного стиля:</p>
        <div className="project-images">
          <img src="/src/assets/products/corp-style.png" alt="Корпоративный стиль 1" />
          <img src="/src/assets/products/indom-cup.png" alt="Корпоративный стиль 2" />
          <img src="/src/assets/products/baige.jpg" alt="Корпоративный стиль 3" />
          <img src="/src/assets/products/ezhednev.jpg" alt="Корпоративный стиль 4" />
          <img src="/src/assets/products/brel.jpg" alt="Корпоративный стиль 5" />
        </div>
        <p>Полный комплекс работ по созданию корпоративного стиля: логотип, фирменные цвета, брендбук, сувенирная продукция.</p>
      </div>
    </div>
  );
};

export default Corpstyle;