function Header() {
  return (
    <>
      {/* HERO (только фон) */}
      <header className="header">
        <div className="hero-box">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>
        </div>
      </header>

      {/* ВЫНЕСЕННЫЙ БЛОК С ЛИНИЯМИ */}
      <div className="hero-content-wrapper">

        {/* ЛИНИИ ТЕПЕРЬ ТУТ */}
        <svg className="rays" viewBox="0 0 1000 500" preserveAspectRatio="none">
          <line x1="500" y1="150" x2="130" y2="500" />
          <line x1="500" y1="150" x2="300" y2="500" />
          <line x1="500" y1="150" x2="500" y2="500" />
          <line x1="500" y1="150" x2="700" y2="500" />
          <line x1="500" y1="150" x2="870" y2="500" />
        </svg>

        <div className="schema-center">
          <div className="inner-sh-ce">
            <div className="center-left">
              <h3>Приветствую вас на моей страничке</h3>
              <h3 className="muted">Предлагаю посмотреть моё портфолио</h3>
            </div>

            <div className="big-circle"></div>

            <div className="center-right">
              <h1>Антон Зарубин</h1>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
export default Header;