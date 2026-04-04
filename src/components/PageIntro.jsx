function PageIntro({ title, content }) {
    return (
        <div className="page-intro text-center my-5">
            <h1 className="fw-bold">{title}</h1>
            <p>{content}</p>
            <hr className="border border-primary border-2 opacity-100 w-25 mx-auto" />
        </div>
    )
}

export default PageIntro;