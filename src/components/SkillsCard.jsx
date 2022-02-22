import { Button } from "react-bootstrap"
import skills from "../data/skills.json"

const SkillsCard = () => {

    return (
        skills.map((skill) => {
            return (<><div className="mb-2">
                <h6>
                    {skill.name}
                </h6>
                <Button size="sm">Endorse</Button>
            </div>
                <hr /></>)
        })
    )
}

export default SkillsCard
