import React, { useEffect, useRef, useState } from 'react';
import { cubes } from '../data/cubesData';
import './vkladysh.css';

interface Cube {
  bg: string;
}

// Данные для кейса
const caseSteps = [
  {
    id: 1,
    title: 'О заказчике',
    description: 'Небольшая организация, специализирующаяся на производстве постельного белья.',
    details: 'Задача: создать макет вкладыша для упаковки КПБ 1,5 и 2,0 спальный. Срочный заказ. У заказчика отсутствует собственный дизайн-код, логотип, фотографии продукции.',
    image: '/src/assets/vklad-modal/customer.jpg'
  },
  {
    id: 2,
    title: 'Бриф',
    description: 'Согласование конструкции и размеров вкладыша.',
    details: 'Вкладыш состоит из лицевой стороны, корешка и обратной стороны (короче лицевой). Все сгибы усилены биговкой(первоначальный вариант планировался с тремя биговками). Формат: 590×350 мм (офсет на листе 620×470 мм). Оптимизация: 585×390 мм.',
    image: '/src/assets/vklad-modal/shemme.svg'
  },
  {
    id: 3,
    title: 'Создание макета',
    description: 'Разработка дизайна без готового логотипа.',
    details: 'Использовано шрифтовое решение — название обыграно рукописным шрифтом. Выбраны титульное изображение, расположение текстовых блоков. Преобладают белый и темно-серый цвета. Добавлены металлизированные Pantone 877c (серебро) и 871c (золото). Разработано 2 финальных варианта.',
    image: '/src/assets/vklad-modal/two.jpg'
  },
  {
    id: 4,
    title: 'Предпечатная подготовка',
    description: 'Подготовка макета к печати.',
    details: 'Вылеты под обрез — 3 мм. Цветовая модель — CMYK с выносными Pantone-плашками. Треппинг настроен для корректного наложения металлизированных красок. Спуск полос выполнен под лист 620×470 мм.',
    image: '/src/assets/vklad-modal/verst.jpg'
  },
  {
    id: 5,
    title: 'Результат',
    description: 'Макет согласован и передан в печать.',
    details: 'Металлизированные элементы обеспечат премиальный эффект. За счет оптимизации конструкции удалось снизить стоимость тиража без потери качества.',
    image: '/src/assets/vklad-modal/vklad.png'
  }
];

// Компонент с линиями Безье
const CaseFlow = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [paths, setPaths] = useState<
    { d: string; start: [number, number]; end: [number, number] }[]
  >([]);

 const updatePaths = () => {
  if (!svgRef.current) return;

  const svgRect = svgRef.current.getBoundingClientRect();

  const newPaths = [];

  for (let i = 0; i < caseSteps.length - 1; i++) {
    const current = stepRefs.current[i];
    const next = stepRefs.current[i + 1];

    if (!current || !next) continue;

    const a = current.getBoundingClientRect();
    const b = next.getBoundingClientRect();

    const startX = a.left + a.width / 2 - svgRect.left;
    const startY = a.bottom - svgRect.top;

    const endX = b.left + b.width / 2 - svgRect.left;
    const endY = b.top - svgRect.top;

    const distanceX = Math.abs(endX - startX);
    const distanceY = Math.abs(endY - startY);

    const isEven = i % 2 === 1;

    // 👉 разные настройки
    let dx, dy;

    if (isEven) {
      // 2,4,6 
      dx = Math.max(200, distanceX * 0.4);
      dy = distanceY * 0.5;
    } else {
      // 1,3,5 — были "струной" → усиливаем изгиб
      dx = Math.max(200, distanceX * 1.5);
      dy = distanceY * 0.5;
    }
    
    const d = `
      M ${startX} ${startY}
      C ${startX + dx} ${startY + dy},
        ${endX - dx} ${endY - dy},
        ${endX} ${endY}
    `;

    newPaths.push({
      d,
      start: [startX, startY],
      end: [endX, endY],
    });
  }

  setPaths(newPaths);
};

  useEffect(() => {
    updatePaths();
    window.addEventListener("resize", updatePaths);
    setTimeout(updatePaths, 100);

    return () => window.removeEventListener("resize", updatePaths);
  }, []);

  return (
    <div className="case-flow">
      <svg ref={svgRef} className="case-svg">
        <defs>
          <linearGradient id="case-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(251, 52, 190)" />
            <stop offset="100%" stopColor="rgb(255, 88, 88)" />
          </linearGradient>
        </defs>

        {paths.map((p, i) => (
          <g key={i}>
            {/* линия */}
            <path
              d={p.d}
              stroke="url(#case-gradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              className="case-path"
            />

            {/* кружок старт */}
            <circle
              cx={p.start[0]}
              cy={p.start[1]}
              r="5"
              fill="white"
              stroke="rgb(251, 52, 190)"
              strokeWidth="2"
            />

            {/* кружок конец */}
            <circle
              cx={p.end[0]}
              cy={p.end[1]}
              r="5"
              fill="white"
              stroke="rgb(255, 88, 88)"
              strokeWidth="2"
            />
          </g>
        ))}
      </svg>

      <div className="case-steps">
        {caseSteps.map((step, index) => (
          <div
            key={step.id}
            className="case-step"
            ref={(el) => {
              stepRefs.current[index] = el;
            }}
          > 
            <div className="case-step-image">
              <img src={step.image} alt={step.title} />
              
            </div>
            

            <div className="case-step-content">
              {/* <div className="case-step-number">{step.id}</div> */}
              <h3>{step.title}</h3>
              <p className="case-step-description">{step.description}</p>

              <div className="case-step-details">
                <p>{step.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Vkladysh = () => {
  return (
    <div className="project-modal">
      <div className="top-banner-modal">
        <img src="/src/assets/vklad-modal/top-vkl.jpg" alt="Вкладыши и наклейки" />
        <div className="grid-overlay">
          {cubes.map((cube: Cube, index: number) => (
            <div
              key={index}
              className="grid-cell"
              style={{ background: cube.bg }}
            />
          ))}
        </div>
      </div>

      <div className="modal-header">

        <h2>Вкладыши и наклейки</h2>

        
        <div className="project-stats">
          <span className="stat-badge">КПБ 1,5 и 2,0</span>
          <span className="stat-badge">Офсетная печать</span>
          <span className="stat-badge">Pantone 877c + 871c</span>
        </div>
        <h2>Кейс: Разработка вкладыша для «Алиса-Текстиль»</h2>
      </div>

      <CaseFlow />

      <div className="modal-footer-note">
        <p className="important-note">
          ⚡ Важно: монитор не может точно передать цвет металлизированных пантонов.
          В готовой продукции золотой и серебряный блеск будут выглядеть значительно
          эффектнее, чем имитация в CMYK.
        </p>
      </div>
      <h2>Другие вкладыши</h2>
      <div className="description-viz">
        <div className="mono">
          <img src="/src/assets/vklad-modal/vkl1.jpg" alt="Вкладыш пример" className='example-jpg' />
        </div>
        <div className="mono">
          <img src="/src/assets/vklad-modal/vkl2.jpg" alt="Вкладыш пример" className='example-jpg' />
        </div>
        <div className="mono">
          <img src="/src/assets/vklad-modal/vkl3.jpg" alt="Вкладыш пример" className='example-jpg' />
        </div>


      </div>
      <h2>Наклейки</h2>
      <div className="description-viz">
        <div className="mono">
          <img src="/src/assets/vklad-modal/nakl1.jpg" alt="Наклейки пример" className='example-jpg' />
        </div>
        <div className="mono">
          <img src="/src/assets/vklad-modal/nakl2.jpg" alt="Наклейки пример" className='example-jpg' />
        </div>
        <div className="mono">
          <img src="/src/assets/vklad-modal/nakl3.jpg" alt="Наклейки пример" className='example-jpg' />
        </div>


      </div>
    </div>
  );
};

export default Vkladysh;