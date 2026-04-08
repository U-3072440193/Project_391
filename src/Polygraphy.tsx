import React, { useState,useRef } from 'react';
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

// Модальное окно для деталей проекта
interface ProjectModalProps {
  title: string;
  description: string;
  images: string[];
  onClose: () => void;
}

const ProjectModal = ({ title, description, images, onClose }: ProjectModalProps) => {
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose}>×</button>
        
        <h2 className="project-modal-title">{title}</h2>
        <p className="project-modal-description">{description}</p>
        
        <div className="project-modal-images">
          {images.map((img, index) => (
            <div key={index} className="project-modal-image">
              <img src={img} alt={`${title} ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Polygraphy = () => {
  const [selectedProject, setSelectedProject] = useState<{
    title: string;
    description: string;
    images: string[];
  } | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

const scrollLeft = () => {
  scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
};

const scrollRight = () => {
  scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
};

  // Данные для карточек с деталями
  const printItems = [
    {
      title: "Вкладыш для КПБ",
      image: "/src/assets/vklad-modal/vklad.png",
      tags: ["Вкладыши", "Офсетная печать","Металлизированные пантоны"],
      description: "Разработка вкладыша КПБ с двумя биговками и металлизированным пантоном 871с.",
      images: [
        "/src/assets/vklad-modal/vklad.png",
        '/src/assets/vklad-modal/shemme.svg',

        
      ]
    },
     {
      title: "Рекламный лифлет для пекарни",
      image: "/src/assets/bookl-modal/sdob-ul.jpg",
      tags: ["Листовки", "Офсетная печать"],
      description: 'Разработка двустороннего лифлета для пекарни "Сдобная улица".',
      images: [
        "/src/assets/bookl-modal/sdob-ul1.jpg",
        "/src/assets/bookl-modal/sdob-ul2.jpg",
        
      ]
    },
    {
      title: "Рекламная листовка Икспресс",
      image: "/src/assets/list-modal/ikspr.jpg",
      tags: ["Листовки", "Офсетная печать"],
      description: "Разработка рекламной листовки для нового подразделения типографии Икспресс. Формат А5 4+0, мелованная бумага, полноцветная печать.",
      images: [
        "/src/assets/list-modal/ikspr-inner.jpg",
        
      ]
    },
    {
      title: "Односторонние визитки для Ultronix",
      image: "/src/assets/viz-modal/ultr.jpg",
      tags: ["Визитки", "Полиграфия", "Печать"],
      description: "Дизайн двусторонних визиток для Ultronix. 90х50мм, бумага 300гр., цифровая печать.",
      images: [
        "/src/assets/viz-modal/ultr1.jpg",
        "/src/assets/viz-modal/ultr2.jpg"
      ]
    },
    {
      title: "Хангер на дверь для отеля 'Жар-Птицы'",
      image: "/src/assets/vyrub-modal/hanger.png",
      tags: ["Вырубные изделия", "Полиграфия"],
      description: "Разработка дизайна хангера для дверей гостиничного номера. Вырубка по штанц-форме, двусторонняя печать, бумага 300гр.",
      images: [
        "/src/assets/vyrub-modal/zhar.jpg",
        
      ]
    },
    {
      title: "Листовки для Суши 37",
      image: "/src/assets/list-modal/listovka1.jpg",
      tags: ["Листовки", "Офсетная печать"],
      description: "Рекламные двусторонние листовки А5, мелованная бумага",
      images: [
        "/src/assets/list-modal/su1.jpg",
        "/src/assets/list-modal/su2.jpg",
        
      ]
    },
    {
      title: "Вкладыш 'Защита и комфорт' для ООО Мерцана",
      image: "/src/assets/vklad-modal/vklad-zash22.jpg",
      tags: ["Вкладыши", "Полиграфия"],
      description: "Разработка вкладыша для упаковки постельного белья.270х350мм, мелованная бумага.",
      images: [
        "/src/assets/vklad-modal/merz.jpg",
        
      ]
    },
    {
      title: "Квартальный календарь для Арены",
      image: "/src/assets/kvart-modal/kvart.jpg",
      tags: ["Календари", "Полиграфия", "Печать"],
      description: "Дизайн квартального календаря для спортивного комплекса. Постер 297х210мм, поодложка 297х160мм, блок 297х145мм",
      images: [
        "/src/assets/kvart-modal/arena.jpg",
        
      ]
    },
    {
      title: "Блокнот 'Аэрооктябрь'",
      image: "/src/assets/blokn-modal/bloknot-aero.png",
      tags: ["Блокноты", "Полиграфия"],
      description: "Разработка дизайна фирменного блокнота. Твердая обложка с тиснением, офсетная бумага, ляссе.",
      images: [
        "/src/assets/blokn-modal/aero1.jpg",
        "/src/assets/blokn-modal/aero2.jpg",
      ]
    },
    {
      title: "Двусторонние визитки Pulse",
      image: "/src/assets/viz-modal/pulse.jpg",
      tags: ["Визитки", "Полиграфия", "Печать"],
      description: "Дизайн двусторонних визиток для  Pulse. 90х50мм, 4+4, цифровая печать.",
      images: [
        "/src/assets/viz-modal/pulse1.jpg",
        "/src/assets/viz-modal/pulse2.jpg"
      ]
    },
    {
      title: "Баннер для ООО Трансметалл",
      image: "/src/assets/banner-modal/transmetall.jpg",
      tags: ["Баннеры", "Полиграфия", "Широкоформатная печать"],
      description: "Разработка дизайна наружного баннера для компании Трансметалл. Широкоформатная печать, размер 2×3 м.",
      images: [
        "/src/assets/banner-modal/transmetall1.jpg",
      ]
    },
    {
      title: "Блокнот для Бурят Фармации",
      image: "/src/assets/blokn-modal/bur.png",
      tags: ["Блокноты", "Полиграфия"],
      description: "Фирменный блокнот для фармацевтической компании. Корпоративные цвета, логотип на обложке.",
      images: [
        "/src/assets/blokn-modal/bur1.jpg",
        "/src/assets/blokn-modal/bur2.jpg",
        "/src/assets/blokn-modal/bur3.jpg",
      ]
    },
    {
      title: "Афиша",
      image: "/src/assets/afisha-modal/stenk.jpg",
      tags: ["Наружная реклама", "Полиграфия", "Афиша"],
      description: "Дизайн афиши для культурного мероприятия.297х465мм",
      images: [
        "/src/assets/afisha-modal/stenk1.jpg",
      ]
    },
    {
      title: "Односторонние визитки для Швейка37",
      image: "/src/assets/viz-modal/viz-shveika.jpg",
      tags: ["Визитки", "Полиграфия", "Печать"],
      description: "Односторонняя визитка для маленького Ателье.",
      images: [
        "/src/assets/viz-modal/viz-shveika1.jpg",
        
      ]
    },
    {
      title: "Односторонние визитки для Точки Сбора",
      image: "/src/assets/viz-modal/toch.jpg",
      tags: ["Визитки", "Полиграфия", "Печать"],
      description: "Одностороняя визитка для Точки Сбора",
      images: [
        "/src/assets/viz-modal/toch1.jpg",
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
        image={item.image}
        tags={item.tags}
        onClick={() => setSelectedProject({
          title: item.title,
          description: item.description,
          images: item.images
        })}
      />
    ))}
  </div>

  <button className="carousel-btn right" onClick={scrollRight}>›</button>
</div>

      {/* Модальное окно */}
      {selectedProject && (
        <ProjectModal
          title={selectedProject.title}
          description={selectedProject.description}
          images={selectedProject.images}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Polygraphy;