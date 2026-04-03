function Accordion({title, children, id}) {
return (
    <div className="accordion">
        <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
                    {title}
                </button>
            </h2>
            <div id={id} className="accordion-collapse collapse">
                <div className="accordion-body">
                    {children}
                </div>
            </div>
        </div>
    </div>
)
}

export default Accordion;