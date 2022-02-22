
import experience from "../data/experience.json"
import { Image, Button } from "react-bootstrap"
import { useState, useEffect } from "react"

const ExperienceCard = ({edit}) => {
  
    const [editButton, setEditButton] = useState(false)
    useEffect(() => {
        edit ? setEditButton(true) : setEditButton(false)
    }, [edit])


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
        {editButton && (<Button>Edit me</Button>)}
        <hr />
        </>)}
    )
    )
   
}

export default ExperienceCard
