// use hooks
// making the edit form
 import { Row, Container, Col,  } from "react-bootstrap"
 import MyFooter from "./MyFooters"
 import ProfileSection from "./ProfileSection"
 import ExperienceCard from "./ExperienceCard"

const DetailsPage = () => {
    
    return(<> 
    <Container id="page">
        <Row>
            <Col className="col-8">
            <ProfileSection name="Experience" card={<ExperienceCard edit="true"/>} />
            </Col>
            <Col className="col-4">
                <div>Here put some other component to edit end stuff</div>
            </Col>
        </Row>
    <MyFooter />
    </Container>
    
    
    </>)
}

export default DetailsPage