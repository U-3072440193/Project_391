import React, { useEffect } from 'react';
import './components/shishka-clean.css';

const Shishkatwo = () => {

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <div className="project">

      {/* HERO */}
      <section className="hero">
        <img src="/src/assets/shishka/header.jpg" className="hero-bg" />

        <div className="hero-overlay" />

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

      {/* WOW PRODUCT */}
      <section className="product reveal">
        <img src="/src/assets/shishka/main.jpg" />

        <div className="product-overlay">
          <h2>Интерфейс системы</h2>
        </div>
      </section>

      {/* FEATURE */}
      <section className="section feature reveal">
        <div className="feature-media">
          <video autoPlay loop muted playsInline>
            <source src="/src/assets/shishka/demo.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="feature-text">
          <h2>Kanban</h2>
          <ul>
            <li>Drag & Drop</li>
            <li>Real-time обновления</li>
            <li>Гибкие доски</li>
            <li>Статусы и дедлайны</li>
          </ul>
        </div>
      </section>

      {/* CHAT */}
      <section className="section feature reverse reveal">
        <div className="feature-media placeholder">
          <div>CHAT GIF</div>
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
        <div className="result-image placeholder">
          <div>FINAL MOCKUP</div>
        </div>

        <h2>Результат</h2>
        <p>
          Полноценный fullstack-продукт с real-time системой
          и продуманной архитектурой.
        </p>
      </section>

    </div>
  );
};

export default Shishkatwo;