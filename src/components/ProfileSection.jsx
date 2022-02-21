// Needs to be customizable
const ProfileSection = ({name, card}) => {
    
    const content = card !== "about" ? card : <div>I have over 15 years of experience working in data science. Currently, I work as Asana’s Senior Data Manager, improving products and services for our customers by using advanced analytics, standing up big-data analytical tools, creating and maintaining models, and onboarding compelling new data sets.</div>
    return (
    <div><h5>{name}</h5>
    {content}
   
    </div>

    )
    }
    
    export default ProfileSection