import React from 'react';

const Websites = () => {
  return (
    <div className="project-modal">
      <h2>Веб-проекты</h2>
      <div className="modal-content">
        <h3>«Шишка» / Task Manager</h3>
        <p>Fullstack веб-приложение для управления задачами (аналог Trello)</p>
        <p><strong>Технологии:</strong> Django, React, TypeScript, WebSockets</p>
        <p><strong>Функционал:</strong></p>
        <ul>
          <li>Канбан-доски и задачи</li>
          <li>Чат в реальном времени (WebSocket)</li>
          <li>Клиент-серверное взаимодействие через API</li>
        </ul>
        <p><strong>Сайт-портфолио (этот сайт)</strong></p>
        <p>React + TypeScript + Vite, адаптивная верстка, модальные окна с проектами</p>
        <div className="project-links-modal">
          <a href="https://github.com/U-3072440193/project_377" target="_blank" rel="noopener noreferrer">GitHub (Шишка)</a>
          <a href="https://github.com/U-3072440193/Project_391" target="_blank" rel="noopener noreferrer">GitHub (Портфолио)</a>
        </div>
      </div>
    </div>
  );
};

export default Websites;