import { Container, Row, Col } from "react-bootstrap"
import Header from "../components/Header"
import MyFooter from "../components/MyFooter"
import PeopleSection from "../components/PeopleSection"
import ProfileSection from "../components/ProfileSection"
import SkillsCard from "../components/SkillsCard"
import ActivityCard from "../components/ActivityCard"
import LanguageCard from "../components/LanguageCard"
import ExperienceCard from "../components/ExperienceCard"
import EducationCard from "../components/EducationCard"
import LicenceCard from "../components/LicencesCard"
import "./ProfilePage.css"
import PeopleCard from "../components/PeopleCard"
import LearningSection from "../components/LearningSection"
import { useState, useEffect} from 'react'

const ProfilePage = () => {
    const [personalData, setPersonalData] = useState({})
    useEffect(() => {console.log(personalData.name)}, [personalData])
    
    return (
        <>
        <Container id="page">
            <Row>
                <Col className="col-12 col-md-8">
                    <Header personalData={personalData} setPersonalData={setPersonalData}/>
                    <ProfileSection name="About" card="about" bio={personalData.bio} />
                    <ProfileSection name="Activity" card={<ActivityCard user={personalData.name} />} />
                    <ProfileSection name="Experience" card={<ExperienceCard />} />
                    <ProfileSection name="Education" card={<EducationCard />} />
                    <ProfileSection name="Licenses & certifications" card={<LicenceCard />} />
                    <ProfileSection name="Skills" card={<SkillsCard />} />
                    <ProfileSection name="Language" card={<LanguageCard />} />
                </Col>
                <Col className="col-12 col-md-4" style={{marginTop: "-20px"}}>
                    <PeopleSection name="People Also Viewed" />
                    <PeopleSection name="People You May Know" />
                    <LearningSection />
                </Col>
                </Row>
        </Container>
            <MyFooter />
        </>
    )
}

export default ProfilePage