type ServiceCardProps = {
  title: string;
  description: string;
  image?: string;
  onClick?: () => void;
};

export function ServiceCard({ title, description, image, onClick }: ServiceCardProps) {
  return (
    <div className="service-card-full" onClick={onClick}>
      {image && <img src={image} alt={title} className="service-card-img" />}
      <div className="service-card-overlay">
        <div className="service-card-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="service-card-btn">Подробнее</button>
        </div>
      </div>
    </div>
  );
}