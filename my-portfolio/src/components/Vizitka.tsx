import './App.css'

// 1. Сначала определяем интерфейсы
interface PrintCardProps {
  title: string;
  description?: string; // ? означает необязательный
  image?: string;
}

interface CaseItemProps {
  title: string;
}



function App() {
  return (
    <div className="page"></div>
  );
}

export default App;