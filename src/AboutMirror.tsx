import React from 'react';
import aboutImg from "./assets/about3.jpg";

const AboutMirror = () => {
    return (
        <section className="about container">
            {/* RIGHT - навыки */}
            <div className="about-right">
                <div className="skills">


                    <svg className="skills-lines">
                        <line x1="50%" y1="50%" x2="50%" y2="10%" />
                        <line x1="50%" y1="50%" x2="80%" y2="25%" />
                        <line x1="50%" y1="50%" x2="90%" y2="50%" />
                        <line x1="50%" y1="50%" x2="80%" y2="75%" />
                        <line x1="50%" y1="50%" x2="50%" y2="90%" />
                        <line x1="50%" y1="50%" x2="20%" y2="75%" />
                        <line x1="50%" y1="50%" x2="10%" y2="50%" />
                        <line x1="50%" y1="50%" x2="20%" y2="25%" />
                    </svg>


                    <div className="skills-center">
                        Инструменты
                    </div>


                    <div className="skill-tag t1">Illustrator</div>
                    <div className="skill-tag t2">Photoshop</div>
                    <div className="skill-tag t3">CorelDRAW</div>
                    <div className="skill-tag t4">Indesign</div>
                    <div className="skill-tag t5">Adobe Acrobat Pro</div>
                    <div className="skill-tag t6">React</div>
                    <div className="skill-tag t7">Печатное<br/>оборудование</div>
                    <div className="skill-tag t8">Django</div>

                </div>
            </div>

            {/* LEFT - картинка с текстом */}
            <div className="about-left">
                <div className="about-image" style={{ backgroundImage: `url(${aboutImg})` }}>
                    <div className="about-content-overlay">
                        

                        {/* Опыт работы */}
                        <div className="experience-section">
                            <h3 className="section-title">Опыт работы</h3>
                            <ul className="experience-timeline">
                                <li className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-line"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">2016-2018</span>
                                        <span className="timeline-place">Типография «Икс-Пресс» (дизайнер)</span>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-line"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">2018-2024</span>
                                        <span className="timeline-place">Типография «Мегапринт» (дизайнер, печатник)</span>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-line"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">2024-2025</span>
                                        <span className="timeline-place">"Первая цифровая типография" (печатник, сублимация)</span>
                                    </div>
                                </li>
                                <li className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">2025–н.в.</span>
                                        <span className="timeline-place">РА «Афина» (дизайнер)</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            

        </section>
    );
};

export default AboutMirror;