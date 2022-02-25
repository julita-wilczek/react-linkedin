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
            <Col className="col-12 col-md-8" style={{marginTop:"-20px"}}>
            <ProfileSection name="Experience" card={<ExperienceCard edit="true"/>}/>
            </Col>
            <Col className="col-12 col-md-4">
                <div className="editsection" style={{marginTop:"0px"}}>
                    <div className="d-flex justify-content-between">
                       <a href="/"> <div style={{fontSize: "16px", fontWeight: "600", color:"rgba(0,0,0,0.6)"}}>Edit public profile & URL</div> </a>
                       <i class="bi questionIcon bi-question-circle-fill" style={{fontSize: "16px", fontWeight: "600", color:"rgba(0,0,0,0.6)"}} title="Test"></i>
                    </div>
                    <hr />
                    <div className="d-flex mt-2 justify-content-between">
                       <a href="/"> <div style={{fontSize: "16px", fontWeight: "600", color:"rgba(0,0,0,0.6)"}}>Add profile in another language</div> </a>
                       <i class="bi questionIcon bi-question-circle-fill" style={{fontSize: "16px", fontWeight: "600", color:"rgba(0,0,0,0.6)"}}></i>
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