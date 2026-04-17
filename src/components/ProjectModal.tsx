import { type Project } from '../data/printItems';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="project-modal-header">
          <h2 className="project-modal-title">{project.title}</h2>
          <button className="project-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="project-modal-body">
          {project.blocks.map((block, index) => (
            <div key={index} className={`project-modal-block block-${block.type}`}>
              {block.type === 'heading' && (
                <h3 className="project-modal-heading">{block.content}</h3>
              )}
              {block.type === 'text' && (
                <p className="project-modal-text">{block.content}</p>
              )}
              {block.type === 'images' && (
                <div className={`project-modal-images layout-${block.layout || 'grid'}`}>
                  {(block.content as string[]).map((img, imgIndex) => (
                    <div key={imgIndex} className="project-modal-image">
                      <img src={img} alt={`${project.title} ${imgIndex + 1}`} />
                      {block.captions?.[imgIndex] && (
                        <p className="project-modal-caption">{block.captions[imgIndex]}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};