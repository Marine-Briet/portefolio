function PageIntro({ title, content }) {
    return (
        <div className="page-intro text-center my-4">
            <div className="d-inline-block border-bottom border-primary border-3 pb-2">
                <h1 className="fw-bold">{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default PageIntro;