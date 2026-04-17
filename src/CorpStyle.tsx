
import './components/modal.css';
import './components/modalmedia.css';
import { useReveal } from './hooks/useReveal';

// Картинки для HERO
import neodom from "./assets/case/neodom.jpg";

// Картинки для паттерна
import patt from "./assets/case/patt.jpg";
import patt2 from "./assets/case/patt2.jpg";

// Картинки для носителей
import viz1 from "./assets/case/viz1.jpg";
import viz2 from "./assets/case/viz2.jpg";
import kru from "./assets/case/kru.jpg";
import key from "./assets/case/key.jpg";
import blokn from "./assets/case/blokn.jpg";
import pen from "./assets/case/pen.jpg";
import everyday from "./assets/case/everyday.jpg";
import baige from "./assets/case/baige.jpg";
import folder from "./assets/case/folder.jpg";

// Картинка для результата
import compose1 from "./assets/case/compose1.jpg";

const CorpStyle = () => {
  useReveal();

  return (
    <div className="corpstyle-modal">

      {/* HERO */}
      <div className="modal-hero">
        <div className="modal-hero-bg">
          <img src={neodom} alt="inDom ребрендинг" />
          <div className="modal-hero-overlay"></div>
        </div>

        <div className="modal-hero-content">
          <h1 className="modal-hero-title reveal">
            neoДом<br />
            <span className="accent">Брендинг агентства недвижимости</span>
          </h1>

          <p className="modal-hero-subtitle">
            Минималистичный визуальный язык для выхода на новый уровень
          </p>
        </div>
      </div>

      <div className="corpstyle-inner">

        {/* О проекте */}
        <div className="corpstyle-section reveal">
          <div className="corpstyle-section-header">
            <h2>О проекте</h2>
            <div className="section-line"></div>
          </div>
          <div className="corpstyle-text">
            <p>
              neoДом — концептуальный проект по созданию бренда агентства недвижимости,
              которое позиционирует себя как эксперта с современным подходом.
              Задача — отойти от шаблонных решений (синий цвет, иконки домов)
              и сформировать узнаваемый, системный визуальный язык.
            </p>
          </div>
        </div>

        {/* Концепция */}
        <div className="corpstyle-section reveal">
          <div className="corpstyle-section-header">
            <h2>Концепция</h2>
            <div className="section-line"></div>
          </div>
          <div className="corpstyle-text">
            <p>
              В основе концепции — отказ от буквальных образов в пользу геометрии,
              модульности и повторения. В логотипе используется угол 60°,
              формирующий узнаваемый знак. В прикладной графике угол адаптирован
              до 90° и 120° для повышения читаемости и удобства масштабирования.
            </p>
          </div>
        </div>

        {/* Визуальный язык + Типографика в ряд */}
        <div className="two-columns-section reveal">
          {/* Визуальный язык - левая колонка */}
          <div className="corpstyle-section half">
            <div className="corpstyle-section-header">
              <h2>Визуальный язык</h2>
              <div className="section-line"></div>
            </div>

            <div className="visual-grid">
              <div className="visual-item">
                <div className="color-cube dark"></div>
                <div className="visual-info">
                  <h3>#3c3c3b</h3>
                  <p>Фон, заголовки, основной текст</p>
                </div>
              </div>
              <div className="visual-item">
                <div className="color-cube accent"></div>
                <div className="visual-info">
                  <h3>#01435d</h3>
                  <p>Акцент, фон для кнопки и иконок</p>
                </div>
              </div>
              <div className="visual-item">
                <div className="color-cube light"></div>
                <div className="visual-info">
                  <h3>#43af9a</h3>
                  <p>Светлый оттенок для заголовков и фоновых блоков</p>
                </div>
              </div>
            </div>
          </div>

          {/* Типографика - правая колонка */}
          <div className="corpstyle-section half">
            <div className="corpstyle-section-header">
              <h2>Типографика</h2>
              <div className="section-line"></div>
            </div>
            <div className="typography-grid">
              <div className="typo-item inter-black">
                <h3>Inter Black</h3>
                <p>Заголовки 32-48pt</p>
              </div>
              <div className="typo-item inter-regular">
                <h3>Inter Regular</h3>
                <p>Основной текст 16-18pt</p>
              </div>
              <div className="typo-item inter-extra-light-italic">
                <h3>Inter Extra Light Italic</h3>
                <p>Акценты, цифры 14-20pt</p>
              </div>
            </div>
          </div>
        </div>

        {/* Паттерн */}
        <div className="corpstyle-section reveal">
          <div className="corpstyle-section-header">
            <h2>Паттерн</h2>
            <div className="section-line"></div>
          </div>
          <div className="pattern-showcase">
            <div className="pattern-images-corps">
              <img src={patt} alt="Паттерн" />
              <img src={patt2} alt="Паттерн деталь" />
            </div>
            <div className="pattern-text">
              <p>
                Паттерн разработан как гибкая система, адаптируемая под носители
                и технологии печати. Сохраняет читаемость при масштабировании
                и тиснении, позволяя использовать его в разных производственных
                сценариях.
              </p>
            </div>
          </div>
        </div>

        {/* Носители */}
        <div className="corpstyle-section reveal">
          <div className="corpstyle-section-header">
            <h2>Носители</h2>
            <div className="section-line"></div>
          </div>
          <div className="mockups-grid">
            <img src={viz1} alt="Визитка" />
            <img src={viz2} alt="Визитка" />
            <img src={kru} alt="Кружка" />
            <img src={key} alt="Брелок" />
            <img src={blokn} alt="Блокнот" />
            <img src={pen} alt="Ручка" />
            <img src={everyday} alt="Ежедневник" />
            <img src={baige} alt="Бэйдж" />
            <img src={folder} alt="Папка" />
          </div>
        </div>

        {/* Результат */}
        <section className="section result-corp reveal">
          <div className="result-image-corp">
            <img src={compose1} alt="Финальная композиция" className="final-image" />
            <div className="result-overlay-corp">
              <h2>Результат</h2>
              <p>
                Цельная визуальная система, которая выделяет бренд на рынке,
                выглядит современно и масштабируется на любые носители.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CorpStyle;