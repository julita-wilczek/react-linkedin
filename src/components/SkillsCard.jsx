import { Button } from "react-bootstrap"
import skills from "../data/skills.json"

const SkillsCard = () => {

    return(
    skills.map((skill, index) => {return (<div key={index}>
        <h6>
            {skill}
        </h6>
        <Button>Endorse</Button>
        </div>)})
   )
}

export default SkillsCard
