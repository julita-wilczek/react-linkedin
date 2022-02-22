import languages from "..//data/languages.json"

const SkillsCard = () => {

    return (
        languages.map(language => {
            return (
                <>
                    <div>
                        <h6>
                            {language.name}
                        </h6>
                        <div className="mt-n2 text-muted" style={{ fontSize: "14px" }}>{language.description}</div>
                    </div>
                    <hr />
                </>
            )
        })
    )
}

export default SkillsCard
