
import experience from "../data/experience.json"
import { Image } from "react-bootstrap"


const ExperienceCard = () => {
  
    return (
        experience.map((exp, index) => {return(<div key={index} className="d-flex">
            <Image className="mr-1" style={{height:"50px"}} alt={exp.place} src={exp["place-img"]}/>
            <div>
            <div><b>{exp.name}</b></div>
                <div>{exp.place} · {exp.type}</div>
                <div>{exp.date} · {exp.length}</div>
                <div>{exp.location}</div>
                <div>{exp.description}</div>
                
            </div>
        </div>)}
    )
    )
   
}

export default ExperienceCard
