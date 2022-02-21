
import experience from "../data/experience.json"
import { Image } from "react-bootstrap"


const ExperienceCard = () => {
  
    return (
        experience.map((exp, index) => {return(<><div key={exp.name} className="d-flex">
            <Image className="mr-2" style={{height:"50px"}} alt={exp.place} src={exp["place-img"]}/>
            <div>
            <h6 className="mb-0">{exp.name}</h6>
                <div style={{fontSize: "14px"}}>{exp.place} · {exp.type}</div>
                <div style={{fontSize: "14px"}} className="text-muted">{exp.date} · {exp.length}</div>
                <div style={{fontSize: "14px"}} className="text-muted">{exp.location}</div>
                <div style={{fontSize: "14px"}} className="mt-2">{exp.description}</div>
                
            </div>
        </div>
        <hr />
        </>)}
    )
    )
   
}

export default ExperienceCard
