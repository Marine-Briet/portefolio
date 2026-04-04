function ServiceCard({title, content, icon, titleClass, contentClass, iconClass}) {
    return (
        <div className="border border-secondary-subtle rounded px-2 pt-4 pb-1 m-2 h-100">
            <div className={iconClass}>{icon}</div>
            <h2 className={titleClass}>{title}</h2>
            <p className={contentClass}>{content}</p>
        </div>
    )
}

export default ServiceCard;