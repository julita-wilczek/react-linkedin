// use hooks
// making the edit form
 import { Row, Container, Col,  } from "react-bootstrap"
 import MyFooter from "./MyFooters"
 import ProfileSection from "./ProfileSection"
 import ExperienceCard from "./ExperienceCard"
 import "./DetailsPage.css"

const DetailsPage = () => {
    
    return(<> 
     <>
    <Container id="page">
        <Row>
            <Col className="col-8">
            <ProfileSection name="Experience" card={<ExperienceCard edit="true"/>} />
            </Col>
            <Col className="col-4">
                <div className="editsection">
                    <div className="d-flex justify-content-between">
                       <a href="/"> <div className="text-secondary">Edit public profile & URL</div> </a>
                       <i class="bi questionIcon bi-question-circle-fill" title="Test"></i>
                    </div>

                    <div className="d-flex mt-2 justify-content-between">
                       <a href="/"> <div className="text-secondary">Add profile in another language</div> </a>
                       <i class="bi questionIcon bi-question-circle-fill"></i>
                    </div>
                </div>
            </Col>
        </Row>
    
    </Container>
    <MyFooter />
   </>
    
    
    </>)
}

export default DetailsPage