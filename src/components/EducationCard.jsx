//Here the card will be created dynamically depening on the type of the card
// We will use array to get the data

import education from "../data/education.json"
import { Image } from "react-bootstrap"

const EducationCard = () => {
  
    return (
        education.map((edu, index) => {return(<div key={index} className="d-flex">
            <Image className="mr-1" style={{height:"50px"}} alt={edu.place} src={edu["place-img"]}/>
            <div>
                <div><b>{edu.place}</b></div>
                <div>{edu["degree-type"]},{edu["degree-name"]} </div>
                <div>{edu.date}</div>
            </div>
        </div>)}
    )
    )
   
}

export default EducationCard

