import React from 'react';
import './components/modal.css';

const Shishka = () => {
  return (
    <div className="project-modal">

      {/* HERO */}
      <div className="modal-hero">
        <div className="modal-hero-bg">
          <img src="/src/assets/shishka/top-shishka.jpg" alt="Шишка" />
          <div className="modal-hero-overlay"></div>
        </div>

        <div className="modal-hero-content">
          <div className="modal-badge">ВЕБ-РАЗРАБОТКА</div>

          <h1 className="modal-hero-title">
            Шишка<br />
            <span className="accent">Сайт для сети кофеен</span>
          </h1>

          <p className="modal-hero-subtitle">
            Современный сайт с акцентом на атмосферу и уют
          </p>

          <div className="project-stats">
            <span className="stat-badge">Адаптивный дизайн</span>
            <span className="stat-badge">Анимация</span>
            <span className="stat-badge">Интерактив</span>
          </div>
        </div>
      </div>

      <div className="inner-proj-modal">

        {/* INFO */}
        <div className="modal-info-grid">
          <div className="info-card">
            <div className="info-icon"><img src="/icons/web.svg" alt="Проект" /></div>
            <h3>Проект</h3>
            <p>Сайт для сети кофеен «Шишка»</p>
          </div>

          <div className="info-card">
            <div className="info-icon"><img src="/icons/tech.svg" alt="Технологии" /></div>
            <h3>Технологии</h3>
            <p>React, TypeScript, Framer Motion</p>
          </div>

          <div className="info-card">
            <div className="info-icon"><img src="/icons/feature.svg" alt="Особенность" /></div>
            <h3>Особенность</h3>
            <p>Плавные анимации и атмосферный дизайн</p>
          </div>
        </div>

        {/* PROCESS */}
        <div className="modal-section">
          <div className="modal-section-header">
            <h2>О проекте</h2>
            <div className="section-line"></div>
          </div>

          <div className="process-steps">

            {/* ЗАДАЧА */}
            <div className="process-step no-image">
              <div className="process-step-content full">
                <h3>Задача</h3>
                <div className="keywords">
                  <span>атмосфера</span>
                  <span>уют</span>
                  <span>современность</span>
                  <span>интерактив</span>
                </div>
                <div className="process-step-details">
                  <p>
                    Создать современный, адаптивный сайт для сети кофеен, который
                    передаёт атмосферу уюта и привлекает посетителей.
                  </p>
                </div>
              </div>
            </div>

            {/* РЕШЕНИЕ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <div className="placeholder-gif">
                  <img src="/src/assets/shishka/preview.gif" alt="Превью сайта" />
                </div>
              </div>
              <div className="process-step-content">
                <h3>Решение</h3>
                <p className="process-step-description">
                  Атмосферный дизайн с плавными анимациями
                </p>
                <div className="process-step-details">
                  <p>
                    Разработан дизайн с тёплой цветовой гаммой, плавными переходами
                    и интерактивными элементами. Особое внимание уделено
                    мобильной версии и скорости загрузки.
                  </p>
                </div>
              </div>
            </div>

            {/* РЕЗУЛЬТАТ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <img src="/src/assets/shishka/mockup.jpg" alt="Мокап" />
              </div>
              <div className="process-step-content">
                <h3>Результат</h3>
                <p className="process-step-description">
                  Современный сайт, готовый к запуску
                </p>
                <div className="process-step-details">
                  <p>
                    Сайт полностью адаптивен, имеет интуитивную навигацию
                    и передаёт уникальную атмосферу заведения.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Shishka;