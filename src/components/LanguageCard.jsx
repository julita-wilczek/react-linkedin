import languages from "..//data/languages.json"

const SkillsCard = () => {

    return(
    languages.map(language => {return (
<div>
    <h6>
        {language.name}
    </h6>
    <p>{language.description}</p>
    </div>
    )})
    )
}

export default SkillsCard
