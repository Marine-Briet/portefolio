function CardHome() {
    
    const titleH2 = "fw-bold border-bottom border-primary border-3 pb-2";
    
    
    return (
        <div className="container shadow-lg rounded">
            <div className="row">
                <div className="col-12 col-md-6 my-4 px-4">
                    <h2 className={titleH2}>A propos</h2>
                    <img src="/img/john-doe-about.jpg" alt="John Doe" className="img-fluid mt-5 mb-3" />
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed tempor purus. Mauris ultricies lacinia elementum. Sed eget dictum turpis. Duis tincidunt euismod orci.</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed tempor purus. Mauris ultricies lacinia elementum. Sed eget dictum turpis. Duis tincidunt euismod orci.</p>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed tempor purus. Mauris ultricies lacinia elementum. Sed eget dictum turpis. Duis tincidunt euismod orci. </p>
                </div>
                <div className="col-12 col-md-6 my-4 px-4">
                    <h2 className={titleH2}>Mes compétences</h2>
                    <div className="progress-bar-skills mt-5">
                        <p className="mb-1">HTML5 90%</p>
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-danger"  style={{width: "90%"}}></div>
                        </div>

                        <p className="mb-1">CSS3 80%</p>
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-info" style={{width: "80%"}}></div>
                        </div>

                        <p className="mb-1">JAVASCRIPT 70%</p>
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning" style={{width: "70%"}}></div>
                        </div>

                        <p className="mb-1">PHP 60%</p>
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success"  style={{width: "60%"}}></div>
                        </div>

                        <p className="mb-1">REACT 50%</p>
                        <div className="progress mb-3" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar"  style={{width: "50%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default CardHome;