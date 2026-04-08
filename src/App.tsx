import "./App.css";
import "./components/modal.css";
import type { ReactNode } from "react";
import React, { useState, useRef } from "react";

// модалки
import Vkladysh from "./components/Vkladysh";
import BookCoverCase from "./components/BookCoverCase";
import PosterCase from "./components/PosterCase";
import LeafleetCase from "./components/LeafleetCase";
import About from "./About";
import AboutMirror from "./AboutMirror";
import Polygraphy from "./Polygraphy";
import CorpStyle from "./CorpStyle";
import Shishka from "./Shishka";
import CorpStyleCase from "./components/CorpStyleCase";
import Web from "./Web";

// картинки
import leaf from "./assets/products/leaf-sd.jpg";
import vklad from "./assets/products/vklad.png";
import book from "./assets/products/book.jpg";
import Corp from "./assets/products/corp-style.png";
import poster from "./assets/products/poster.jpg";
import shishkaGif from "./assets/web/shishka.gif";

/* ================= HEADER ================= */
function Header() {
  return (
    <>
      {/* HERO (только фон) */}
      <header className="header">
        <div className="hero-box">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>
        </div>
      </header>

      {/* ВЫНЕСЕННЫЙ БЛОК С ЛИНИЯМИ */}
      <div className="hero-content-wrapper">

        {/* ЛИНИИ ТЕПЕРЬ ТУТ */}
        <svg className="rays" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <line x1="500" y1="150" x2="130" y2="500" />
          <line x1="500" y1="150" x2="300" y2="500" />
          <line x1="500" y1="150" x2="500" y2="500" />
          <line x1="500" y1="150" x2="700" y2="500" />
          <line x1="500" y1="150" x2="870" y2="500" />
        </svg>

        <div className="schema-center">
          <div className="inner-sh-ce">
            <div className="center-left">
            <h3>Приветствую вас на моей страничке</h3>
            <h3 className="muted">Предлагаю посмотреть моё портфолио</h3>
          </div>

          <div className="big-circle"></div>

          <div className="center-right">
            <h1>Антон Зарубин</h1>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
}

/* ================= SERVICE CARD (большая карточка как у Polygraphy) ================= */
type ServiceCardProps = {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
};

function ServiceCard({ title, description, image, onClick }: ServiceCardProps) {
  return (
    <div className="service-card-full" onClick={onClick}>
      {image && <img src={image} alt={title} className="service-card-img" />}
      <div className="service-card-overlay">
        <div className="service-card-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="service-card-btn">Подробнее</button>
        </div>
      </div>
    </div>
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
                  <PrintCard
                    title="Корпоративный стиль НеоДом"
                    image={Corp}
                    tags={["Корп.стиль", "Брендинг"]}
                    onClick={() => openModal(<CorpStyleCase />)}
                  />
                  <PrintCard
                    title="Разработка обложки книги"
                    image={book}
                    tags={["Полиграфия", "Книги"]}
                    onClick={() => openModal(<BookCoverCase />)}
                  />
                  <PrintCard
                    title="Разработка серии постеров"
                    image={poster}
                    tags={["Полиграфия", "плакат"]}
                    onClick={() => openModal(<PosterCase />)}
                  />
                  {/* <PrintCard 
                    title="Разработка макета вкладыша" 
                    image={vklad} 
                    tags={["Вкладыши", "Полиграфия"]} 
                    onClick={() => openModal(<Vkladysh />)} 
                  />
                  <PrintCard 
                    title="Разработка макета лифлета для пекарни" 
                    image={leaf} 
                    tags={["Branding", "Print"]} 
                    onClick={() => openModal(<LeafleetCase />)} 
                  /> */}
                </div>
                <button className="carousel-btn right" onClick={scrollRight}>›</button>
              </div>
            </div>
          )}
        </section>

        {/* Секция О СЕБЕ */}
        <section id="about" className="about-section">
  <div className="cases container">
    <div className="cases-header">
      <div className="menu-head about-head"><h2>О себе</h2></div>
      <div className="cases-line about-head-line"></div>

      <button className="toggle about-head-btn" onClick={() => setShowAbout(!showAbout)}>
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

        {/* Секция КОРПОРАТИВНЫЙ СТИЛЬ - большая карточка на всю ширину */}
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
              {/* Карточка для открытия модалки Shishka */}
              <ServiceCard
                title="Сайт для кофеен «Шишка»"
                description="Разработка современного сайта с атмосферным дизайном и плавными анимациями"
                image={shishkaGif}
                onClick={() => openModal(<Shishka />)}
              />

              {/* Карточка для сайта-портфолио */}
              <ServiceCard
                title="Сайт-портфолио"
                description="React + TypeScript + Vite, адаптивная верстка, модальные окна с проектами"
                image={shishkaGif} // замени на свою картинку для портфолио
                onClick={() => window.open('https://github.com/U-3072440193/Project_391', '_blank')}
              />
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