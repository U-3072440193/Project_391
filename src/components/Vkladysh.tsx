import React from 'react';
import './modal.css';


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
    details: 'Вкладыш состоит из лицевой стороны, корешка и обратной стороны (короче лицевой). Все сгибы усилены биговкой (первоначальный вариант планировался с тремя биговками). Формат: 590×350 мм (офсет на листе 620×470 мм). Оптимизация: 585×390 мм.',
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

const Vkladysh = () => {
  return (
    <div className="project-modal">
      {/* Hero секция */}
      <div className="modal-hero">
        <div className="modal-hero-bg">
          <img src="/src/assets/vklad-modal/top-vkl.jpg" alt="Вкладыши и наклейки" />
          <div className="modal-hero-overlay"></div>
        </div>
        <div className="modal-hero-content">
          <div className="modal-badge">КЕЙС</div>
          <h1 className="modal-hero-title">
            Вкладыш для упаковки<br />
            <span className="accent">постельного белья</span>
          </h1>
          <p className="modal-hero-subtitle">
            Полный цикл разработки: от брифа до печати
          </p>
          <div className="project-stats">
            <span className="stat-badge">КПБ 1,5 и 2,0</span>
            <span className="stat-badge">Офсетная печать</span>
            <span className="stat-badge">Pantone 877c + 871c</span>
          </div>
        </div>
      </div>
      <div className="inner-proj-modal">
        

      {/* Краткая информация */}
      <div className="modal-info-grid">
        <div className="info-card">
          <div className="info-icon"><img src="/icons/target.svg" alt="Задача" /></div>
          <h3>Задача</h3>
          <p>Создать макет вкладыша для упаковки КПБ 1,5 и 2,0 спальный. Срочный заказ.</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><img src="/icons/time.svg" alt="Срок" /></div>
          <h3>Срок</h3>
          <p>3 дня от брифа до сдачи в печать</p>
        </div>
        <div className="info-card">
          <div className="info-icon"><img src="/icons/uniq.svg" alt="Особенность" /></div>
          <h3>Особенность</h3>
          <p>Металлизированные пантоны + оптимизация конструкции</p>
        </div>
      </div>

      {/* Процесс работы - блоки на 100% ширины */}
      <div className="modal-section">
        <div className="modal-section-header">
          <h2>Процесс работы</h2>
          <div className="section-line"></div>
        </div>

        <div className="process-steps">
          {caseSteps.map((step, index) => (
            <div key={step.id} className="process-step">
              <div className="process-step-image">
                <img src={step.image} alt={step.title} />
              </div>
              <div className="process-step-content">
                <h3>{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
                <div className="process-step-details">
                  <p>{step.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Важное примечание */}
      <div className="modal-section highlight">
        <div className="important-note">
          <span className="note-icon"><img src="/icons/warning.svg" alt="Внимание!" /></span>
          <div className='important-note-descr'>
            <strong>Важно:</strong> монитор не может точно передать цвет металлизированных пантонов.
            В готовой продукции золотой и серебряный блеск будут выглядеть значительно
            эффектнее, чем имитация в CMYK.
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Vkladysh;