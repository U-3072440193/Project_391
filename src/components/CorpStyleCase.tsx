import { useReveal } from '../hooks/useReveal';
import './modal.css';
import './modalmedia.css';

// Картинки для HERO
import neodom from "../assets/case/neodom.webp";

// Картинки для контекста и процесса
import neodomProblem from "../assets/corp-modal/neodom-problem2.gif";
import exampleNeodom from "../assets/case/example-neodom.jpg";

// Картинки для идеи (exam2)
import exam2_1 from "../assets/case/exam2-1.jpg";
import exam2_2 from "../assets/case/exam2-2.jpg";
import exam2_3 from "../assets/case/exam2-3.jpg";
import exam2_4 from "../assets/case/exam2-4.jpg";
import exam2_5 from "../assets/case/exam2-5.jpg";
import exam2_6 from "../assets/case/exam2-6.jpg";
import exam2_7 from "../assets/case/exam2-7.jpg";
import exam2_8 from "../assets/case/exam2-8.jpg";
import exam2_9 from "../assets/case/exam2-9.jpg";
import exam2_10 from "../assets/case/exam2-10.jpg";

// Картинки для визуального языка
import visual5 from "../assets/case/visual-5.jpg";
import visual6 from "../assets/case/visual-6.jpg";
import visual7 from "../assets/case/visual-7.jpg";

// Картинки для паттерна
import patt from "../assets/case/patt.jpg";
import patt2 from "../assets/case/patt2.jpg";
import patt2ex from "../assets/case/patt2-ex.jpg";

// Картинки для носителей
import viz1 from "../assets/case/viz1.jpg";
import viz2 from "../assets/case/viz2.jpg";
import kru from "../assets/case/kru.jpg";
import key from "../assets/case/key.jpg";
import blokn from "../assets/case/blokn.jpg";
import pen from "../assets/case/pen.jpg";
import folder from "../assets/case/folder.jpg";

// Картинка для результата
import compose2 from "../assets/case/compose2.jpg";

const CorpStyleCase = () => {
  useReveal();

  return (
    <div className="project-modal">

      {/* HERO */}
      <div className="modal-hero">
        <div className="modal-hero-bg">
          <img src={neodom} alt="inDom ребрендинг" />
          <div className="modal-hero-overlay"></div>
        </div>

        <div className="modal-hero-content reveal">
          <div className="modal-badge">КОНЦЕПТ</div>

          <h1 className="modal-hero-title">
            neoДом<br />
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
        <div className="modal-info-grid reveal">
          <div className="info-card">
            <div className="info-icon"><img src="/icons/project.svg" alt="Проект" /></div>
            <h3>Проект</h3>
            <p>Концептуальный брендинг</p>
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
            <div className="process-step reveal">
              <div className="process-step-image placeholder unpadding">
                <img src={neodomProblem} alt="Контекст рынка" />
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
            <div className="process-step reveal">
              <div className="process-step-image placeholder unpadding">
                <img src={exampleNeodom} alt="Пример" />
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
            <div className="process-step no-image full-width-bg reveal">
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
            <div className="process-step idea-step reveal">

              <div className="idea-wrapper">

                <div className="idea-text-container">
                  <div className="idea-text-grid">
                    <div className="idea-text-column">
                      <div className="idea-label">
                        <p>Первичные решения опирались на прямые ассоциации с недвижимостью, но выглядели клишированно и не формировали уникальный образ бренда.</p>
                      </div>
                    </div>

                    <div className="idea-text-column">
                      <div className="idea-label">
                        <p>Переход к более минималистичному визуальному языку позволил улучшить читаемость, но решения всё ещё не имели характерной идеи.</p>
                      </div>
                    </div>

                    <div className="idea-text-column">
                      <div className="idea-label">
                        <p>В финальной концепции появился абстрактный символ — треугольник, который одновременно отсылает к форме крыши и создаёт устойчивый, современный знак.</p>
                      </div>
                    </div>

                    <div className="idea-text-column">
                      <div className="idea-label">
                        <p>Выбран итоговый вариант логотипа neo Dom</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="idea-visual-container">
                  <div className="idea-visual-grid">
                    <div className="idea-column">
                      <div className="idea-images vertical-4">
                        <img src={exam2_3} alt="Идея 1" />
                        <img src={exam2_4} alt="Идея 2" />
                        <img src={exam2_2} alt="Идея 3" />
                        <img src={exam2_1} alt="Идея 4" />
                      </div>
                    </div>

                    <div className="idea-column">
                      <div className="idea-images vertical-3">
                        <img src={exam2_5} alt="Идея 1" />
                        <img src={exam2_6} alt="Идея 2" />
                        <img src={exam2_7} alt="Идея 3" />
                      </div>
                    </div>

                    <div className="idea-column">
                      <div className="idea-images vertical-2">
                        <img src={exam2_9} alt="Идея 1" />
                        <img src={exam2_8} alt="Идея 2" />
                      </div>
                    </div>

                    <div className="idea-column">
                      <div className="idea-images vertical-1">
                        <img src={exam2_10} alt="Идея 1" />
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
            <div className="process-step reveal">
              <div className="color-fonts-section">

                <div className="colors-list">
                  <div className="color-row">
                    <div className="color-cube dark"></div>
                    <div className="color-description">
                      <div className="color-name">Фон</div>
                      <div className="color-name">Заголовки</div>
                      <div className="color-name">Основной текст</div>
                    </div>
                  </div>

                  <div className="color-row">
                    <div className="color-cube accent"></div>
                    <div className="color-description">
                      <div className="color-name">Акцент</div>
                      <div className="color-name">Иконки</div>
                      <div className="color-name">Кнопки</div>
                    </div>
                  </div>

                  <div className="color-row">
                    <div className="color-cube light"></div>
                    <div className="color-description">
                      <div className="color-name">Фон</div>
                      <div className="color-name">Заголовки</div>
                    </div>
                  </div>

                  <div className="color-row">
                    <div className="color-cube angle"></div>
                    <div className="color-description">
                      <div className="color-name">Фон</div>
                    </div>
                  </div>
                </div>

                <div className="fonts-elements-block">
                  <div className="fonts-image">
                    <img src={visual7} alt="Шрифты" />
                  </div>

                  <div className="two-elements">
                    <div className="element-wrapper">
                      <div className="element-item">
                        <img src={visual5} alt="Элемент 1" />
                      </div>
                      <div className="element-caption">Основной угол в декоративном элементе</div>
                    </div>
                    <div className="element-wrapper">
                      <div className="element-item">
                        <img src={visual6} alt="Элемент 2" />
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

            {/* 6 ВИЗУАЛ - ПАТТЕРН */}
            <div className="process-step reveal">
              <div className="process-step-image placeholder patter-cont unpadding">
                <div className="pattern">
                  <img src={patt} alt="Пример" />
                </div>

                <div className="inner-pattern">
                  <img src={patt2} alt="Пример" />
                  <img src={patt2ex} alt="Пример" />
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

            {/* НОСИТЕЛИ */}
            <div className="process-step reveal">
              <div className="process-step-image mockup-grid unpadding">
                <div className="mockup-grid-container">
                  <div className="mockup-row">
                    <div className="mockup-item"><img src={viz1} alt="Визитка" /></div>
                    <div className="mockup-item"><img src={viz2} alt="Визитка" /></div>
                  </div>
                  <div className="mockup-row">
                    <div className="mockup-item"><img src={kru} alt="Кружка" /></div>
                    <div className="mockup-item"><img src={key} alt="Брелок" /></div>
                  </div>
                  <div className="mockup-row">
                    <div className="mockup-item"><img src={blokn} alt="Блокнот" /></div>
                    <div className="mockup-item"><img src={pen} alt="Ручка" /></div>
                  </div>
                  <div className="mockup-row full">
                    <div className="mockup-item full-width"><img src={folder} alt="Папка" /></div>
                  </div>
                </div>
              </div>

              <div className="process-step-content">
                <h3>Носители</h3>
                <p className="process-step-description">
                  Система адаптируется под любые форматы и технологии печати.
                </p>
                <div className="process-step-details">
                  <p>
                    Айдентика одинаково эффективно работает на всех носителях — от визитки до билборда.
                  </p>
                </div>
                <br/>
                <div className="process-step-details">
                  <p>
                    Макет легко адаптируется под различные технологии: офсетная, цифровая,
                    широкоформатная печать, шелкография, тампопечать, тиснение, вырубка
                    и плоттерная резка. Поддерживаются цветовые модели CMYK и Pantone.
                  </p>
                </div>
              </div>
            </div>

            {/* РЕЗУЛЬТАТ */}
            <div className="process-step reveal">
              <div className="process-step-image placeholder unpadding">
                <div className="mockup-item-final"><img src={compose2} alt="Композиция" /></div>
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