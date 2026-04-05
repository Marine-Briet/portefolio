import React, {useState, useEffect} from 'react';
import { BsGeoAlt, BsCardText, BsBox, BsPerson, BsPeople } from "react-icons/bs";


export default function Modale() {
    const[items, setItems] = useState ({});

    const getData = async () => {
        const res = await fetch ("https://api.github.com/users/github-john-doe");
        const json = await res.json ();
        setItems (json);
    };

    useEffect( () => {
        getData();
    },[]);

    return (

        <div className="modal fade" data-bs-theme="dark" id="githubModal" tabIndex="-1" aria-labelledby="githubModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header border-bottom border-secondary border-opacity-50">
                            <h1 className="modal-title fs-5 text-white">Mon profil GitHub</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body my-3">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="modal-avatar col-8 col-sm-6">
                                        <img src={items.avatar_url} alt="Avatar de John Doe" className="img-fluid" />
                                    </div>

                                    <div className="modal-info col-8 col-sm-6 text-light fs-5">
                                       <p className="border-bottom pb-2 d-flex align-items-center gap-2"><BsPerson/> <a href="https://github.com/github-john-doe">{items.name}</a></p>
                                        <p className="border-bottom pb-2 d-flex align-items-center gap-2"><BsGeoAlt/> {items.location}</p>
                                        <p className="border-bottom pb-2 d-flex align-items-center gap-2"><BsCardText className="flex-shrink-0 align-self-start mt-1"/> {items.bio}</p>
                                        <p className="border-bottom pb-2 d-flex align-items-center gap-2"><BsBox/> Repositories : {items.public_repos}</p>
                                        <p className="border-bottom pb-2 d-flex align-items-center gap-2"><BsPeople/> Followers : {items.followers}</p>
                                        <p className="d-flex align-items-center gap-2"><BsPeople/> Following : {items.following}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-top border-secondary border-opacity-50">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}