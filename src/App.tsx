import "./App.css";
import "./components/modal.css";
import type { ReactNode } from "react";
import React, { useState, useRef } from "react";

// модалки
import Leafleets from "./components/Leafleets";
import Vkladysh from "./components/Vkladysh";
import BookCoverCase from "./components/BookCoverCase";
import About from "./About";
import AboutMirror from "./AboutMirror";
import Polygraphy from "./Polygraphy";
import CorpStyle from "./CorpStyle";
import CorpStyleCase from "./components/CorpStyleCase";
import Web from "./Web";

// картинки
import leaf from "./assets/products/leaf-sd.jpg";
import vklad from "./assets/products/vklad.png";
import book from "./assets/products/book.jpg";
import Corp from "./assets/products/corp-style.png";

/* ================= HEADER ================= */
function Header() {
  return (
    <header className="header">
      <div className="hero-box">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>

        <svg className="rays" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <line x1="500" y1="150" x2="200" y2="500" />
          <line x1="500" y1="150" x2="350" y2="500" />
          <line x1="500" y1="150" x2="500" y2="500" />
          <line x1="500" y1="150" x2="650" y2="500" />
          <line x1="500" y1="150" x2="800" y2="500" />
        </svg>

        <div className="container">
          <div className="schema-center">
            <div className="center-left">
              <h3>Приветствую вас на моей страничке</h3>
              <h3 className="muted">Предлагаю ознакомиться с портфолио</h3>
            </div>

            <div className="big-circle"></div>

            <div className="center-right">
              <h1>Антон Зарубин</h1>
            </div>
          </div>
        </div>

      </div>


    </header>
  );
}

/* ================= CARD ================= */
type PrintCardProps = {
  title: string;
  image: string;
  tags?: string[];
  onClick?: () => void;
};

function PrintCard({ title, image, tags, onClick }: PrintCardProps) {
  return (
    <div className="print-card" onClick={onClick}>
      <img src={image} alt={title} className="print-card-img" />

      <div className="print-card-overlay">
        <div className="card-center">
          <div className="card-tags">
            {tags?.map((tag, i) => (
              <span key={i} className="card-tag">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="card-title">{title}</h2>
          <button className="card-btn">посмотреть</button>
        </div>
      </div>
    </div>
  );
}

/* ================= APP ================= */
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  // Отдельные состояния для каждой секции
  const [showCases, setShowCases] = useState(true);
  const [showAbout, setShowAbout] = useState(true);
  const [showPoly, setShowPoly] = useState(true);
  const [showCorpStyle, setShowCorpStyle] = useState(true);
  const [showWeb, setShowWeb] = useState(true);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const openModal = (content: React.ReactNode): void => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="portfolio">
      <Header />
      <div className="container">

      </div>
      <div className="nav-wrapper">
        <nav className="nav-line">
          <a href="#about">О себе</a>
          <a href="#polygraphy">Полиграфия</a>
          <a href="#corpstyle">Корп стиль</a>
          <a href="#web">Веб</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </div>

      <main className="portfolio-body">
        {/* Секция КЕЙСЫ */}
        <section className="cases container">
          <div className="cases-header">
            <div className="cases-circle">Кейсы</div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowCases(!showCases)}>
              <svg className={`toggle-icon ${showCases ? "up" : "down"}`} viewBox="0 0 100 100">
                <polyline points="20,60 50,30 80,60" />
              </svg>
            </button>
          </div>

          {showCases && (
            <div className="cases-controls">
              <div className="carousel-wrapper">
                <button className="carousel-btn left" onClick={scrollLeft}>‹</button>
                <div className="carousel" ref={scrollRef}>
                  <PrintCard title="Корпоративный стиль НеоДом" image={Corp} tags={["Корп.стиль", "Брендинг"]} onClick={() => openModal(<CorpStyleCase />)} />
                  <PrintCard title="Разработка обложки книги" image={book} tags={["Полиграфия", "Книги"]} onClick={() => openModal(<BookCoverCase />)} />
                  <PrintCard title="Разработка макета вкладыша" image={vklad} tags={["Вкладыши", "Полиграфия"]} onClick={() => openModal(<Vkladysh />)} />
                  <PrintCard title="Разработка макета лифлета для пекарни" image={leaf} tags={["Branding", "Print"]} onClick={() => openModal(<Leafleets />)} />
                </div>
                <button className="carousel-btn right" onClick={scrollRight}>›</button>
              </div>
            </div>
          )}
        </section>

        {/* Секция О СЕБЕ */}
        <section id="about" className="cases container">
          <div className="cases-header">
            <div className="menu-head"><h2>О себе</h2></div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowAbout(!showAbout)}>
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
        </section>

        {/* Секция ПОЛИГРАФИЯ */}
        <section id="polygraphy" className="cases container">
          <div className="cases-header">
            <div className="menu-head"><h2>Полиграфия</h2></div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowPoly(!showPoly)}>
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
        <section id="corpstyle" className="cases container">
          <div className="cases-header">
            <div className="menu-head"><h2>Корпоративный стиль</h2></div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowCorpStyle(!showCorpStyle)}>
              <svg className={`toggle-icon ${showCorpStyle ? "up" : "down"}`} viewBox="0 0 100 100">
                <polyline points="20,60 50,30 80,60" />
              </svg>
            </button>
          </div>
          {showCorpStyle && (
            <div className="cases-controls">
              <CorpStyle />
            </div>
          )}
        </section>

        {/* Секция ВЕБ-РАЗРАБОТКА */}
        <section id="web" className="cases container">
          <div className="cases-header">
            <div className="menu-head"><h2>Веб-разработка</h2></div>
            <div className="cases-line"></div>
            <button className="toggle" onClick={() => setShowWeb(!showWeb)}>
              <svg className={`toggle-icon ${showWeb ? "up" : "down"}`} viewBox="0 0 100 100">
                <polyline points="20,60 50,30 80,60" />
              </svg>
            </button>
          </div>
          {showWeb && (
            <div className="cases-controls">
              <Web />
            </div>
          )}
        </section>
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
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
              <i className="fas fa-envelope contact-icon"></i>
              <a href="mailto:shkatzman@mail.ru">shkatzman@mail.ru</a>
            </div>

            <div className="contact-item">
              <i className="fab fa-telegram contact-icon"></i>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">Telegram</a>
            </div>

            <div className="contact-item">
              <i className="fab fa-github contact-icon"></i>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}