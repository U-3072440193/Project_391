import React from 'react';
import './web.css';

const Web = () => {
  return (
    <div className="web-projects">
      
      {/* Проект 1: Шишка / Task Manager */}
      <div className="web-project-row">
        <div className="web-project-image">
          <img src="/src/assets/web/shishka.gif" alt="Шишка Task Manager" />
        </div>
        <div className="web-project-content">
          <h3 className="web-project-title">«Шишка» / Task Manager</h3>
          <p className="web-project-description">
            Fullstack веб-приложение для управления задачами (аналог Trello):
            канбан-доски, задачи, чат в реальном времени и личные сообщения.
            Реализована серверная логика на Django, REST API и WebSocket-соединения
            для обновления данных без перезагрузки страницы.
          </p>
          <div className="web-project-features">
            <strong>Текущий функционал:</strong>
            <ul>
              <li>Канбан-доски и задачи</li>
              <li>Чат в реальном времени (WebSocket)</li>
              <li>Клиент-серверное взаимодействие через API</li>
            </ul>
            <p className="project-status">Проект находится в стадии активной разработки</p>
          </div>
          <div className="web-project-tech">
            <span className="tech-badge">Django</span>
            <span className="tech-badge">React</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">WebSockets</span>
          </div>
          <div className="web-project-links">
            <a href="https://github.com/U-3072440193/project_377" className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
              Демо
            </a>
          </div>
        </div>
      </div>

      {/* Проект 2: Сайт-портфолио */}
      <div className="web-project-full">
        <div className="web-project-full-content">
          <h3 className="web-project-title">Сайт-портфолио (этот сайт)</h3>
          <p className="web-project-description">
            React + TypeScript + Vite, адаптивная верстка, модальные окна с проектами
          </p>
          <div className="web-project-tech">
            <span className="tech-badge">React</span>
            <span className="tech-badge">TypeScript</span>
            <span className="tech-badge">Vite</span>
          </div>
          <div className="web-project-links">
            <a href="https://github.com/U-3072440193/Project_391" className="project-link" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Web;