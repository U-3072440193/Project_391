type PrintCardSize = "normal" | "wide" | "tall" | "big";

type PrintCardProps = {
  title: string;
  image: string;
  tags?: string[];
  onClick?: () => void;
  size?: PrintCardSize;
  className?: string;
};

export const PrintCard = ({ title, image, tags, onClick, size = "normal" }: PrintCardProps) => {
  return (
    <div className={`print-card ${size}`} onClick={onClick}>
      <img src={image} alt={title} className="print-card-img" />
      <div className="print-card-overlay">
        <div className="card-center">
          <div className="card-tags">
            {tags?.map((tag, index) => (
              <span key={`${tag}-${index}`} className="card-tag">{tag}</span>
            ))}
          </div>
          <h2 className="card-title">{title}</h2>
          <button className="card-btn" aria-label={`Подробнее о ${title}`}>посмотреть</button>
        </div>
      </div>
    </div>
  );
};