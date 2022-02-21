//Here the card will be created dynamically depening on the type of the card
// We will use array to get the data

import education from "../data/education.json"
import { Image } from "react-bootstrap"

const EducationCard = () => {
  
    return (
        education.map((edu, index) => {return(<><div key={index} className="d-flex">
            <Image className="mr-2" style={{height:"50px"}} alt={edu.place} src={edu["place-img"]}/>
            <div>
            <h6 className="mb-0">{edu.place}</h6>
                <div style={{fontSize: "14px"}}>{edu["degree-type"]}, {edu["degree-name"]} </div>
                <div style={{fontSize: "14px"}} className="text-muted">{edu.date}</div>
            </div>
        </div>
        <hr />
        </>)}
    )
    )
   
}

export default EducationCard

