import {Row,Col, DropdownButton, Dropdown} from "react-bootstrap";

const MyFooter = () => {
    return(
   <Row className="justify-content-between">
    <Col>
    <a href="https://about.linkedin.com/it-it?lr=1" target="_blank" rel="noopener noreferrer"><div>About</div></a>
    <a href="https://www.linkedin.com/legal/professional-community-policies?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8v6Dzv78Snir%2B5rmAmhi4Q%3D%3D" target="_blank" rel="noopener noreferrer" >Community Guidelines</a>
    <div><DropdownButton id="dropdown-basic-button" title="Privacy & Terms">
  <Dropdown.Item href="#/action-1"></Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  <Dropdown.Item href="#/action-4">Something else</Dropdown.Item>
</DropdownButton></div>
<a href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer" target="_blank" rel="noopener noreferrer"><div>Sales Solution</div></a>
    <a href="https://safety.linkedin.com/" target="_blank" rel="noopener noreferrer" ><div>Safety Center</div></a>
    </Col>
    <Col>
    2
    </Col>
    <Col>
    3
    </Col>
    <Col>
    2
    </Col>
    <Col>
    3
    </Col>
    
    
    </Row>
    
)
}

export default MyFooter