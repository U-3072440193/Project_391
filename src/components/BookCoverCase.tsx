import React from 'react';
import './modal.css';

const BookCoverCase = () => {
  return (
    <div className="project-modal">

      {/* HERO */}
      <div className="modal-hero">
        <div className="modal-hero-bg">
          <img src="/src/assets/book-modal/top-knig.jpg" alt="Октавиан обложка" />
          <div className="modal-hero-overlay"></div>
        </div>

        <div className="modal-hero-content">
          <div className="modal-badge">КОНЦЕПТ</div>

          <h1 className="modal-hero-title">
            Октавиан<br />
            <span className="accent">У истоков империи</span>
          </h1>

          <p className="modal-hero-subtitle">
            Дизайн обложки для научно-популярного издания об истории Рима
          </p>

          <div className="project-stats">
            <span className="stat-badge">Концепт</span>
            <span className="stat-badge">Книжная обложка</span>
            <span className="stat-badge">Типографика</span>
          </div>
        </div>
      </div>

      <div className="inner-proj-modal">

        {/* INFO */}
        <div className="modal-info-grid">
          <div className="info-card">
            <div className="info-icon"><img src="/icons/book.svg" alt="Формат" /></div>
            <h3>Формат</h3>
            <p>Научно-популярное издание</p>
          </div>

          <div className="info-card">
            <div className="info-icon"><img src="/icons/idea.svg" alt="Идея" /></div>
            <h3>Идея</h3>
            <p>Власть, порядок и становление империи</p>
          </div>

          <div className="info-card">
            <div className="info-icon"><img src="/icons/detail.svg" alt="Акцент" /></div>
            <h3>Акцент</h3>
            <p>Контрастная типографика и классический образ</p>
          </div>
        </div>

        {/* PROCESS */}
        <div className="modal-section">
          <div className="modal-section-header">
            <h2>Процесс работы</h2>
            <div className="section-line"></div>
          </div>

          <div className="process-steps">

            {/* 1 КОНТЕКСТ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <img src="/src/assets/case/book-example.jpg" alt="Контекст" />
              </div>

              <div className="process-step-content">
                <h3>Контекст</h3>
                <p className="process-step-description">
                  Обложки исторических книг часто перегружены деталями.
                </p>
                <div className="process-step-details">
                  <p>
                    Большинство изданий используют иллюстрации баталий,
                    сложные композиции и устаревшую типографику, что снижает
                    читаемость и визуальную актуальность.
                  </p>
                </div>
                <p className="process-step-description">
                  Визуал не передаёт масштаб и характер темы.
                </p>
                <div className="process-step-details">
                  <p>
                    Сложные изображения и слабая иерархия делают книгу
                    менее заметной и ухудшают восприятие на полке.
                  </p>
                </div>
              </div>
            </div>



            {/* 3 ЗАДАЧА */}
            <div className="process-step no-image full-width-bg">
              <div className="process-step-content full">
                <h3>Задача</h3>

                <div className="keywords">
                  <span>читаемость</span>
                  <span>иерархия</span>
                  <span>характер</span>
                  <span>актуальность</span>
                </div>

                <div className="process-step-details">
                  <p>
                    Создать обложку, которая будет визуально строгой,
                    современной и при этом отражать историческую глубину темы.
                  </p>
                </div>
              </div>
            </div>

            {/* 4 ИДЕЯ */}
            <div className="process-step idea-step">

              {/* Общий контейнер */}
              <div className="idea-wrapper">



                {/* Контейнер с картинками 2×2 */}
                <div className="idea-visual-container">
                  <div className="idea-grid-2x2">
                    <div className="grid-item">
                      <img src="/src/assets/case/book-idea1.jpg" alt="Идея 1" />
                    </div>
                    <div className="grid-item">
                      <img src="/src/assets/case/book-idea2.jpg" alt="Идея 2" />
                    </div>
                    <div className="grid-item">
                      <img src="/src/assets/case/book-idea3.jpg" alt="Идея 3" />
                    </div>
                    <div className="grid-item">
                      <img src="/src/assets/case/book-idea4.jpg" alt="Идея 4" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="process-step-content">
                <h3>Идея</h3>
                <p className="process-step-description">
                  Октавиан как символ власти.
                </p>
                <div className="process-step-details">
                  <p>
                    Центральный образ — скульптура, отсылающая к классике и
                    авторитету. Минимализм усиливает ощущение контроля и порядка.
                  </p>
                </div>
              </div>
            </div>

            {/* 5 ВИЗУАЛ */}
            {/* 5 ТИПОГРАФИКА */}
            <div className="process-step">
              <div className="idea-wrapper">



                {/* Контейнер с картинками 2×2 */}
                <div className="idea-visual-container">
                  <div className="idea-grid-2x2">
                    <div className="grid-item">
                      <img src="/src/assets/case/book-var1.jpg" alt="Идея 1" />
                    </div>
                    <div className="grid-item">
                      <img src="/src/assets/case/book-var2.jpg" alt="Идея 2" />
                    </div>
                    <div className="grid-item">
                      <img src="/src/assets/case/book-var3.jpg" alt="Идея 3" />
                    </div>
                    <div className="grid-item">
                      <img src="/src/assets/case/book-var4.jpg" alt="Идея 4" />
                    </div>
                  </div>
                </div>

              </div>


              <div className="process-step-content">
                <h3>Типографика</h3>
                <p className="process-step-description">
                  Поиск композиции и иерархии.
                </p>
                <div className="process-step-details">
                  <p>
                    Исследованы различные варианты расположения текста и взаимодействия
                    с изображением. Финальный вариант выбран на основе баланса,
                    читаемости и выразительности.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 МАТЕРИАЛЬНОСТЬ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <img src="/src/assets/case/book-material.png" alt="Материальность" />
              </div>

              <div className="process-step-content">
                <h3>Материальность</h3>
                <p className="process-step-description">
                  Тактильность и премиальность.
                </p>
                <div className="process-step-details">
                  <p>
                    Тёмный фон и контрастная типографика формируют выразительный визуал.
                    Обложка сохраняет читаемость и характер при печати в стандартных условиях.
                  </p>
                </div>
              </div>
            </div>

            {/* 7 НОСИТЕЛИ */}
            <div className="process-step">
              <div className="process-step-image mockup-grid">
                <div className="mockup-grid-container">
                  <div className="mockup-row">
                    <div className="mockup-item"><img src="/src/assets/case/book-face.jpg" alt="Книга" /></div>
                    <div className="mockup-item"><img src="/src/assets/case/book-back.jpg" alt="Книга" /></div>
                  </div>

                  <div className="mockup-row full">
                    <div className="mockup-item full-width"><img src="/src/assets/case/book-open.jpg" alt="Композиция" /></div>
                  </div>
                </div>
              </div>

              <div className="process-step-content">
                <h3>Издание</h3>
                <p className="process-step-description">
                  Обложка как часть цельного продукта.
                </p>
                <div className="process-step-details">
                  <p>
                    Дизайн адаптирован под физическое издание: лицевая часть,
                    корешок и задняя сторона формируют единый визуальный образ.
                  </p>
                </div>
              </div>
            </div>

            {/* 8 РЕЗУЛЬТАТ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <div className="mockup-item-final">
                  <img src="/src/assets/case/final.jpg" alt="Финал" />
                </div>
              </div>

              <div className="process-step-content">
                <h3>Результат</h3>
                <p className="process-step-description">
                  Сдержанный и выразительный визуал.
                </p>
                <div className="process-step-details">
                  <p>
                    Обложка выделяется за счёт минимализма и типографики,
                    передаёт характер темы и выглядит актуально в книжной среде.
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

export default BookCoverCase;