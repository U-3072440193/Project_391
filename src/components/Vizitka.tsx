import React from 'react';
import { cubes } from '../data/cubesData';
import './vizitka.css';

const Vizitka = () => {
  interface Cube {
    bg: string;
  }

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

      <div className="modal-header">
        <h2>Визитки</h2>
        <div className="project-stats">
          <span className="stat-badge">+7 лет опыта</span>
          <span className="stat-badge">50+ проектов</span>
          <span className="stat-badge">С 2017 года</span>
        </div>
      </div>

      <div className="explain-block">
        <div className="explain-image">
          <img src="/src/assets/viz-modal/explain.png" alt="Визитки пример" />
        </div>
        <div className="explain-text">
          <p>
            Визитная карточка выделит вас среди конкурентов и сформирует первое впечатление о компании.
            Индивидуальный подход к каждому клиенту, учет специфики бизнеса и пожеланий заказчика.
          </p>
        </div>
      </div>

      <div className="modal-content-text">
        <div className="features-list">
          <h3>Что входит в разработку</h3>
          <ul>
            <li>Индивидуальный подход, учет специфики бизнеса и пожеланий заказчика</li>
            <li>Разработка 2-3 концепций дизайна</li>
            <li>Выбор материалов и технологий печати</li>
            <li>Подготовка макетов к печати</li>
            <li>Сопровождение печатного процесса</li>
          </ul>
        </div>
        <div className="description-viz">
          <div className="mono">
            <img src="/src/assets/viz-modal/checkpoint.jpg" alt="Визитки пример" className='example-jpg' />
          </div>

          <div className="bis">
            <img src="/src/assets/viz-modal/pulse1.jpg" alt="Визитки пример" className='example-jpg' />
            <div className="line"></div>
            <img src="/src/assets/viz-modal/pulse2.jpg" alt="Визитки пример" className='example-jpg' />
          </div>
        </div>
        <div className="description-viz">
          <div className="bis">
            <img src="/src/assets/viz-modal/adv2.jpg" alt="Визитки пример" className='example-jpg' />
            <div className="line"></div>
            <img src="/src/assets/viz-modal/adv1.jpg" alt="Визитки пример" className='example-jpg' />
          </div>
          <div className="mono">
            <img src="/src/assets/viz-modal/shveika.jpg" alt="Визитки пример" className='example-jpg' />
          </div>
        </div>
        <div className="description-viz">
          <div className="mono">
            <img src="/src/assets/viz-modal/italwax.jpg" alt="Визитки пример" className='example-jpg' />
          </div>

          <div className="bis">
            <img src="/src/assets/viz-modal/37zap2.jpg" alt="Визитки пример" className='example-jpg' />
            <div className="line"></div>
            <img src="/src/assets/viz-modal/37zap1.jpg" alt="Визитки пример" className='example-jpg' />
          </div>
        </div>
        <div className="description-viz">
          <div className="mono">
            <img src="/src/assets/viz-modal/toch.jpg" alt="Визитки пример" className='example-jpg' />
          </div>
          <div className="bis">
            <img src="/src/assets/viz-modal/ult1.jpg" alt="Визитки пример" className='example-jpg' />
            <div className="line"></div>
            <img src="/src/assets/viz-modal/ult2.jpg" alt="Визитки пример" className='example-jpg' />
          </div>
        </div>
        

        <div className="tech-list">
          <h3>Технологии печати</h3>
          <div className="tech-tags">
            <span>Цифровая печать</span>
            <span>Офсетная печать</span>
            <span>Тиснение</span>
            <span>Фольгирование</span>
            <span>УФ-лак</span>
            <span>Конгрев</span>
            <span>Выборочный лак</span>
          </div>
        </div>

        <div className="materials-list">
          <h3>Материалы</h3>
          <div className="material-tags">
            <span>Дизайнерский картон</span>
            <span>Мелованная бумага</span>
            <span>Льняная бумага</span>
            <span>Пластик</span>
            <span>Эко-бумага</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vizitka;