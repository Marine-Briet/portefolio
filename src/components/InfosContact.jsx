import { BsPhone, BsEnvelopeAt, BsGeoAlt, BsMap } from "react-icons/bs";


function InfosContact() {
    return (
        <address>
            <span className="fs-5">John Doe</span> <br />
            <span><BsMap/> 40 rue Laure Diebold</span> <br />
            <span><BsGeoAlt/> 69009 Lyon, France </span><br />
            <span><BsPhone/> 10 20 30 40 50 </span><br />
            <span><BsEnvelopeAt/> john.doe@gmail.com</span>
        </address>
    )
}

export default InfosContact;