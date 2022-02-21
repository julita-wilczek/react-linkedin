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


const ProfilePage = () => {

    return (
    <Container>
        <Row>
            <Col className="col-8">
                <Header />
                <ProfileSection name="About" card="about"/>
                <ProfileSection name="Activity" card={<ActivityCard />}/>
                <ProfileSection name="Experience" card={<ExperienceCard />} />
                <ProfileSection name="Education" card={<EducationCard />}/>
                <ProfileSection name="Licenses & certifications" card={<LicenceCard /> }/>
                <ProfileSection name="Skills" card={<SkillsCard />} />
                <ProfileSection name="Language" card={<LanguageCard />} />
            </Col>
            <Col className="col-4">
                <PeopleSection name="People Also Viewed" array="also-viewed"/>
                <PeopleSection name="People You May Know" array="may-know" />
            </Col>
        </Row>
    <MyFooter />
    </Container>
    )
    }
    
    export default ProfilePage