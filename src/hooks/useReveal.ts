import { useEffect } from 'react';

export const useReveal = () => {
  useEffect(() => {
    // Проверяем, является ли устройство мобильным
    const isMobile = () => {
      return window.innerWidth <= 768; // 768px - стандартный брейкпоинт для мобильных
    };

    const elements = document.querySelectorAll('.reveal');

    // Если это мобильное устройство, сразу показываем все элементы
    if (isMobile()) {
      elements.forEach(el => {
        el.classList.add('active');
      });
      return; // Отключаем IntersectionObserver на мобильных
    }

    // Для десктопа используем IntersectionObserver
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));

    // Добавляем слушатель на изменение размера окна
    const handleResize = () => {
      if (isMobile()) {
        // При переключении на мобильный вид — показываем все элементы
        document.querySelectorAll('.reveal').forEach(el => {
          el.classList.add('active');
        });
        observer.disconnect(); // Отключаем observer
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, []);
};