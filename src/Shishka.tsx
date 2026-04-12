import React from 'react';
import './components/modal.css';
import './components/shishka.css';

const Shishka = () => {
  return (
    <div className="project-modal">

      {/* HERO */}
      <div className="modal-hero">
        <div className="modal-hero-bg">
          <img src="/src/assets/shishka/header.jpg" alt="Шишка Task Manager" />
          <div className="modal-hero-overlay"></div>
        </div>

        <div className="modal-hero-content">
          <div className="modal-badge">ВЕБ-РАЗРАБОТКА / FULLSTACK</div>

          <h1 className="modal-hero-title">
            Шишка<br />
            <span className="accent">Task Manager — Kanban-платформа</span>
          </h1>

          <p className="modal-hero-subtitle">
            Fullstack-приложение для управления задачами с real-time чатом
          </p>

          <div className="project-stats">
            <span className="stat-badge">Django + React</span>
            <span className="stat-badge">WebSockets</span>
            <span className="stat-badge">Kanban</span>
            <span className="stat-badge">Real-time чат</span>
          </div>
        </div>
      </div>

      <div className="inner-proj-modal">

        {/* INFO */}
        <div className="modal-info-grid">
          <div className="info-card">
            <div className="info-icon"><img src="/icons/project.svg" alt="Проект" /></div>
            <h3>О проекте</h3>
            <p>Полноценная Kanban-платформа для управления задачами и командной работы</p>
          </div>

          <div className="info-card">
            <div className="info-icon"><img src="/icons/tech.svg" alt="Технологии" /></div>
            <h3>Технологии</h3>
            <p>Django, DRF, React, TypeScript, WebSockets, Redis, TipTap</p>
          </div>

          <div className="info-card">
            <div className="info-icon"><img src="/icons/uniq.svg" alt="Особенность" /></div>
            <h3>Особенность</h3>
            <p>Real-time обновления, drag-and-drop, rich-text редактор</p>
          </div>
        </div>

        {/* PROCESS */}
        <div className="modal-section">
          <div className="modal-section-header">
            <h2>О проекте</h2>
            <div className="section-line"></div>
          </div>

          <div className="process-steps">

            {/* КОНТЕКСТ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <div className="placeholder-img">
                  [Здесь будет скриншот: современные аналоги Trello/Asana для контекста]
                </div>
              </div>
              <div className="process-step-content">
                <h3>Контекст</h3>
                <p className="process-step-description">
                  Современный рынок требует гибких инструментов для управления проектами
                </p>
                <div className="process-step-details">
                  <p>
                    Существующие решения (Trello, Jira, Asana) либо перегружены функционалом,
                    либо имеют высокий порог входа. Задача — создать сбалансированную
                    платформу с интуитивным интерфейсом и необходимым минимумом функций
                    для эффективной командной работы.
                  </p>
                </div>
              </div>
            </div>

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

            {/* НОВЫЙ БЛОК: полноширинная картинка с текстом */}
            <div className="full-width-image-block">
              <img src="/src/assets/shishka/main.jpg" alt="Интерфейс приложения" />
              <div className="image-caption-overlay">
                <div className="caption-content">
                  <h3 className="caption-title">Архитектура</h3>
                  <p className="caption-text">
                    Django REST Framework + React + Django Channels
                  </p>
                </div>
              </div>
            </div>

            {/* АРХИТЕКТУРА */}
            {/* АРХИТЕКТУРА */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <img src="/src/assets/shishka/shishka-schemme.jpg" alt="Схема архитектуры" />
              </div>
              <div className="process-step-content">

                <div className="process-step-details">
                  <p>
                    Бэкенд построен на Django с использованием DRF для REST API
                    и Django Channels для WebSocket-соединений. Redis выступает
                    в роли брокера для channel layers. Фронтенд на React получает
                    обновления через WebSocket без перезагрузки страницы.
                  </p>
                </div>

                {/* НОВЫЙ БЛОК: Технологический стек с иконками */}
                <div className="tech-stack">
                  <h4 className="tech-stack-title">Технологический стек</h4>
                  <div className="tech-grid">
                    <div className="tech-item">
                      <div className="tech-icon django-icon"><img src="/src/assets/shishka/logos-1.png" alt="лого" /></div>
                      <span>Django</span>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon react-icon"><img src="/src/assets/shishka/logos-2.png" alt="лого" /></div>
                      <span>React</span>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon drf-icon"><img src="/src/assets/shishka/logos-3.png" alt="лого" /></div>
                      <span>DRF</span>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon channels-icon"><img src="/src/assets/shishka/logos-4.png" alt="лого" /></div>
                      <span>Channels</span>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon redis-icon"><img src="/src/assets/shishka/logos-5.png" alt="лого" /></div>
                      <span>Redis</span>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon websocket-icon"><img src="/src/assets/shishka/logos-6.png" alt="лого" /></div>
                      <span>WebSocket</span>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon dndkit-icon"><img src="/src/assets/shishka/logos-7.png" alt="лого" /></div>
                      <span>@dnd-kit</span>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon tiptap-icon"><img src="/src/assets/shishka/logos-8.png" alt="лого" /></div>
                      <span>TipTap</span>
                    </div>
                    <div className="tech-item">
                      <div className="tech-icon postgresql-icon"><img src="/src/assets/shishka/logos-9.png" alt="лого" /></div>
                      <span>PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ОСНОВНОЙ ФУНКЦИОНАЛ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <div className="placeholder-gif">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="demo-video"
                  >
                    <source src="/src/assets/shishka/demo.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео
                  </video>
                </div>
              </div>
              <div className="process-step-content">
                <h3>Основной функционал</h3>
                <p className="process-step-description">
                  Kanban-доски, задачи, real-time обновления
                </p>
                <div className="process-step-details">
                  <p>
                    • Создание неограниченного количества досок и колонок<br />
                    • Drag-and-drop перемещение задач<br />
                    • Назначение дедлайнов с визуальной индикацией<br />
                    • Загрузка файлов к задачам<br />
                    • Rich-text редактор (TipTap) для описания задач<br />
                    • Система ролей: владелец / участник<br />
                    • Комментарии к задачам
                    • Внутренняя почта с функциями обмены файлов<br />
                  </p>
                </div>
              </div>
            </div>

            {/* REAL-TIME ЧАТ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <div className="placeholder-gif">
                  [Здесь будет GIF: отправка сообщения в чате и мгновенное появление]
                </div>
              </div>
              <div className="process-step-content">
                <h3>Real-time мессенджер</h3>
                <p className="process-step-description">
                  Личные сообщения с WebSocket-соединениями
                </p>
                <div className="process-step-details">
                  <p>
                    • Личные сообщения в реальном времени<br />
                    • WebSocket-соединения для мгновенной доставки<br />
                    • Индикация статуса сообщений (прочитано/не прочитано)<br />
                    • Поиск пользователей и создание диалогов<br />
                    • REST API как fallback при отключении WebSocket
                  </p>
                </div>
              </div>
            </div>

            {/* ТЕХНИЧЕСКИЕ ДЕТАЛИ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <div className="placeholder-img">
                  [Здесь будет скриншот кода: WebSocket consumer или React-компонент]
                </div>
              </div>
              <div className="process-step-content">
                <h3>Технические детали</h3>
                <p className="process-step-description">
                  Глубокая интеграция Django + React
                </p>
                <div className="process-step-details">
                  <p>
                    <strong>Backend:</strong> Django 4, DRF, Django Channels, Redis, SQLite/PostgreSQL<br />
                    <strong>Frontend:</strong> React 19, TypeScript, @dnd-kit, TipTap, WebSocket API<br />
                    <strong>API:</strong> REST API + WebSocket (для чата)<br />
                    <strong>Аутентификация:</strong> Кастомная модель пользователей
                  </p>
                </div>
              </div>
            </div>

            {/* РЕЗУЛЬТАТ */}
            <div className="process-step">
              <div className="process-step-image placeholder">
                <div className="mockup-item-final">
                  [Здесь будет финальный мокап: ноутбук/планшет с открытым приложением]
                </div>
              </div>
              <div className="process-step-content">
                <h3>Результат</h3>
                <p className="process-step-description">
                  Готовая к развитию fullstack-платформа
                </p>
                <div className="process-step-details">
                  <p>
                    Создана полностью функциональная Kanban-система с real-time чатом,
                    демонстрирующая глубокое понимание архитектуры fullstack-приложений.
                    Проект готов к рефакторингу, внедрению TypeScript, тестов и CI/CD.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ССЫЛКИ */}
        <div className="modal-section">
          <div className="modal-section-header">
            <h2>Ссылки</h2>
            <div className="section-line"></div>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/U-3072440193/project_377"
              className="project-link-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub репозиторий
            </a>
            <a
              href="#"
              className="project-link-btn disabled"
              target="_blank"
              rel="noopener noreferrer"
            >
              Демо (в разработке)
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Shishka;