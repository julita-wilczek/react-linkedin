
import { Image } from "react-bootstrap"
import licences from "../data/licences.json"


const LicenceCard = () => {
  
    return (
        licences.map((licence, index) => {return(<div key={index} className="d-flex">
            <Image className="mr-1" style={{height:"50px"}} alt={licence.name} src={licence["place-img"]}/>
            <div>
                <div><b>{licence.name}</b></div>
                <div>{licence.place}</div>
                <div>Issued on {licence["date-issued"]}</div>
                <p>Credential ID {licence["ID"]}</p>
            </div>
        </div>)}
    )
    )
   
}

export default LicenceCard

