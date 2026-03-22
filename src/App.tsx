import './App.css'
import React, { useState } from "react";
import lookupIcon from "./assets/lookup.svg";
import lookdownIcon from "./assets/lookdown.svg";

// 1. Сначала определяем интерфейсы
interface PrintCardProps {
  title: string;
  description?: string;
  image?: string;
}

interface CaseItemProps {
  title: string;
}

// 2. Теперь компоненты с типами
function PrintCard({ title, description, image }: PrintCardProps) {
  return (
    <div className="print-card">
      <div className="print-card-image">
        {image ? (
          <img src={image} alt={title} className="card-image" />
        ) : (
          <span>Изображение</span>
        )}
      </div>
      <h2>{title}</h2>
      {description && <p className="card-description">{description}</p>}
    </div>
  );
}

function CaseItem({ title }: CaseItemProps) {
  return (
    <div className="case-item">
      <div className="case-item-image">{/* Изображение */}</div>
      <p className="case-item-title">{title}</p>
    </div>
  );
}

function LogoCard() {
  return (
    <div className="logo-card">
      <div className="logo-image">{/* Логотип */}</div>
    </div>
  );
}

function App() {
  // Отдельные стейты для каждого блока
  const [isAboutOpen, setIsAboutOpen] = useState(true);
  const [isSkillsOpen, setIsSkillsOpen] = useState(true);
  const [isPrintOpen, setIsPrintOpen] = useState(true);
  const [isCorpstyleOpen, setIsCorpstyleOpen] = useState(true);
  const [isWebOpen, setIsWebOpen] = useState(true);

  // Функции для переключения
  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleSkills = () => setIsSkillsOpen(!isSkillsOpen);
  const togglePrint = () => setIsPrintOpen(!isPrintOpen);
  const toggleCorpstyle = () => setIsCorpstyleOpen(!isCorpstyleOpen);
  const toggleWeb = () => setIsWebOpen(!isWebOpen);

  return (
    <div className="portfolio">
      {/* БЛОК 1: ПРИВЕТСТВИЕ */}
      <section className="hero">
        <div className="container container-main">
          {/* Левый блок с сеткой 3x3 */}
          <div className="hero-grid">
            {/* Верхний ряд */}
            <div className="grid-cell top-left"></div>
            <div className="grid-cell top-center">
              <div className="split-cell">
                <div className="split-left"></div>
                <div className="split-right"></div>
              </div>
            </div>
            <div className="grid-cell top-right"></div>

            {/* Средний ряд */}
            <div className="grid-cell middle-left"></div>
            <div className="grid-cell center">
              <div className="greeting-box">
                <h3 className="greeting-text">
                  Приветствую вас на моей страничке,<br />
                  меня зовут <span className="name">Антон Зарубин</span><br />
                  и я предлагаю ознакомиться с моим портфолио.
                </h3>
              </div>
            </div>
            <div className="grid-cell middle-right"></div>

            {/* Нижний ряд */}
            <div className="grid-cell bottom-left"></div>
            <div className="grid-cell bottom-center">
              <div className="split-cell">
                <div className="split-left"></div>
                <div className="split-right"></div>
              </div>
            </div>
            <div className="grid-cell bottom-right"></div>
          </div>

          {/* Правый блок с навигацией */}
          <div className="hero-nav">
            <div className="hero-nav-items">
              <div className="hero-nav-item">
                <a href="#about">О себе</a>
              </div>
              <div className="hero-nav-item">
                <a href="#print">Полиграфия</a>
              </div>
              <div className="hero-nav-item">
                <a href="#corpstyle">Корпстиль</a>
              </div>
              <div className="hero-nav-item">
                <a href="#web">Веб-проекты</a>
              </div>
              <div className="hero-nav-item">
                <a href="#contact">Контакты</a>
              </div>
              <div className="hero-nav-item">
                <a href="#blog">Блог</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="outer-block">
        <div className="midlle-block-left1"></div>
        <div className="midlle-block-left2"></div>
        <div className="midlle-block-rigt"></div>
      </div>

      {/* БЛОК 2: О СЕБЕ */}
      <div className="about-container">
        <section id="about" className="about">
          <div className="container">
            <div className="outer-title" onClick={toggleAbout}>
              <div className="title">
                <h2>О себе</h2>
              </div>
              {isAboutOpen ? (
                <img className="icon" src={lookupIcon} alt="свернуть" />
              ) : (
                <img className="icon" src={lookdownIcon} alt="развернуть" />
              )}
            </div>

            {isAboutOpen && (
              <div className="about-grid">
                <div className="about-item-left">
                  <h3>Образование</h3>
                  <p>ИГХТУ 2008-2014<br />ВХК РАН<br />специальность: химия</p>
                </div>
                <div className="about-item-right">
                  <h3>Опыт работы</h3>
                  <ul className="experience-list">
                    <li>
                      <span className="date">2016-2018</span>
                      <span className="place">Типография «Икс-Пресс» (дизайнер)</span>
                    </li>
                    <li>
                      <span className="date">2018-2024</span>
                      <span className="place">Типография «Мегапринт» (дизайнер, печатник)</span>
                    </li>
                    <li>
                      <span className="date">2024-2025</span>
                      <span className="place">Первая цифровая типография (печатник, сублимация)</span>
                    </li>
                    <li>
                      <span className="date">2025–н.в.</span>
                      <span className="place">РА «Афина» (дизайнер)</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>

      <div className="outer-block">
        <div className="midlle-block-left1"></div>
        <div className="midlle-block-left2"></div>
        <div className="midlle-block-rigt"></div>
      </div>

      {/* БЛОК 3: НАВЫКИ */}
      <section className="skills">
        <div className="container">
          <div className="outer-title" onClick={toggleSkills}>
            <div className="title">
              <h2>Навыки</h2>
            </div>
            {isSkillsOpen ? (
              <img className="icon" src={lookupIcon} alt="свернуть" />
            ) : (
              <img className="icon" src={lookdownIcon} alt="развернуть" />
            )}
          </div>

          {isSkillsOpen && (
            <div className="skills-grid">
              {/* Подблок: Программы */}
              <div className="skills-category">
                <h3>Программы</h3>
                <ul className="skills-list">
                  <li>Adobe Illustrator</li>
                  <li>CorelDRAW</li>
                  <li>Adobe InDesign</li>
                  <li>Adobe Photoshop</li>
                  <li>Adobe Acrobat</li>
                </ul>
              </div>

              {/* Подблок: Технические навыки */}
              <div className="skills-category">
                <h3>Технические навыки</h3>
                <ul className="skills-list">
                  <li>Печать на плоттере Graphtec FC1600</li>
                  <li>Резка тиражей Eurocutter</li>
                  <li>Сублимационный каландр Monti Antonio</li>
                  <li>Konica Minolta C6000L</li>
                  <li>Брошюровка</li>
                  <li>Упаковка готовой продукции</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="outer-block">
        <div className="midlle-block-left1"></div>
        <div className="midlle-block-left2"></div>
        <div className="midlle-block-rigt"></div>
      </div>

      {/* БЛОК 4: ПОЛИГРАФИЧЕСКИЙ ДИЗАЙН */}
      <section id="print" className="print">
        <div className="container">
          <div className="outer-title" onClick={togglePrint}>
            <div className="title">
              <h2>Полиграфический дизайн</h2>
            </div>
            {isPrintOpen ? (
              <img className="icon" src={lookupIcon} alt="свернуть" />
            ) : (
              <img className="icon" src={lookdownIcon} alt="развернуть" />
            )}
          </div>

          {isPrintOpen && (
            <>
              {/* Подблок 4.1: Деловая полиграфия */}
              <div className="print-category">
                <h3>Деловая полиграфия</h3>
                <div className="print-grid">
                  <PrintCard title="Визитки" image="/src/assets/products/viz-shveika.jpg" />
                  <PrintCard title="Вкладыши" image="/src/assets/products/vklad-zash2.png" />
                  <PrintCard title="Листовки" image="/src/assets/products/listovka.jpg" />
                  <PrintCard title="Блокноты" image="/src/assets/products/bloknot-aero.png" />
                </div>
              </div>

              {/* Подблок 4.2: Многостраничная продукция */}
              <div className="print-category">
                <h3>Многостраничная продукция</h3>
                <div className="print-grid">
                  <PrintCard title="Квартальники" image="/src/assets/products/kvart.jpg" />
                  <PrintCard title="Лифлеты" image="/src/assets/products/leaf.jpg" />
                  <PrintCard title="Каталоги" image="/src/assets/products/katal.jpg" />
                  <PrintCard title="Прочая многостраничная продукция" image="/src/assets/products/knigga.png" />
                </div>
              </div>

              {/* Подблок 4.3: Конструктивная полиграфия */}
              <div className="print-category">
                <h3>Конструктивная полиграфия</h3>
                <div className="print-grid">
                  <PrintCard title="Вырубные изделия" />
                  <PrintCard title="Коробки" image="/src/assets/products/boxz.png" />
                </div>
              </div>

              {/* Подблок 4.4: Плакатная продукция */}
              <div className="print-category">
                <h3>Наружная рекламная продукция</h3>
                <div className="print-grid">
                  <PrintCard title="Афиши" />
                  <PrintCard title="Баннеры и вывески" />
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <div className="outer-block">
        <div className="midlle-block-left1"></div>
        <div className="midlle-block-left2"></div>
        <div className="midlle-block-rigt"></div>
      </div>

      {/* БЛОК 5: КОРПОРАТИВНЫЙ СТИЛЬ */}
      <section id="corpstyle" className="corpstyle">
        <div className="container">
          <div className="outer-title" onClick={toggleCorpstyle}>
            <div className="title">
              <h2>Корпоративный стиль</h2>
            </div>
            {isCorpstyleOpen ? (
              <img className="icon" src={lookupIcon} alt="свернуть" />
            ) : (
              <img className="icon" src={lookdownIcon} alt="развернуть" />
            )}
          </div>

          {isCorpstyleOpen && (
            <div className="case">
              <h3>inДом</h3>
              <p className="case-description">Агентство недвижимости, Иваново</p>

              <div className="case-items-grid">
                <CaseItem title="Логотип" />
                <CaseItem title="Визитки" />
                <CaseItem title="Бланк" />
                <CaseItem title="Папка" />
                <CaseItem title="Табличка «Продается»" />
                <CaseItem title="Конверт" />
                <CaseItem title="Фирменный пакет" />
                <CaseItem title="Бейдж" />
                <CaseItem title="Брелок" />
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="outer-block">
        <div className="midlle-block-left1"></div>
        <div className="midlle-block-left2"></div>
        <div className="midlle-block-rigt"></div>
      </div>

      {/* БЛОК 6: ВЕБ-РАЗРАБОТКА */}
      <section id="web" className="web">
        <div className="container">
          <div className="outer-title" onClick={toggleWeb}>
            <div className="title">
              <h2>Веб-разработка</h2>
            </div>
            {isWebOpen ? (
              <img className="icon" src={lookupIcon} alt="свернуть" />
            ) : (
              <img className="icon" src={lookdownIcon} alt="развернуть" />
            )}
          </div>

          {isWebOpen && (
            <>
              {/* Проект: Шишка */}
              <div className="web-project">
                <h3>«Шишка» / Task Manager</h3>
                <p className="project-description">
                  Django + React приложение с канбан-досками, задачами,
                  чатом в реальном времени и личными сообщениями
                </p>
                <div className="project-tech">
                  <span className="tech-badge">Django</span>
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">WebSockets</span>
                </div>
                <div className="project-links">
                  <a href="#" className="button">GitHub</a>
                  <a href="#" className="button">Демо</a>
                </div>
              </div>

              {/* Проект: Сайт-портфолио */}
              <div className="web-project">
                <h3>Сайт-портфолио (этот сайт)</h3>
                <p className="project-description">
                  React + TypeScript + Vite, адаптивная верстка,
                  модальные окна с проектами
                </p>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">TypeScript</span>
                  <span className="tech-badge">Vite</span>
                </div>
                <div className="project-links">
                  <a href="#" className="button">GitHub</a>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <div className="outer-block">
        <div className="midlle-block-left1"></div>
        <div className="midlle-block-left2"></div>
        <div className="midlle-block-rigt"></div>
      </div>

      {/* БЛОК 7: ДОПОЛНИТЕЛЬНО (ЛОГОТИПЫ) */}
      <section className="additional">
        <div className="container">
          <div className="title">
            <h2>Логотипы</h2>
          </div>

          <div className="logo-grid">
            <LogoCard />
            <LogoCard />
            <LogoCard />
            <LogoCard />
          </div>
        </div>
      </section>

      {/* БЛОК 8: КОНТАКТЫ (ФУТЕР) */}
      <footer id="contact" className="footer">
        <div className="container">
          <h2>Контакты</h2>
          <div className="contact-info">
            <p className="contact-name">Антон Зарубин</p>
            <div className="contact-links">
              <p>Email: <a href="mailto:anton@email.com">anton@email.com</a></p>
              <p>Telegram: <a href="#">@anton_z</a></p>
              <p>GitHub: <a href="#">github.com/anton</a></p>
            </div>
          </div>
          <p className="copyright">© 2025 | Антон Зарубин</p>
        </div>
      </footer>
    </div>
  );
}

export default App;