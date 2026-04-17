import { useState, useRef } from 'react';
import "./App.css";
import "./polygraphy.css";
import { createPortal } from "react-dom";
import { PrintCard } from './components/PrintCard';
import { ProjectModal } from './components/ProjectModal';  // тоже стоит вынести
import { printItems, type Project } from './data/printItems';

// Остальные импорты картинок уже не нужны — они в data/printItems.ts

const Polygraphy = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <>
      <div className="polygraphy-carousel-wrapper">
        <button className="carousel-btn left" onClick={scrollLeft}>‹</button>

        <div className="polygraphy-carousel" ref={scrollRef}>
          {printItems.map((item, index) => (
            <PrintCard
              key={index}
              title={item.title}
              image={item.coverImage}
              tags={item.tags}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>

        <button className="carousel-btn right" onClick={scrollRight}>›</button>
      </div>

      {/* Модальное окно */}
      {selectedProject &&
        createPortal(
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />,
          document.body
        )
      }
    </>
  );
};

export default Polygraphy;