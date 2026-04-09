import React from 'react';
import './modal.css';

const PostersCase = () => {
    return (
        <div className="project-modal">

            {/* HERO */}
            <div className="modal-hero">
                <div className="modal-hero-bg">
                    <img src="/src/assets/case/poster-banner.jpg" alt="Психоделические постеры" />
                    <div className="modal-hero-overlay"></div>
                </div>

                <div className="modal-hero-content">
                    <div className="modal-badge">КОНЦЕПТ</div>

                    <h1 className="modal-hero-title">
                        PSYCHO 70<br />
                        <span className="accent">Серия постеров для музыкального события</span>
                    </h1>

                    <p className="modal-hero-subtitle">
                        Психоделический рок, поп-арт и визуальный язык 1970-х
                    </p>

                    <div className="project-stats">
                        <span className="stat-badge">Серия постеров</span>
                        <span className="stat-badge">Психоделика</span>
                        <span className="stat-badge">Поп-арт</span>
                    </div>
                </div>
            </div>

            <div className="inner-proj-modal">

                {/* INFO */}
                <div className="modal-info-grid">
                    <div className="info-card">
                        <div className="info-icon"><img src="/icons/concept.svg" alt="Формат" /></div>
                        <h3>Концепция</h3>
                        <p>Серия из 4 концертных постеров</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon"><img src="/icons/imagine.svg" alt="Вдохновение" /></div>
                        <h3>Вдохновение</h3>
                        <p>Уорхолл, Hendrix, Fillmore posters</p>
                    </div>

                    <div className="info-card">
                        <div className="info-icon"><img src="/icons/detail.svg" alt="Акцент" /></div>
                        <h3>Акцент</h3>
                        <p>Цветовая серийность и псевдо-3D типографика</p>
                    </div>
                </div>

                {/* PROCESS */}
                <div className="modal-section">
                    <div className="modal-section-header">
                        <h2>Процесс работы</h2>
                        <div className="section-line"></div>
                    </div>

                    <div className="process-steps">

                        {/* 1 КОНТЕКСТ */}
                        <div className="process-step">
                            <div className="process-step-image placeholder">
                                <div className="placeholder-image">
                                    <img src="/src/assets/case/psy-example.jpg" alt="Пример" />
                                </div>
                            </div>

                            <div className="process-step-content">
                                <h3>Контекст</h3>
                                <p className="process-step-description">
                                    Концертные постеры 70-х — отдельный жанр визуальной культуры.
                                </p>
                                <div className="process-step-details">
                                    <p>
                                        В эпоху психоделического рока афиша была не просто объявлением,
                                        а полноценным арт-объектом. Fillmore Auditorium, Family Dog,
                                        Гилмор — плакаты тех лет сочетали сюрреализм, витиеватую типографику
                                        и кислотные цвета.
                                    </p>
                                </div>
                                <p className="process-step-description">
                                    Современные афиши часто теряют этот характер.
                                </p>
                                <div className="process-step-details">
                                    <p>
                                        Цифровая унификация сделала концертные постеры визуально
                                        предсказуемыми. Исчезла смелость, экспериментальность
                                        и индивидуальность, присущая оригинальным работам 60-70-х.
                                    </p>
                                </div>
                            </div>
                        </div>



                        {/* 3 ЗАДАЧА */}
                        <div className="process-step no-image full-width-bg">
                            <div className="process-step-content full">
                                <h3>Задача</h3>

                                <div className="keywords">
                                    <span>характер</span>
                                    <span>эксперимент</span>
                                    <span>серийность</span>
                                    <span>эпоха</span>
                                </div>

                                <div className="process-step-details">
                                    <p>
                                        Создать серию постеров, которая передаёт дух психоделического рока
                                        70-х, использует приёмы поп-арта (серийность, ограниченная палитра)
                                        и современную типографику с эффектом псевдо-3D.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4 ИДЕЯ */}
                        <div className="process-step idea-step">

                            <div className="idea-wrapper">

                                {/* Контейнер с картинками 2×2 */}
                                <div className="idea-visual-container">
                                    <div className="idea-grid-2x2">
                                        <div className="grid-item">
                                            <img src="/src/assets/case/warhol.jpg" alt="Уорхолл" />
                                        </div>
                                        <div className="grid-item">
                                            <img src="/src/assets/case/hendrix.jpg" alt="Hendrix Electric Ladyland" />
                                        </div>
                                        <div className="grid-item">
                                            <img src="/src/assets/case/joplin.jpg" alt="Janis Joplin" />
                                        </div>
                                        <div className="grid-item">
                                            <img src="/src/assets/case/13thfl.jpg" alt="13 floor elevators" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="process-step-content">
                                <h3>Идея</h3>
                                <p className="process-step-description">
                                    Один музыкант — четыре грани образа.
                                </p>
                                <div className="process-step-details">
                                    <p>
                                        В основе концепции — серийность Энди Уорхолла: один и тот же образ
                                        музыканта повторяется в четырёх цветовых схемах. Каждый постер
                                        отсылает к разному настроению: от агрессивного рока до
                                        мечтательной психоделики.
                                    </p>
                                    <p style={{ marginTop: '12px' }}>
                                        Вдохновение: обложка Electric Ladyland Джимми Хендрикса
                                        (жёлтый фон + тёмный силуэт), визуальный язык «кислотников» 60-70-х.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 5 ТИПОГРАФИКА И ЦВЕТ */}
                        <div className="process-step">
                            <div className="idea-wrapper">

                                <div className="idea-visual-container">
                                    <div className="idea-grid-2x2">
                                        <div className="grid-item">
                                            <img src="/src/assets/case/typo-1.jpg" alt="Groovy Beach Regular" />
                                        </div>
                                        <div className="grid-item">
                                            <img src="/src/assets/case/typo-2.jpg" alt="Шрифт в перспективе" />
                                        </div>
                                        <div className="grid-item">
                                            <img src="/src/assets/case/typo-3.jpg" alt="Псевдо-3D эффект" />
                                        </div>
                                        <div className="grid-item">
                                            <img src="/src/assets/case/typo-4.jpg" alt="Экструзия" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="process-step-content">
                                <h3>Типографика и форма</h3>
                                <p className="process-step-description">
                                    Groovy Beach Regular + псевдо-3D.
                                </p>
                                <div className="process-step-details">
                                    <p>
                                        Выбран шрифт Groovy Beach Regular — его пухлые, органичные формы
                                        идеально передают дух 70-х. Для усиления эффекта «движения» шрифт
                                        помещён в лёгкую перспективу, а с помощью экструзии создан
                                        псевдо-3D-эффект, отсылающий к объёмным буквам на концертных
                                        афишах той эпохи.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 6 ЦВЕТОВЫЕ СХЕМЫ */}
                        <div className="process-step">
                            <div className="idea-wrapper">

                                <div className="idea-visual-container">
                                    <div className="idea-grid-2x2">
                                        <div className="grid-item-poster">
                                            <img src="/src/assets/case/poster-1.jpg" alt="Постер 1: жёлтый/тёмный" />
                                        </div>
                                        <div className="grid-item-poster">
                                            <img src="/src/assets/case/poster-2.jpg" alt="Постер 2: розовый/синий" />
                                        </div>
                                        <div className="grid-item-poster">
                                            <img src="/src/assets/case/poster-3.jpg" alt="Постер 3: фиолетовый/зелёный" />
                                        </div>
                                        <div className="grid-item-poster">
                                            <img src="/src/assets/case/poster-4.jpg" alt="Постер 4: оранжевый/красный" />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="process-step-content">
                                <h3>Цветовые схемы</h3>
                                <p className="process-step-description">
                                    4 постера — 4 настроения.
                                </p>
                                <div className="process-step-details">
                                    <p>
                                        <strong>Постер 1 — «Hendrix»:</strong> жёлтый фон + фиолетовый силуэт музыканта.
                                        Отсылка к обложке Electric Ladyland.
                                    </p>
                                    <p><strong>Постер 2 — «Кислотный»:</strong> электрик-синий фон + маджента.</p>
                                    <p><strong>Постер 3 — «Триповый»:</strong> оранжевый + темно-зелёный.</p>
                                    <p><strong>Постер 4 — «Закатный»:</strong> черный + красный, передающий энергию живого выступления.</p>
                                </div>
                                <div className="process-step-details">
                                    <p>
                                        Постеры созданы как набор — они могут существовать по отдельности,
                                        но вместе формируют мощное визуальное высказывание. Серийность
                                        усиливает эффект и делает айдентику мероприятия запоминающейся.
                                    </p>
                                </div>
                            </div>
                        </div>



                        {/* 8 РЕЗУЛЬТАТ */}
                        <div className="process-step">

                            <div className="process-step-image placeholder">
                                <div className="mockup-item-final">
                                    <img src="/src/assets/case/poster.jpg" alt="Финальный коллаж" />
                                </div>
                            </div>
                            <div className="process-step-content">
                                <h3>Результат</h3>
                                <p className="process-step-description">
                                    Психоделика встречает поп-арт.
                                </p>
                                <div className="process-step-details">
                                    <p>
                                        Серия из 4 постеров передаёт дух эпохи, использует мощный
                                        визуальный язык 70-х и остаётся современной за счёт
                                        минималистичной композиции. Постеры готовы к печати и
                                        масштабированию на любые носители.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default PostersCase;