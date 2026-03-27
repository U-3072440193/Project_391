import React from 'react';
import { cubes } from '../data/cubesData';
import './listovki.css';

const Listovki = () => {
  interface Cube {
    bg: string;
  }
  
  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/list-modal/top-list.jpg" alt="Листовки" />
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
      
      <div className="modal-header">
        <h2>Листовки</h2>
        <div className="project-stats">
          <span className="stat-badge">+7 лет опыта</span>
          <span className="stat-badge">50+ проектов</span>
          <span className="stat-badge">С 2017 года</span>
        </div>
      </div>

      <div className="explain-block">
        <div className="explain-image">
          <img src="/src/assets/list-modal/explain-list.jpg" alt="Листовки пример" />
        </div>
        <div className="explain-text">
          <p>
            Листовка — это самый эффективный инструмент для привлечения внимания к бизнесу. 
            Лаконичный дизайн, четкая структура информации и правильная композиция помогают донести 
            ключевое сообщение до клиента за секунды. Разрабатываем листовки для любой сферы: 
            от промо-акций до презентации новых услуг.
          </p>
        </div>
      </div>

      <div className="modal-content-text">
        <div className="features-list">
          <h3>Что входит в разработку</h3>
          <ul>
            <li>Разработка 2-3 вариантов дизайна</li>
            <li>Создание продающей структуры и текстов</li>
            <li>Подбор типографики и цветового решения</li>
            <li>Подготовка макетов к печати (PDF, TIFF, CMYK)</li>
          </ul>
        </div>

        <div className="description-viz">
          <div className="mono">
            <img src="/src/assets/list-modal/iks.jpg" alt="Листовка пример" className="example-jpg" />
          </div>
          <div className="bis">
            <img src="/src/assets/list-modal/sush1.jpg" alt="Листовка пример" className="example-jpg" />
            <div className="line"></div>
            <img src="/src/assets/list-modal/sush2.jpg" alt="Листовка пример" className="example-jpg" />
          </div>
        </div>

        <div className="formats-list">
          <h3>Популярные форматы</h3>
          <div className="format-tags">
            <span>A6 (105×148 мм)</span>
            <span>A5 (148×210 мм)</span>
            <span>A4 (210×297 мм)</span>
            <span>DL (99×210 мм)</span>
            <span>Евро (98×210 мм)</span>
            <span>Квадрат (210×210 мм)</span>
          </div>
        </div>

        <div className="tech-list">
          <h3>Технологии печати</h3>
          <div className="tech-tags">
            <span>Цифровая печать</span>
            <span>Офсетная печать</span>
            <span>УФ-лак</span>
            <span>Ламинация</span>
            <span>Выборочный лак</span>
            <span>Биговка</span>
          </div>
        </div>

        <div className="paper-list">
          <h3>Бумага</h3>
          <div className="paper-tags">
            <span>Мелованная 130-300 г/м²</span>
            <span>Дизайнерская бумага</span>
            <span>Крафт</span>
            <span>Офсетная</span>
          </div>
        </div>
        <div className="process-block">
<div className="process-visual">

  <div className="process-images">
    <img src="/src/assets/list-modal/sush1.jpg" className="example-jpg" />
    <div className="connector"></div>
    <img src="/src/assets/list-modal/sush2.jpg" className="example-jpg" />
  </div>

  <div className="vertical-line"></div>

  <div className="process-result">
    <img src="/src/assets/list-modal/iks.jpg" className="example-jpg" />
  </div>
  

</div>



</div>
      </div>
    </div>
  );
};

export default Listovki;