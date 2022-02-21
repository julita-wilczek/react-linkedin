import { Button } from "react-bootstrap"
import skills from "../data/skills.json"

const SkillsCard = () => {

    return(
    skills.map((skill, index) => {return (<><div className="mb-2" key={index}>
        <h6>
            {skill}
        </h6>
        <Button size="sm">Endorse</Button>
        </div>
        <hr /></>)})
   )
}

export default SkillsCard
