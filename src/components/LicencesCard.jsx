
import { Image } from "react-bootstrap"
import licences from "../data/licences.json"


const LicenceCard = () => {
  
    return (
        licences.map((licence, index) => {return(<><div key={index} className="d-flex">
            <Image className="mr-2" style={{height:"50px"}} alt={licence.name} src={licence["place-img"]}/>
            <div>
                <h6 className="mb-0">{licence.name}</h6>
                <div style={{fontSize: "14px"}}>{licence.place}</div>
                <div style={{fontSize: "14px"}} className="text-muted">Issued on {licence["date-issued"]}</div>
                <div style={{fontSize: "14px"}} className="text-muted">Credential ID {licence["ID"]}</div>
            </div>
            </div>
            <hr />
        </>)}
    )
    )
   
}

export default LicenceCard

