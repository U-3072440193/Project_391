import React from 'react';
import "./corpstyle.css";

const CorpStyle = () => {
  return (
    <section className="corpstyle-section">
      <div className="corpstyle-container">
        <div className="corpstyle-image">
          <img src="/src/assets/corp-modal/corp.jpg" alt="Корпоративный стиль" />
          <div className="corpstyle-overlay">
            <div className="corpstyle-content">
              <h2>Корпоративный стиль</h2>
              <p>Разработка фирменного стиля, логотипов, брендбуков</p>
              <button className="corpstyle-btn">Посмотреть проекты</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorpStyle;