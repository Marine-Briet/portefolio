function ProjectCard({title, content, titleClass, contentClass, skills, skillsClass, src, alt}) {
    return (
        <div className="custom-card border border-secondary border-opacity-25 rounded my-2 mx-1 pb-0 h-100 d-flex flex-column">
            <img src={src} alt={alt} className="img-fluid w-100 rounded-top"/>
            <h2 className={titleClass}>{title}</h2>
            <p className={contentClass}>{content}</p>
            <div>
                <button className="btn btn-primary mb-3">Voir le site</button>
            </div>
            <p className={skillsClass}>{skills}</p>
        </div>
    )
}

export default ProjectCard;