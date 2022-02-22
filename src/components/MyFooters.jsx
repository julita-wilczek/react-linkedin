import { Row, Container, Col, DropdownButton, Dropdown, Nav } from "react-bootstrap";
import "./MyFooters.css";

const MyFooter = () => {
  return (
    <Container fluid="md">
      <footer>
        <img
          className="mb-2"
          id="linklogo"
          src="https://blog.waalaxy.com/wp-content/uploads/2021/01/Linkedin-Logo.png"
          alt=""
        />
        <Row className="justify-content-between">
          <Col xs={2}>
            <a
              href="https://about.linkedin.com/it-it?lr=1"
              target="_blank"
              rel="noopener noreferrer"

            >
              <div className="mb-2 text-secondary">About</div>
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
                id="dropdown-basic-button"
                title="Privacy & Terms"
                size="sm"
                className="mb-2"
              >
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Privacy Policy
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/user-agreement"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  User Agreement
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
                >
                  Cookie Policy
                </Dropdown.Item>
                <Dropdown.Item
                  href="https://www.linkedin.com/legal/copyright-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="optionDrop"
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
              <span>LinkedIn Corporation © 2022</span>
            </div>
          </Col>
          <Col xs={2}>
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

          </Col >
          <Col xs={2}>
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
          <Col xs={3}>
          <div className="d-flex"><i className="bi bi-question-circle-fill icon1"></i> <div className="ml-2"><a className="text-secondary" style={{fontSize: "14px"}} href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base">Questions?</a> <div className="text-secondary" style={{fontWeight: "400"}}>Visit our Help Center.</div> </div></div>
  
            <div className="d-flex"><i className="bi bi-gear-fill"></i>
              <div className="text-secondary ml-2"><a className="text-secondary" style={{fontSize: "14px"}} href="https://www.linkedin.com/psettings/">Manage your account and privacy</a> <div className="text-secondary" style={{fontWeight: "400"}}>Go to your settings.</div> </div></div>

          </Col>
          <Col xs={3} md={3}>
            <div className="text-secondary mb-1" style={{fontWeight: "400"}}>Select Language</div>
            <div className="form-floating">
              <select className="form-select" style={{padding: "0px 32px 0px 8px"}} id="floatingSelect" aria-label="Floating label select example">
                <option defaultValue>English(English)</option>
                <option value="1">Polish (polski)</option>
                <option value="2">Italian (italiano)</option>
              </select>

            </div>
          </Col>
        </Row >
      </footer >
      </Container>
  );
};

export default MyFooter;
