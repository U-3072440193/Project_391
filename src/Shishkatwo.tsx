import './shishka.css';
import { useReveal } from './hooks/useReveal';

// Импорты картинок и видео
import mainImg from "./assets/shishka/main.jpg";
import demoVideo from "./assets/shishka/demo.mp4";
import chatVideo from "./assets/shishka/chat.mp4";
import webImg from "./assets/web/web2.jpg";

const Shishkatwo = () => {

  useReveal();

  return (
    <div className="project">

      {/* HERO - только картинка с текстом */}
      <section className="hero">
        <div className="hero-bg-container">
          <img src={mainImg} alt="Шишка Task Manager" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content reveal">
          <span className="badge">FULLSTACK / WEB APP</span>

          <h1 className="hero-title">
            Шишка
            <span className="hero-accent">
              Kanban система управления задачами
            </span>
          </h1>

          <p>
            Real-time взаимодействие и масштабируемая архитектура
          </p>
        </div>
      </section>
      {/* ЗАДАЧА */}
      <div className="process-step no-image full-width-bg no-gap-after">
        {/* Фоновая картинка и затемнение */}
        <div className="step-bg"></div>
        <div className="step-bg-overlay"></div>

        <div className="process-step-content full ">
          <h3>Задача</h3>
          <div className="keywords">
            <span>Kanban</span>
            <span>Real-time</span>
            <span>Drag-and-drop</span>
            <span>Чат</span>
            <span>Файлы</span>
          </div>
          <div className="process-step-details">
            <p>
              Создать fullstack-приложение для управления задачами по методологии Kanban
              с возможностью real-time общения, загрузки файлов и гибкой системой ролей.
            </p>
          </div>
        </div>
      </div>

      {/* WOW PRODUCT */}
      <section className="section narrow reveal">
        <h2>Интерфейс системы</h2>
      </section>

      {/* FEATURE */}
      <section className="section feature reveal">
        <div className="feature-media shishka-placeholder">
          <video autoPlay loop muted playsInline>
            <source src={demoVideo} type="video/mp4" />
          </video>
        </div>

        <div className="feature-text">
          <h2>Kanban</h2>
          <ul>
            <li>Drag & Drop</li>
            <li>Real-time обновления</li>
            <li>Гибкие доски</li>
            <li>Статусы и дедлайны</li>
            <li>Внутренняя почта</li>
          </ul>
        </div>
      </section>

      {/* CHAT */}
      <section className="section feature reverse reveal">
        <div className="feature-media shishka-placeholder">
          <video autoPlay loop muted playsInline>
            <source src={chatVideo} type="video/mp4" />
          </video>
        </div>

        <div className="feature-text">
          <h2>Коммуникация</h2>
          <p>
            Сообщения, файлы и взаимодействие пользователей
            через WebSocket-соединения.
          </p>
        </div>
      </section>

      {/* ARCH */}
      <section className="section narrow reveal">
        <h2>Архитектура</h2>

        <div className="architecture">
          <div>React</div>
          <span>→</span>
          <div>Django API</div>
          <span>→</span>
          <div>WebSocket</div>
          <span>→</span>
          <div>Redis</div>
        </div>
      </section>

      {/* RESULT */}
      <section className="section result reveal">
        <div className="result-image">
          <img src={webImg} alt="Final mockup" className="final-image" />
          <div className="result-overlay">
            <h2>Результат</h2>
            <p>
              Полноценный fullstack-продукт с real-time системой
              и продуманной архитектурой.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Shishkatwo;