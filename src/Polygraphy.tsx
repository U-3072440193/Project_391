import React, { useState, useRef } from 'react';
import "./App.css";
import "./polygraphy.css";

// Тип для карточки
type PrintCardProps = {
  title: string;
  image: string;
  tags?: string[];
  onClick?: () => void;
};

// Компонент PrintCard внутри Polygraphy
function PrintCard({ title, image, tags, onClick }: PrintCardProps) {
  return (
    <div className="print-card polygraphy-card" onClick={onClick}>
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

// Тип для блока контента в модалке
type ContentBlock = 
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'images'; content: string[]; captions?: string[]; layout?: 'grid' | 'row' | 'column' };

// Тип для проекта
type Project = {
  title: string;
  coverImage: string;
  tags: string[];
  blocks: ContentBlock[];
};

// Модальное окно для деталей проекта
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Шапка с заголовком и кнопкой */}
        <div className="project-modal-header">
          <h2 className="project-modal-title">{project.title}</h2>
          <button className="project-modal-close" onClick={onClose}>×</button>
        </div>
        
        {/* Скроллящаяся область с контентом */}
        <div className="project-modal-body">
          {project.blocks.map((block, index) => (
            <div key={index} className={`project-modal-block block-${block.type}`}>
              {block.type === 'heading' && (
                <h3 className="project-modal-heading">{block.content}</h3>
              )}
              {block.type === 'text' && (
                <p className="project-modal-text">{block.content}</p>
              )}
              {block.type === 'images' && (
                <div className={`project-modal-images layout-${block.layout || 'grid'}`}>
                  {(block.content as string[]).map((img, imgIndex) => (
                    <div key={imgIndex} className="project-modal-image">
                      <img src={img} alt={`${project.title} ${imgIndex + 1}`} />
                      {block.captions?.[imgIndex] && (
                        <p className="project-modal-caption">{block.captions[imgIndex]}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Polygraphy = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  // Данные для карточек с гибкой структурой блоков
  const printItems: Project[] = [
    // ==================== СЕРИЯ ВКЛАДЫШЕЙ ====================
    {
      title: "Серия вкладышей для постельного белья",
      coverImage: "/src/assets/vklad-modal/vklad.png",
      tags: ["Вкладыши", "Офсетная печать", "Серия"],
      blocks: [
        { type: 'heading', content: "Вкладыш для КПБ" },
        { type: 'text', content: "Разработка вкладыша КПБ с двумя биговками и металлизированным пантоном 871с." },
        { type: 'images', content: ["/src/assets/vklad-modal/alis.jpg"], layout: 'column' },
        { type: 'text', content: "Размеры, места биговки, расположение пантона." },
        { type: 'images', content: ["/src/assets/vklad-modal/shemme.svg"], layout: 'column', captions: ["Схема вкладыша с размерами"] },
        
        { type: 'heading', content: "Вкладыш 'Защита и комфорт'" },
        { type: 'text', content: "Разработка вкладыша для упаковки постельного белья. 270×350мм, мелованная бумага." },
        { type: 'images', content: ["/src/assets/vklad-modal/merz.jpg"], layout: 'column' },
        
        { type: 'heading', content: "Финишная обработка" },
        { type: 'text', content: "Вырубка по контуру, контроль качества." }
      ]
    },
    // ==================== ЛИФЛЕТЫ ====================
    {
      title: "Буклеты и лифлеты",
      coverImage: "/src/assets/bookl-modal/sdob-ul.jpg",
      tags: ["Лифлет", "Офсетная печать", "Серия"],
      blocks: [
        { type: 'heading', content: "Лифлет для пекарни «Сдобная улица»" },
        { type: 'text', content: 'Разработка двустороннего лифлета для пекарни "Сдобная улица".' },
        { type: 'images', content: ["/src/assets/bookl-modal/sdob-ul1.jpg"], layout: 'column' },
        { type: 'images', content: ["/src/assets/bookl-modal/sdob-ul2.jpg"], layout: 'column' },
  
      ]
    },
    
    // ==================== СЕРИЯ ЛИСТОВОК ====================
    {
      title: "Серия рекламных листовок",
      coverImage: "/src/assets/list-modal/ikspr.jpg",
      tags: ["Листовки", "Офсетная печать", "Серия"],
      blocks: [
        
    
        { type: 'heading', content: "Листовка для Икспресс" },
        { type: 'text', content: "Разработка рекламной листовки для нового подразделения типографии Икспресс. Формат А5 4+0, мелованная бумага, полноцветная печать." },
        { type: 'images', content: ["/src/assets/list-modal/ikspr-inner.jpg"], layout: 'column' },
        
        { type: 'heading', content: "Листовки для Суши 37" },
        { type: 'text', content: "Рекламные двусторонние листовки А5, мелованная бумага." },
        { type: 'images', content: ["/src/assets/list-modal/su1.jpg", "/src/assets/list-modal/su2.jpg"], layout: 'row',  }
      ]
    },
    
    // ==================== СЕРИЯ ВИЗИТОК ====================
    {
      title: "Серия корпоративных визиток",
      coverImage: "/src/assets/viz-modal/pulse.jpg",
      tags: ["Визитки", "Корпоративный стиль", "Серия"],
      blocks: [
        { type: 'heading', content: "Визитки Ultronix" },
        { type: 'text', content: "Разработка визиток для компаний Ultronix, 4+4, цифровая печать." },
        { type: 'images', content: [
          "/src/assets/viz-modal/ultr1.jpg",
          "/src/assets/viz-modal/ultr2.jpg",
        ], layout: 'row', },
        
        { type: 'heading', content: "Визитки Pulse" },
        { type: 'text', content: "Разработка визиток для компаний Pulse, 4+4, офсетная печать." },
        { type: 'images', content: [
          "/src/assets/viz-modal/pulse1.jpg",
          "/src/assets/viz-modal/pulse2.jpg",
        ], layout: 'row', },
        { type: 'heading', content: "Визитки Швейка37" },
        { type: 'text', content: "Разработка визиток для Швейка37, 4+0, цифровая печать." },
        { type: 'images', content: [
          "/src/assets/viz-modal/viz-shveika1.jpg",
        ], layout: 'column', },
        { type: 'heading', content: "Визитки Checkpoint" },
        { type: 'text', content: "Разработка визиток для автомастерской, 4+0, цифровая печать." },
        { type: 'images', content: [
          "/src/assets/viz-modal/checkpoint1.jpg",
        ], layout: 'column', },
        { type: 'heading', content: "Визитки Точка Сбора" },
        { type: 'text', content: "Разработка визиток для Точки Сбора, 4+0, цифровая печать." },
        { type: 'images', content: [
          "/src/assets/viz-modal/toch1.jpg",
        ], layout: 'column', },

        { type: 'text', content: "Каждая визитка разработана с учётом корпоративного стиля компании и требований к печати." },
      ]
    },
    
    // ==================== СЕРИЯ БЛОКНОТОВ ====================
    {
      title: "Серия фирменных блокнотов",
      coverImage: "/src/assets/blokn-modal/bloknot-aero.png",
      tags: ["Блокноты", "Корпоративный стиль", "Серия"],
      blocks: [
        { type: 'heading', content: "Блокнот «Аэрооктябрь»" },
        { type: 'text', content: "Разработка дизайна фирменного блокнота. Офсетная бумага, твёрдая обложка." },
        { type: 'images', content: ["/src/assets/blokn-modal/aero1.jpg", "/src/assets/blokn-modal/aero2.jpg"], layout: 'row', },
        
        { type: 'heading', content: "Блокнот для Бурят Фармации" },
        { type: 'text', content: "Фирменный блокнот для фармацевтической компании. Корпоративные цвета, логотип на обложке." },
        { type: 'images', content: ["/src/assets/blokn-modal/bur1.jpg", "/src/assets/blokn-modal/bur2.jpg", "/src/assets/blokn-modal/bur3.jpg"], layout: 'row',  }
      ]
    },
    
    // ==================== ОТДЕЛЬНЫЕ ПРОЕКТЫ ====================
    {
      title: "Вырубная коробка",
      coverImage: "/src/assets/vyrub-modal/boxz.png",
      tags: ["Вырубные изделия", "Полиграфия"],
      blocks: [
        { type: 'text', content: "Разработка дизайна и конструирование коробки для подарков." },
        { type: 'images', content: ["/src/assets/vyrub-modal/korobka2.jpg"], layout: 'column' },
        { type: 'text', content: "Развертка коробки с размерами и местами склейки." }
      ]
    },
    {
      title: "Хангер на дверь для отеля 'Жар-Птицы'",
      coverImage: "/src/assets/vyrub-modal/hanger.png",
      tags: ["Вырубные изделия", "Полиграфия"],
      blocks: [
        { type: 'text', content: "Разработка дизайна хангера для дверей гостиничного номера. Вырубка по штанц-форме, двусторонняя печать, бумага 300гр." },
        { type: 'images', content: ["/src/assets/vyrub-modal/zhar.jpg"], layout: 'column' }
      ]
    },
    {
      title: "Квартальный календарь для Арены",
      coverImage: "/src/assets/kvart-modal/kvart.jpg",
      tags: ["Календари", "Полиграфия", "Печать"],
      blocks: [
        { type: 'text', content: "Дизайн квартального календаря для спортивного комплекса. Постер 297×210мм, подложка 297×160мм, блок 297×145мм." },
        { type: 'images', content: ["/src/assets/kvart-modal/arena.jpg"], layout: 'column' }
      ]
    },
    {
      title: "Баннер для ООО Трансметалл",
      coverImage: "/src/assets/banner-modal/transmetall.jpg",
      tags: ["Баннеры", "Полиграфия", "Широкоформатная печать"],
      blocks: [
        { type: 'text', content: "Разработка дизайна наружного баннера для компании Трансметалл. Широкоформатная печать, размер 2×3 м." },
        { type: 'images', content: ["/src/assets/banner-modal/transmetall1.jpg"], layout: 'column' },
        { type: 'text', content: "Баннер размещён на фасаде здания, виден с большого расстояния." }
      ]
    },
    {
      title: "Афиша",
      coverImage: "/src/assets/afisha-modal/stenk.jpg",
      tags: ["Наружная реклама", "Полиграфия", "Афиша"],
      blocks: [
        { type: 'text', content: "Дизайн афиши для культурного мероприятия. 297×465мм." },
        { type: 'images', content: ["/src/assets/afisha-modal/stenk1.jpg"], layout: 'column' }
      ]
    }
  ];

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
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Polygraphy;