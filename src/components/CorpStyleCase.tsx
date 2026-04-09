import React from 'react';
import './modal.css';

const CorpStyleCase = () => {
  return (
    <div className="project-modal">

      {/* HERO */}
      <div className="modal-hero">
        <div className="modal-hero-bg">
          <img src="/src/assets/corp-modal/top-corp.jpg" alt="inDom ребрендинг" />
          <div className="modal-hero-overlay"></div>
        </div>

        <div className="modal-hero-content">
          <div className="modal-badge">КОНЦЕПТ</div>

          <h1 className="modal-hero-title">
            neoДom<br />
            <span className="accent">Брендинг агентства недвижимости</span>
          </h1>

          <p className="modal-hero-subtitle">
            Минималистичный визуальный язык для выхода на новый уровень
          </p>

          <div className="project-stats">
            <span className="stat-badge">Концептуальный проект</span>
            <span className="stat-badge">Айдентика</span>
            <span className="stat-badge">Системный дизайн</span>
          </div>
        </div>
      </div>

      <div className="inner-proj-modal">

        {/* INFO */}
        <div className="modal-info-grid">
          <div className="info-card">
            <div className="info-icon"><img src="/icons/project.svg" alt="Проект" /></div>
            <h3>Проект</h3>
            <p>Концептуальный брендинг агентства недвижимости неоДом</p>
          </div>

          <div className="info-card">
            <div className="info-icon"><img src="/icons/concept.svg" alt="Концепция" /></div>
            <h3>Концепция</h3>
            <p>Минимализм и масштабируемость</p>
          </div>

          <div className="info-card">
            <div className="info-icon"><img src="/icons/uniq.svg" alt="Особенность" /></div>
            <h3>Особенность</h3>
            <p>Абстрактный визуальный язык + модульная система</p>
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
                <img src="/src/assets/corp-modal/neodom-problem2.gif" alt="Контекст рынка" />
              </div>

              <div className="process-step-content">
                <h3>Контекст</h3>
                <p className="process-step-description">
                  Рынок недвижимости перегружен однотипными визуальными решениями.
                </p>
                <div className="process-step-details">
                  <p>
                    Большинство агентств используют предсказуемые приёмы: синий цвет,
                    иконки домов и перегруженные макеты. Бренды визуально сливаются.
                  </p>
                </div>
              </div>
            </div>

            {/* 2 ПРОБЛЕМА */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <img src="/src/assets/case/example-neodom.jpg" alt="Пример" />
              </div>

              <div className="process-step-content">
                <h3>Проблема</h3>
                <p className="process-step-description">
                  Визуальный язык не отражает современный подход.
                </p>
                <div className="process-step-details">
                  <p>
                    Устаревший визуал формирует ощущение устаревшего бренда.
                    Нет структуры, нет характера, нет доверия.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 ЗАДАЧА */}
            <div className="process-step no-image full-width-bg">
              <div className="process-step-content full">
                <h3>Задача</h3>

                <div className="keywords">
                  <span>выделиться</span>
                  <span>система</span>
                  <span>масштабируемость</span>
                  <span>доверие</span>
                </div>

                <div className="process-step-details">
                  <p>
                    Создать визуальную систему, которая будет работать на разных носителях
                    и формировать цельный образ бренда.
                  </p>
                </div>
              </div>
            </div>

{/* 4 ИДЕЯ */}
<div className="process-step idea-step">
  
  {/* Общий контейнер 70% */}
  <div className="idea-wrapper">
    
    {/* Контейнер с текстом (сверху) */}
    <div className="idea-text-container">
      <div className="idea-text-grid">
        {/* Текст для столбика 1 */}
        <div className="idea-text-column">
          <div className="idea-label">
            <p>Первичные решения опирались на прямые ассоциации с недвижимостью, но выглядели клишированно и не формировали уникальный образ бренда.</p>
          </div>
        </div>

        {/* Текст для столбика 2 */}
        <div className="idea-text-column">
          <div className="idea-label">
            <p>Переход к более минималистичному визуальному языку позволил улучшить читаемость, но решения всё ещё не имели характерной идеи.</p>
          </div>
        </div>

        {/* Текст для столбика 3 */}
        <div className="idea-text-column">
          <div className="idea-label">
            <p>В финальной концепции появился абстрактный символ — треугольник, который одновременно отсылает к форме крыши и создаёт устойчивый, современный знак.</p>
          </div>
        </div>

        {/* Текст для столбика 4 */}
        <div className="idea-text-column">
          <div className="idea-label">
            <p>neo Dom</p>
          </div>
        </div>
      </div>
    </div>

    {/* Контейнер с картинками (снизу) */}
    <div className="idea-visual-container">
      <div className="idea-visual-grid">
        {/* Столбик 1 - 4 картинки */}
        <div className="idea-column">
          <div className="idea-images vertical-4">
            <img src="/src/assets/case/exam2-3.jpg" alt="Идея 1" />
            <img src="/src/assets/case/exam2-4.jpg" alt="Идея 2" />
            <img src="/src/assets/case/exam2-2.jpg" alt="Идея 3" />
            <img src="/src/assets/case/exam2-1.jpg" alt="Идея 4" />
          </div>
        </div>

        {/* Столбик 2 - 3 картинки */}
        <div className="idea-column">
          <div className="idea-images vertical-3">
            <img src="/src/assets/case/exam2-5.jpg" alt="Идея 1" />
            <img src="/src/assets/case/exam2-6.jpg" alt="Идея 2" />
            <img src="/src/assets/case/exam2-7.jpg" alt="Идея 3" />
          </div>
        </div>

        {/* Столбик 3 - 2 картинки */}
        <div className="idea-column">
          <div className="idea-images vertical-2">
            <img src="/src/assets/case/exam2-9.jpg" alt="Идея 1" />
            <img src="/src/assets/case/exam2-8.jpg" alt="Идея 2" />
          </div>
        </div>

        {/* Столбик 4 - 1 картинка */}
        <div className="idea-column">
          <div className="idea-images vertical-1">
            <img src="/src/assets/case/exam2-10.jpg" alt="Идея 1" />
          </div>
        </div>
      </div>
    </div>

  </div>

  <div className="process-step-content">
    <h3>Идея</h3>
    <p className="process-step-description">
      Недвижимость как структура.
    </p>
    <div className="process-step-details">
      <p>
        Отказ от буквальных образов в пользу геометрии, модульности и повторения.
        В логотипе используется угол 60°, формирующий узнаваемый знак.
        В прикладной графике угол адаптирован до 90° и 120° для повышения читаемости и удобства масштабирования.
      </p>
    </div>
  </div>
</div>


            {/* 5 ВИЗУАЛ */}
            <div className="process-step">
              {/* БЛОК С ЦВЕТАМИ, ШРИФТАМИ И ЭЛЕМЕНТАМИ */}
              <div className="color-fonts-section">

                {/* Левая колонка - кубики цветов с описанием */}
                <div className="colors-list">
                  {/* Цвет 1 */}
                  <div className="color-row">
                    <div className="color-cube dark"></div>
                    <div className="color-description">
                      <div className="color-name">Фон</div>
                      <div className="color-name">Заголовки</div>
                      <div className="color-name">Основной текст</div>

                    </div>
                  </div>

                  {/* Цвет 2 */}
                  <div className="color-row">
                    <div className="color-cube accent"></div>
                    <div className="color-description">
                      <div className="color-name">Акцент</div>
                      <div className="color-name">Иконки</div>
                      <div className="color-name">Кнопки</div>

                    </div>
                  </div>

                  {/* Цвет 3 */}
                  <div className="color-row">
                    <div className="color-cube light"></div>
                    <div className="color-description">
                      <div className="color-name">Фон</div>
                      <div className="color-name">Заголовки</div>

                    </div>
                  </div>

                  {/* Цвет 4 */}
                  <div className="color-row">
                    <div className="color-cube angle"></div>
                    <div className="color-description">
                      <div className="color-name">Фон</div>

                    </div>
                  </div>
                </div>

                {/* Правая колонка - шрифты и элементы */}
                <div className="fonts-elements-block">
                  {/* Картинка со шрифтами */}
                  <div className="fonts-image">
                    <img src="/src/assets/case/visual-7.jpg" alt="Шрифты" />
                  </div>

                  {/* Два элемента с подписями под ними */}
                  <div className="two-elements">
                    <div className="element-wrapper">
                      <div className="element-item">
                        <img src="/src/assets/case/visual-5.jpg" alt="Элемент 1" />
                      </div>
                      <div className="element-caption">Основной угол в декоративном элементе</div>
                    </div>
                    <div className="element-wrapper">
                      <div className="element-item">
                        <img src="/src/assets/case/visual-6.jpg" alt="Элемент 2" />
                      </div>
                      <div className="element-caption">Допустимый угол в декоративном элементе</div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="process-step-content visual">
                <h3>Визуальный язык</h3>
                <p className="process-step-description">
                  Цвет, геометрия и система.
                </p>
                <div className="process-step-details">
                  <p>
                    Бирюзовый цвет как акцент. Геометрия создаёт структуру.
                    Повтор формирует узнаваемость.
                  </p>
                </div>
              </div>
            </div>

            {/* 6 ВИЗУАЛ */}
            <div className="process-step">
              <div className="process-step-image placeholder patter-cont">
                <div className="pattern">
                  <img src="/src/assets/case/patt.jpg" alt="Пример" />
                </div>

                <div className="inner-pattern">
                  <img src="/src/assets/case/patt2.jpg" alt="Пример" />
                  <img src="/src/assets/case/patt2-ex.jpg" alt="Пример" />
                </div>

              </div>

              <div className="process-step-content">
                <h3>Материальность и адаптивность</h3>
                <p className="process-step-description">
                  Паттерн разработан как гибкая система, адаптируемая под носители и технологии печати.
                </p>
                <div className="process-step-details">
                  <p>
                    Паттерн сохраняет читаемость при масштабировании и тиснении,
                    позволяя использовать его в разных производственных сценариях.
                  </p>
                </div>
              </div>
            </div>



            {/* 6 НОСИТЕЛИ */}
            <div className="process-step">
              <div className="process-step-image mockup-grid">
                <div className="mockup-grid-container">
                  {/* Строка 1 */}
                  <div className="mockup-row">
                    <div className="mockup-item"><img src="/src/assets/case/viz1.jpg" alt="Визитка" /></div>
                    <div className="mockup-item"><img src="/src/assets/case/viz2.jpg" alt="Визитка" /></div>
                  </div>
                  {/* Строка 2 */}
                  <div className="mockup-row">
                    <div className="mockup-item"><img src="/src/assets/case/kru.jpg" alt="Кружка" /></div>
                    <div className="mockup-item"><img src="/src/assets/case/key.jpg" alt="Брелок" /></div>
                  </div>
                  {/* Строка 3 */}
                  <div className="mockup-row">
                    <div className="mockup-item"><img src="/src/assets/case/blokn.jpg" alt="Блокнот" /></div>
                    <div className="mockup-item"><img src="/src/assets/case/pen.jpg" alt="Ручка" /></div>
                  </div>
                  {/* Строка 4 — одна картинка на всю ширину */}
                  <div className="mockup-row full">
                    <div className="mockup-item full-width"><img src="/src/assets/case/folder.jpg" alt="Папка" /></div>
                  </div>
                </div>
              </div>

              <div className="process-step-content">
                <h3>Носители</h3>
                <p className="process-step-description">
                  Система адаптируется под любые форматы.
                </p>
                <div className="process-step-details">
                  <p>
                    Айдентика работает одинаково хорошо на всех носителях.
                  </p>
                </div>
              </div>
            </div>

            {/* 7 РЕЗУЛЬТАТ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <div className="mockup-item-final"><img src="/src/assets/case/compose.jpg" alt="Композиция" /></div>
              </div>

              <div className="process-step-content">
                <h3>Результат</h3>
                <p className="process-step-description">
                  Цельная визуальная система.
                </p>
                <div className="process-step-details">
                  <p>
                    Бренд выделяется, выглядит современно и масштабируется.
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

export default CorpStyleCase;