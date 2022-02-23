import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"
import MyFooter from "./MyFooters"
import PeopleSection from "./PeopleSection"
import ProfileSection from "./ProfileSection"
import SkillsCard from "./SkillsCard"
import ActivityCard from "./ActivityCard"
import LanguageCard from "./LanguageCard"
import ExperienceCard from "./ExperienceCard"
import EducationCard from "./EducationCard"
import LicenceCard from "./LicencesCard"
import "./ProfilePage.css"
import PeopleCard from "./PeopleCard"
import LearningSection from "./LearningSection"
import { useState, } from 'react'

const ProfilePage = () => {
    const [personalData, setPersonalData] = useState({})
    
    return (
        <>
        <Container id="page">
            <Row>
                <Col className="col-12 col-md-8">
                    <Header personalData={personalData} setPersonalData={setPersonalData}/>
                    <ProfileSection name="About" card="about" bio={personalData.bio} />
                    <ProfileSection name="Activity" card={<ActivityCard />} />
                    <ProfileSection name="Experience" card={<ExperienceCard />} />
                    <ProfileSection name="Education" card={<EducationCard />} />
                    <ProfileSection name="Licenses & certifications" card={<LicenceCard />} />
                    <ProfileSection name="Skills" card={<SkillsCard />} />
                    <ProfileSection name="Language" card={<LanguageCard />} />
                </Col>
                <Col className="col-12 col-md-4">
                    <PeopleSection name="People Also Viewed" card={<PeopleCard />} />
                    <PeopleSection name="People You May Know" card={<PeopleCard />} />
                    <LearningSection />
                </Col>
                </Row>
        </Container>
            <MyFooter />
        </>
    )
}

export default ProfilePage