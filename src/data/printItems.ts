import vkladImg from "../assets/vklad-modal/vklad.png";
import alisImg from "../assets/vklad-modal/alis.jpg";
import shemmeImg from "../assets/vklad-modal/shemme.svg";
import merzImg from "../assets/vklad-modal/merz.jpg";

import sdobUlImg from "../assets/bookl-modal/sdob-ul.webp";
import sdobUl1Img from "../assets/bookl-modal/sdob-ul1.jpg";
import sdobUl2Img from "../assets/bookl-modal/sdob-ul2.jpg";
import katalog1Img from "../assets/bookl-modal/katalog1.jpg";
import katalog2Img from "../assets/bookl-modal/katalog2.jpg";
import katalog3Img from "../assets/bookl-modal/katalog3.jpg";
import katalog4Img from "../assets/bookl-modal/katalog4.jpg";

import iksprImg from "../assets/list-modal/ikspr.webp";
import iksprInnerImg from "../assets/list-modal/ikspr-inner.jpg";
import su1Img from "../assets/list-modal/su1.jpg";
import su2Img from "../assets/list-modal/su2.jpg";

import pulseImg from "../assets/viz-modal/pulse.webp";
import pulse1Img from "../assets/viz-modal/pulse1.jpg";
import pulse2Img from "../assets/viz-modal/pulse2.jpg";
import ultr1Img from "../assets/viz-modal/ultr1.jpg";
import ultr2Img from "../assets/viz-modal/ultr2.jpg";
import vizShveika1Img from "../assets/viz-modal/viz-shveika1.jpg";
import checkpoint1Img from "../assets/viz-modal/checkpoint1.jpg";
import toch1Img from "../assets/viz-modal/toch1.jpg";

import bloknotAeroImg from "../assets/blokn-modal/bloknot-aero.png";
import aero1Img from "../assets/blokn-modal/aero1.jpg";
import aero2Img from "../assets/blokn-modal/aero2.jpg";
import bur1Img from "../assets/blokn-modal/bur1.jpg";
import bur2Img from "../assets/blokn-modal/bur2.jpg";
import bur3Img from "../assets/blokn-modal/bur3.jpg";

import boxzImg from "../assets/vyrub-modal/boxz.png";
import korobka2Img from "../assets/vyrub-modal/korobka2.jpg";
import hangerImg from "../assets/vyrub-modal/hanger.png";
import zharImg from "../assets/vyrub-modal/zhar.jpg";

import kvartImg from "../assets/kvart-modal/kvart.webp";
import arenaImg from "../assets/kvart-modal/arena.jpg";
import sportcoImg from "../assets/kvart-modal/sportco.jpg";
import burKvartImg from "../assets/kvart-modal/bur.jpg";

import transmetallImg from "../assets/banner-modal/transmetall.jpg";
import transmetall1Img from "../assets/banner-modal/transmetall1.jpg";

/* import stenkImg from "../assets/afisha-modal/stenk.jpg";
import stenk1Img from "../assets/afisha-modal/stenk1.jpg"; */

import katalImg from "../assets/products/katal.jpg";

// Тип для блока контента в модалке
export type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'heading'; content: string }
  | { type: 'images'; content: string[]; captions?: string[]; layout?: 'grid' | 'row' | 'column' };

// Тип для проекта
export type Project = {
  title: string;
  coverImage: string;
  tags: string[];
  blocks: ContentBlock[];
};

export const printItems: Project[] = [
  {
    title: "Вкладыши в упаковку",
    coverImage: vkladImg,
    tags: ["Вкладыши", "Офсетная печать", "Сборник макетов"],
    blocks: [
      { type: 'heading', content: "Вкладыш для КПБ" },
      { type: 'text', content: "Разработка вкладыша КПБ с двумя биговками и металлизированным пантоном 871с. 5+0" },
      { type: 'images', content: [alisImg], layout: 'column' },
      { type: 'text', content: "Размеры, места биговки." },
      { type: 'images', content: [shemmeImg], layout: 'column' },
      { type: 'heading', content: "Вкладыш 'Защита и комфорт'" },
      { type: 'text', content: "Разработка вкладыша для упаковки постельного белья. 270×350мм, мелованная бумага. Логотип с тиснением золотой фольгой" },
      { type: 'images', content: [merzImg], layout: 'column' },
    ]
  },
  {
    title: "Буклеты и лифлеты",
    coverImage: sdobUlImg,
    tags: ["Лифлет", "Офсетная печать", "Серия"],
    blocks: [
      { type: 'heading', content: "Лифлет для пекарни «Сдобная улица»" },
      { type: 'text', content: 'Разработка двустороннего лифлета для пекарни "Сдобная улица". 297х210мм, 4+4, 2 биговки 100/100/97мм' },
      { type: 'images', content: [sdobUl1Img], layout: 'column' },
      { type: 'images', content: [sdobUl2Img], layout: 'column' },
    ]
  },
  {
    title: "Рекламные листовки",
    coverImage: iksprImg,
    tags: ["Листовки", "Офсетная печать", "Сборник макетов"],
    blocks: [
      { type: 'heading', content: "Листовка для Икспресс" },
      { type: 'text', content: "Разработка рекламной листовки для нового подразделения типографии Икспресс. Формат А5 4+0, мелованная бумага, полноцветная печать." },
      { type: 'images', content: [iksprInnerImg], layout: 'column' },
      { type: 'heading', content: "Листовки для Суши 37" },
      { type: 'text', content: "Рекламные двусторонние листовки А5, мелованная бумага, 4+4." },
      { type: 'images', content: [su1Img, su2Img], layout: 'row' }
    ]
  },
  {
    title: "Корпоративные визитки",
    coverImage: pulseImg,
    tags: ["Визитки", "Корпоративный стиль", "Сборник макетов"],
    blocks: [
      { type: 'heading', content: "Визитки Ultronix" },
      { type: 'text', content: "Разработка визиток для компаний Ultronix, 4+4, цифровая печать." },
      { type: 'images', content: [ultr1Img, ultr2Img], layout: 'row' },
      { type: 'heading', content: "Визитки Pulse" },
      { type: 'text', content: "Разработка визиток для компаний Pulse, 4+4, офсетная печать." },
      { type: 'images', content: [pulse1Img, pulse2Img], layout: 'row' },
      { type: 'heading', content: "Визитки Швейка37" },
      { type: 'text', content: "Разработка визиток для Швейка37, 4+0, цифровая печать." },
      { type: 'images', content: [vizShveika1Img], layout: 'column' },
      { type: 'heading', content: "Визитки Checkpoint" },
      { type: 'text', content: "Разработка визиток для автомастерской, 4+0, цифровая печать." },
      { type: 'images', content: [checkpoint1Img], layout: 'column' },
      { type: 'heading', content: "Визитки Точка Сбора" },
      { type: 'text', content: "Разработка визиток для Точки Сбора, 4+0, цифровая печать." },
      { type: 'images', content: [toch1Img], layout: 'column' },
      { type: 'text', content: "Каждая визитка разработана с учётом корпоративного стиля компании и требований к печати." }
    ]
  },
  {
    title: "Фирменные блокноты",
    coverImage: bloknotAeroImg,
    tags: ["Блокноты", "Корпоративный стиль", "Сборник макетов"],
    blocks: [
      { type: 'heading', content: "Блокнот «Аэрооктябрь»" },
      { type: 'text', content: "Разработка дизайна фирменного блокнота. Офсетная бумага, твёрдая обложка.Обложка 4+0, 0+0, блок 1+0 К." },
      { type: 'images', content: [aero1Img, aero2Img], layout: 'row' },
      { type: 'heading', content: "Блокнот для Бурят Фармации" },
      { type: 'text', content: "Фирменный блокнот для фармацевтической компании. Корпоративные цвета, логотип на обложке. Обложка 4+0, 0+4, блок 1+0 К." },
      { type: 'images', content: [bur1Img, bur2Img, bur3Img], layout: 'row' }
    ]
  },
  {
    title: "Вырубная коробка",
    coverImage: boxzImg,
    tags: ["Вырубные изделия", "Полиграфия"],
    blocks: [
      { type: 'text', content: "Разработка дизайна и конструирование коробки для подарков, 100х100х100мм. Штанцформа сконструирована по близким аналогам. Картон 215гр." },
      { type: 'images', content: [korobka2Img], layout: 'column' },
      { type: 'text', content: "Развертка коробки с размерами и местами склейки." }
    ]
  },
  {
    title: "Каталог ТехноАвиа",
    coverImage: katalImg,
    tags: ["Наружная реклама", "Полиграфия", "Афиша"],
    blocks: [
      { type: 'text', content: "Дизайн каталога спецодежды ТехноАвиа. А4, 8 полос, мелованная бумага, крепление на скобу. Бумага мелованная 150гр." },
      { type: 'images', content: [katalog1Img], layout: 'column' },
      { type: 'images', content: [katalog2Img], layout: 'column' },
      { type: 'images', content: [katalog4Img], layout: 'column' },
      { type: 'images', content: [katalog3Img], layout: 'column' }
    ]
  },
  {
    title: "Хангер на дверь для отеля 'Жар-Птицы'",
    coverImage: hangerImg,
    tags: ["Вырубные изделия", "Полиграфия"],
    blocks: [
      { type: 'text', content: "Разработка дизайна хангера для дверей гостиничного номера. Вырубка по штанц-форме, двусторонняя печать, бумага 300гр." },
      { type: 'images', content: [zharImg], layout: 'column' }
    ]
  },
  {
    title: "Квартальные календари",
    coverImage: kvartImg,
    tags: ["Календари", "Полиграфия", "Печать"],
    blocks: [
      { type: 'heading', content: 'Квартальный календарь "Арены"' },
      { type: 'text', content: 'Дизайн квартального календаря для "Арены". Постер 297×210мм, подложка 297×160мм, блок 297×145мм.' },
      { type: 'images', content: [arenaImg], layout: 'column' },
      { type: 'heading', content: 'Квартальный календарь для спорткомплекса' },
      { type: 'text', content: "Дизайн квартального календаря для спортивного комплекса. Постер 297×210мм, подложка 297×160мм, блок 297×145мм." },
      { type: 'images', content: [sportcoImg], layout: 'column' },
      { type: 'heading', content: 'Квартальный календарь для "Бурят Фармации"' },
      { type: 'text', content: "Дизайн квартального календаря для фармацевтической фирмы. Постер 297×210мм, подложка 297×210мм, блок 297×145мм. Постер с глянцевой ламинацией." },
      { type: 'images', content: [burKvartImg], layout: 'column' }
    ]
  },
  {
    title: "Баннер для ООО Трансметалл",
    coverImage: transmetallImg,
    tags: ["Баннеры", "Полиграфия", "Широкоформатная печать"],
    blocks: [
      { type: 'text', content: "Разработка дизайна наружного баннера для компании Трансметалл. Широкоформатная печать, размер 2×3 м." },
      { type: 'images', content: [transmetall1Img], layout: 'column' },
      { type: 'text', content: "Баннер размещён на фасаде здания, виден с большого расстояния." }
    ]
  },

  /* {
    title: "Афиша",
    coverImage: stenkImg,
    tags: ["Наружная реклама", "Полиграфия", "Афиша"],
    blocks: [
      { type: 'text', content: "Дизайн афиши для культурного мероприятия. 297×465мм." },
      { type: 'images', content: [stenk1Img], layout: 'column' }
    ]
  } */
];