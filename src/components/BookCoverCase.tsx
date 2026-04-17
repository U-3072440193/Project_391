import { useReveal } from '../hooks/useReveal';
import './modal.css';
import './modalmedia.css';
// Картинки
import bookmock from "../assets/case/book-mock.jpg";
import bookexample from "../assets/case/book-example.jpg";
import bookidea1 from "../assets/case/book-idea1.jpg";
import bookidea2 from "../assets/case/book-idea2.jpg";
import bookidea3 from "../assets/case/book-idea3.jpg";
import bookidea4 from "../assets/case/book-idea4.jpg";
import bookvar1 from "../assets/case/book-var1.jpg";
import bookvar2 from "../assets/case/book-var2.jpg";
import bookvar3 from "../assets/case/book-var3.jpg";
import bookvar4 from "../assets/case/book-var4.jpg";
import bookmaterial from "../assets/case/book-material.png";
import bookface from "../assets/case/book-face.jpg";
import bookback from "../assets/case/book-back.jpg";
import bookopen from "../assets/case/book-open.jpg";
import bookfinal from "../assets/case/final.jpg";

const BookCoverCase = () => {
  useReveal();

  return (
    <div className="project-modal">

      {/* HERO */}
      <div className="modal-hero">
        <div className="modal-hero-bg">
          <img src={bookmock} alt="Октавиан обложка" />
          <div className="modal-hero-overlay"></div>
        </div>

        <div className="modal-hero-content reveal">
          <div className="modal-badge">ПОЛИГРАФИЯ</div>

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
        <div className="modal-info-grid reveal">
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
            <div className="process-step reveal">
              <div className="process-step-image placeholder">
                <img src={bookexample} alt="Контекст" />
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
            <div className="process-step no-image full-width-bg reveal">
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
            <div className="process-step idea-step reveal">
              <div className="idea-wrapper">
                <div className="idea-visual-container">
                  <div className="idea-grid-2x2">
                    <div className="grid-item">
                      <img src={bookidea1} alt="Идея 1" />
                    </div>
                    <div className="grid-item">
                      <img src={bookidea2} alt="Идея 2" />
                    </div>
                    <div className="grid-item">
                      <img src={bookidea3} alt="Идея 3" />
                    </div>
                    <div className="grid-item">
                      <img src={bookidea4} alt="Идея 4" />
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

            {/* 5 ТИПОГРАФИКА */}
            <div className="process-step reveal">
              <div className="idea-wrapper">
                <div className="idea-visual-container">
                  <div className="idea-grid-2x2">
                    <div className="grid-item">
                      <img src={bookvar1} alt="Вариант 1" />
                    </div>
                    <div className="grid-item">
                      <img src={bookvar2} alt="Вариант 2" />
                    </div>
                    <div className="grid-item">
                      <img src={bookvar3} alt="Вариант 3" />
                    </div>
                    <div className="grid-item">
                      <img src={bookvar4} alt="Вариант 4" />
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
            <div className="process-step reveal">
              <div className="process-step-image placeholder">
                <img src={bookmaterial} alt="Материальность" />
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
            <div className="process-step reveal">
              <div className="process-step-image mockup-grid unpadding-right">
                <div className="mockup-grid-container">
                  <div className="mockup-row">
                    <div className="mockup-item"><img src={bookface} alt="Книга лицевая" /></div>
                    <div className="mockup-item"><img src={bookback} alt="Книга задняя" /></div>
                  </div>

                  <div className="mockup-row full">
                    <div className="mockup-item full-width"><img src={bookopen} alt="Книга раскрытая" /></div>
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
            <div className="process-step reveal">
              <div className="process-step-image placeholder">
                <div className="mockup-item-final">
                  <img src={bookfinal} alt="Финал" />
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