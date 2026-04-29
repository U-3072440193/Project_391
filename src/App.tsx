import "./App.css";
import "./components/modal.css";
import type { ReactNode } from "react";
import  { useState, useEffect, useCallback } from "react";
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
import book from "./assets/products/book.webp";
import Corp from "./assets/case/compose.jpg";
import Corp1 from "./assets/case/compose1.webp";
import poster from "./assets/products/poster.webp";
import shishkaJpg from "./assets/shishka/shishka.jpg";
import portfolio from "./assets/web/portf.jpg";

// Константы для контактов (вынесено для чистоты)
const CONTACTS = [
  { icon: "/icons/mail.svg", href: "mailto:shkatzman@mail.ru", text: "shkatzman@mail.ru", external: false },
  { icon: "/icons/tele.svg", href: "https://t.me/U_3072440193", text: "Telegram", external: true },
  { icon: "/icons/git.svg", href: "https://github.com/U-3072440193", text: "GitHub", external: true },
];

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  // Отдельные состояния для каждой секции
  const [showCases, setShowCases] = useState(true);
  const [showAbout, setShowAbout] = useState(true);
  const [showPoly, setShowPoly] = useState(true);
  const [showCorpStyle, setShowCorpStyle] = useState(true);
  const [showWeb, setShowWeb] = useState(true);

  // useCallback для предотвращения лишних ререндеров
  const openModal = useCallback((content: ReactNode): void => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback((): void => {
    setIsModalOpen(false);
    setModalContent(null);
  }, []);

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
            <button 
              className="toggle" 
              onClick={() => setShowCases(!showCases)} 
              aria-label="Свернуть/развернуть секцию"
            >
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
                  image={Corp1}
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
              <div className="menu-head about-head">
                <h2>О себе</h2>
              </div>
              <div className="cases-line about-head-line"></div>
              <button 
                className="toggle about-head-btn" 
                onClick={() => setShowAbout(!showAbout)} 
                aria-label="Свернуть/развернуть секцию"
              >
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
            <div className="menu-head">
              <h2>Полиграфия</h2>
            </div>
            <div className="cases-line"></div>
            <button 
              className="toggle" 
              onClick={() => setShowPoly(!showPoly)} 
              aria-label="Свернуть/развернуть секцию"
            >
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

        {/* Секция КОРПОРАТИВНЫЙ СТИЛЬ */}
        <section id="corpstyle" className="cases container reveal">
          <div className="cases-header">
            <div className="menu-head">
              <h2>Корпоративный стиль</h2>
            </div>
            <div className="cases-line"></div>
            <button 
              className="toggle" 
              onClick={() => setShowCorpStyle(!showCorpStyle)} 
              aria-label="Свернуть/развернуть секцию"
            >
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
            <div className="menu-head">
              <h2>Веб-разработка</h2>
            </div>
            <div className="cases-line"></div>
            <button 
              className="toggle" 
              onClick={() => setShowWeb(!showWeb)} 
              aria-label="Свернуть/развернуть секцию"
            >
              <svg className={`toggle-icon ${showWeb ? "up" : "down"}`} viewBox="0 0 100 100">
                <polyline points="20,60 50,30 80,60" />
              </svg>
            </button>
          </div>
          {showWeb && (
            <div className="cases-controls">
              <ServiceCard
                title="Сайт для Kanban доски «Шишка»"
                description="Fullstack-платформа для управления проектами"
                image={shishkaJpg}
                onClick={() => openModal(<Shishkatwo />)}
              />
              <ServiceCard
                title="Сайт-портфолио"
                description="React + TypeScript + Vite, адаптивная верстка, модальные окна с проектами"
                image={portfolio}
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

      <footer id="contacts" className="footer">
        <div className="footer-bg"></div>
        <div className="footer-overlay"></div>
        <div className="footer-content container">
          <div className="footer-contacts">
            {CONTACTS.map((contact, index) => (
              <div key={index} className="contact-item">
                <i className="fas fa-envelope contact-icon">
                  <img src={contact.icon} alt={contact.text} />
                </i>
                <a 
                  href={contact.href} 
                  {...(contact.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {contact.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}