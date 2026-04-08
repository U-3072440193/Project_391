import React from 'react';


const About = () => {
  return (
    <section className="about container">

      {/* LEFT - картинка с текстом */}
      <div className="about-left">
        <div className="about-image">
          <div className="about-content-overlay about-content-overlay-edu">
            {/* Образование */}
            <div className="education-section">
              <h3 className="section-title">Образование</h3>
              <div className="education-item">
                <div className="education-year">ИГХТУ 2008-2014</div>
                <div className="education-place">ВХК РАН</div>
                <div className="education-specialty">специальность: химия</div>
              </div>
              <div className="education-item">
                <div className="education-year">Академия ТОР 2025-2026</div>
                <div className="education-place">Курсы повышения квалификации</div>
                <div className="education-specialty">специальность: разработка веб-приложений</div>
              </div>
            </div>

          
          </div>
        </div>
      </div>

      {/* RIGHT - навыки */}
      <div className="about-right">
  <div className="skills">
  
 
  <svg className="skills-lines">
    <line x1="50%" y1="50%" x2="50%" y2="17%" />
<line x1="50%" y1="50%" x2="70%" y2="32%" />
<line x1="50%" y1="50%" x2="73%" y2="50%" />
<line x1="50%" y1="50%" x2="76%" y2="68%" />
<line x1="50%" y1="50%" x2="50%" y2="85.5%" />
<line x1="50%" y1="50%" x2="23%" y2="70.5%" />
<line x1="50%" y1="50%" x2="16%" y2="50%" />
<line x1="50%" y1="50%" x2="27%" y2="29.5%" />
  </svg>

  
  <div className="skills-center">
    Навыки
  </div>


  <div className="skill-tag t1">Сублимационная печать<br/>Monti Antonio</div>
  <div className="skill-tag t2">Цифровая печать<br/>Konica Minolta C6000L</div>
  <div className="skill-tag t3">Широкоформатная<br/>печать Graphtec FC1600</div>
  <div className="skill-tag t4">Постпечатная обработка<br/>Eurocutter</div>
  <div className="skill-tag t5">Допечатная подготовка</div>
  <div className="skill-tag t6">Дизайн</div>
  <div className="skill-tag t7">UI/UX</div>
  <div className="skill-tag t8">Веб-разработка</div>

</div>
</div>

    </section>
  );
};

export default About;