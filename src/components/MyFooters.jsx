import { Row, Image, Col, DropdownButton, Dropdown } from "react-bootstrap";
import './MyFooters.css';

const MyFooter = () => {
  return (
    <>
    <footer>
    <img className="mb-2" id="linklogo"  src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo.png" alt="" />
    <Row className="justify-content-between">
      
      <Col md={2}>
        <a
          href="https://about.linkedin.com/it-it?lr=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2" >About</div> 
        </a>
        <a
          href="https://www.linkedin.com/legal/professional-community-policies?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B8v6Dzv78Snir%2B5rmAmhi4Q%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2">Community Guidelines</div> 
        </a>
        <div>
          <DropdownButton
            variant="outline"
            id="dropdown-basic-button"
            title="Privacy & Terms"
           size="sm"
           className="mb-1"
          >
            <Dropdown.Item
              href="https://www.linkedin.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.linkedin.com/legal/user-agreement"
              target="_blank"
              rel="noopener noreferrer"
            >
              User Agreement
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.linkedin.com/legal/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie Policy
            </Dropdown.Item>
            <Dropdown.Item
              href="https://www.linkedin.com/legal/copyright-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Copyright Policy
            </Dropdown.Item>
          </DropdownButton>
        </div>
        <a
          href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-secondary mb-2">Sales Solution</div>
        </a>
        <a
          href="https://safety.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="text-secondary">Safety Center</div>
        </a>
        <div className="mt-3 fs- text-secondary">
          LinkedIn Corporation © 2022
        </div>
      </Col>
      <Col md={2}>
      <a
          href="https://www.linkedin.com/accessibility"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2" >Accessibility</div> 
        </a>
        <a
          href="https://careers.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2">Careers</div> 
        </a>
        <a
          href="https://www.linkedin.com/help/linkedin/answer/62931"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2">Ad Choices</div> 
        </a>
        <a
          href="https://mobile.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2">Mobile</div> 
        </a>
        
      </Col>
      <Col md={2}>
      <a
          href="https://business.linkedin.com/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control&src=li-footer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2">Talent Solutions</div> 
        </a>
        <a
          href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer&lr=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2">Marketing Solutions</div> 
        </a>
        <a
          href="https://business.linkedin.com/it-it/marketing-solutions/ads?lr=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2">Advertising</div> 
        </a>
        <a
          href="https://business.linkedin.com/grow?&src=li-footer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary"
        >
          <div className="mb-2">Small Buisness</div> 
        </a>
      </Col>
      <Col md={3}>
      <i className="bi bi-question-circle-fill icon1"></i> <div  className="text-secondary ml-2 d-inline "> <a className="text-secondary" href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base">Questions?</a> <div className="ml-4 text-secondary">Visit our Help Center.</div> </div>
     

      <div className="mt-3"><i className="bi bi-gear-fill"></i>
      <div  className="text-secondary ml-2 d-inline "><a className="text-secondary" href="https://www.linkedin.com/psettings/">Manage your account and privacy</a> <div className="ml-4 text-secondary">Go to your settings.</div> </div></div>
      
      </Col>
      <Col  md={3}>
      <div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>English(english)</option>
    <option value="1">English (english)</option>
    <option value="2">Italian</option>
    <option value="3"></option>
  </select>
  
</div>
      </Col>
    </Row>
    </footer>
    </>
  );
};

export default MyFooter;
