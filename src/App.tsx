import "./App.css";
import "./components/modal.css";
import type { ReactNode } from "react";
import React, { useState, useEffect } from "react";
import { useReveal } from './hooks/useReveal';
import { PrintCard } from './components/PrintCard';
import { ServiceCard } from './components/ServiceCard';



import Header from "./Header";
import About from "./About";
import AboutMirror from "./AboutMirror";

// модалки
import BookCoverCase from "./components/BookCoverCase";
import PosterCase from "./components/PosterCase";
import Polygraphy from "./Polygraphy";
import CorpStyle from "./CorpStyle";
import Shishkatwo from "./Shishkatwo";
import CorpStyleCase from "./components/CorpStyleCase";


// картинки
import book from "./assets/products/book.jpg";
import Corp from "./assets/case/compose.jpg";
import poster from "./assets/products/poster.jpg";
import shishkaJpg from "./assets/shishka/shishka.jpg";
import portfolio from "./assets/web/portf.jpg";



export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  // Отдельные состояния для каждой секции
  const [showCases, setShowCases] = useState(true);
  const [showAbout, setShowAbout] = useState(true);
  const [showPoly, setShowPoly] = useState(true);
  const [showCorpStyle, setShowCorpStyle] = useState(true);
  const [showWeb, setShowWeb] = useState(true);



  const openModal = (content: React.ReactNode): void => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };
  useReveal();





  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div className="portfolio">
      <Header />

      <div className="container"></div>

      <div className="nav-wrapper">
        <nav className="nav-line">
          <a href="#about">О себе</a>
          <a href="#polygraphy">Полиграфия</a>
          <a href="#corpstyle">Корп стиль</a>
          <a href="#web">Веб</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>
      <div className="hero-spacer"></div>

      <main className="portfolio-body">
        {/* Секция КЕЙСЫ */}
        <section className="cases container reveal">
          <div className="cases-header">
            <div className="cases-circle">Кейсы</div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowCases(!showCases)} aria-label="Свернуть/развернуть секцию">
              <svg className={`toggle-icon ${showCases ? "up" : "down"}`} viewBox="0 0 100 100">
                <polyline points="20,60 50,30 80,60" />
              </svg>
            </button>
          </div>

          {showCases && (
            <div className="cases-grid-container">
              <div className="cases-grid">
                <PrintCard
                  title="Корпоративный стиль НеоДом"
                  image={Corp}
                  tags={["Корп.стиль", "Брендинг"]}
                  size="big"
                  onClick={() => openModal(<CorpStyleCase />)}
                />
                <PrintCard
                  title="Разработка серии постеров"
                  image={poster}
                  tags={["Полиграфия", "плакат"]}
                  size="tall"
                  onClick={() => openModal(<PosterCase />)}
                />
                <PrintCard
                  title="Разработка обложки книги"
                  image={book}
                  tags={["Полиграфия", "Книги"]}
                  size="big"
                  onClick={() => openModal(<BookCoverCase />)}
                />
              </div>
            </div>
          )}
        </section>

        {/* Секция О СЕБЕ */}
        <section id="about" className="about-section reveal">
          <div className="cases container">
            <div className="cases-header">
              <div className="menu-head about-head"><h2>О себе</h2></div>
              <div className="cases-line about-head-line"></div>

              <button className="toggle about-head-btn" onClick={() => setShowAbout(!showAbout)} aria-label="Свернуть/развернуть секцию">
                <svg className={`toggle-icon ${showAbout ? "up" : "down"}`} viewBox="0 0 100 100">
                  <polyline points="20,60 50,30 80,60" />
                </svg>
              </button>
            </div>

            {showAbout && (
              <div className="cases-controls">
                <About />
                <AboutMirror />
              </div>
            )}
          </div>
        </section>

        {/* Секция ПОЛИГРАФИЯ */}
        <section id="polygraphy" className="cases container reveal">
          <div className="cases-header">
            <div className="menu-head"><h2>Полиграфия</h2></div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowPoly(!showPoly)} aria-label="Свернуть/развернуть секцию">
              <svg className={`toggle-icon ${showPoly ? "up" : "down"}`} viewBox="0 0 100 100">
                <polyline points="20,60 50,30 80,60" />
              </svg>
            </button>
          </div>
          {showPoly && (
            <div className="cases-controls">
              <Polygraphy />
            </div>
          )}
        </section>

        {/* Секция КОРПОРАТИВНЫЙ СТИЛЬ - большая карточка на всю ширину */}
        <section id="corpstyle" className="cases container reveal">
          <div className="cases-header">
            <div className="menu-head"><h2>Корпоративный стиль</h2></div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowCorpStyle(!showCorpStyle)} aria-label="Свернуть/развернуть секцию">
              <svg className={`toggle-icon ${showCorpStyle ? "up" : "down"}`} viewBox="0 0 100 100">
                <polyline points="20,60 50,30 80,60" />
              </svg>
            </button>
          </div>
          {showCorpStyle && (
            <div className="cases-controls">
              <ServiceCard
                title="Брендинг агентства недвижимости НеоДом"
                description="Разработка фирменного стиля, логотипов, брендбуков и визуальных систем"
                image={Corp}
                onClick={() => openModal(<CorpStyle />)}
              />
            </div>
          )}
        </section>


        {/* Секция ВЕБ-РАЗРАБОТКА */}
        <section id="web" className="cases container reveal">
          <div className="cases-header">
            <div className="menu-head"><h2>Веб-разработка</h2></div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowWeb(!showWeb)} aria-label="Свернуть/развернуть секцию">
              <svg className={`toggle-icon ${showWeb ? "up" : "down"}`} viewBox="0 0 100 100">
                <polyline points="20,60 50,30 80,60" />
              </svg>
            </button>
          </div>
          {showWeb && (
            <div className="cases-controls">
              {/* Карточка для открытия модалки Shishka */}
              <ServiceCard
                title="Сайт для Kanban доски «Шишка»"
                description="Fullstack-платформа для управления проектами"
                image={shishkaJpg}
                onClick={() => openModal(<Shishkatwo />)}
              />

              {/* Карточка для сайта-портфолио */}
              <ServiceCard
                title="Сайт-портфолио"
                description="React + TypeScript + Vite, адаптивная верстка, модальные окна с проектами"
                image={portfolio} // замени на свою картинку для портфолио
                onClick={() => window.open('https://github.com/U-3072440193/Project_391', '_blank')}
              />
            </div>
          )}
        </section>
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal} role="dialog" aria-modal="true">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            {modalContent}
          </div>
        </div>
      )}

      <footer id='contacts' className="footer">
        <div className="footer-bg"></div>
        <div className="footer-overlay"></div>
        <div className="footer-content container">
          <div className="footer-contacts">
            <div className="contact-item">
              <i className="fas fa-envelope contact-icon"><img src="/icons/mail.svg" alt="Почта" /></i>
              <a href="mailto:shkatzman@mail.ru">shkatzman@mail.ru</a>
            </div>

            <div className="contact-item">
              <i className="fab fa-telegram contact-icon"><img src="/icons/tele.svg" alt="Телеграмм" /></i>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>

            <div className="contact-item">
              <i className="fab fa-github contact-icon"><img src="/icons/git.svg" alt="Гитхаб" /></i>
              <a href="https://github.com/U-3072440193" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}