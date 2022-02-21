import { Container, Row, Col } from "react-bootstrap"
import Header from "./Header"
import MyFooter from "./MyFooters"
import PeopleSection from "./PeopleSection"
import ProfileSection from "./ProfileSection"
import SkillsCard from "./SkillsCard"
import ProfileCard from "./ProfileCard"

const ProfilePage = () => {

    return (
    <Container>
        <Row>
            <Col className="col-8">
                <Header />
                <ProfileSection name="About" card="about"/>
                <ProfileSection name="Activity" card="activity"/>
                <ProfileSection name="Experience" card={<ProfileCard type="experience"/>} />
                <ProfileSection name="Education" card={<ProfileCard type="education"/>}/>
                <ProfileSection name="Licenses & certifications" card={<ProfileCard type="licences"/>}/>
                <ProfileSection name="Skills" card={<SkillsCard />} />
                <ProfileSection name="Language" />
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